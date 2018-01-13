function sortParts(parts, optimization) {
	if (optimization !== "mass" && optimization !== "cost") {
		optimization = "mass";
	}
	
	var ascending = function (part) {
		return part[optimization];
	};
	var descending = function (part) {
		return -part[optimization];
	};
	var descending_fuelmass = function (part) {
		return -part.mass_fuel;
	};
	
	var types = _.groupBy(parts, "type");
	return {
		lfoEngines : _.sortBy(types[TYPES.LFO_ENGINE], descending),
		lfoTanks : _.sortBy(types[TYPES.LFO_TANK], descending_fuelmass),
		boosters : _.sortBy(types[TYPES.BOOSTER], descending),
		stackDecouplers : _.sortBy(_.where(types[TYPES.DECOUPLER], {radial:undefined}), ascending),
		radialDecouplers : _.sortBy(_.where(types[TYPES.DECOUPLER], {radial:true}), ascending),
		branches : types[TYPES.BRANCH]
	}
}
	
function SettingsController($scope) {
	//default settings
	$scope.optimization = "mass";
	$scope.optimization2;
	$scope.payload;
	$scope.deltaV;
	$scope.planet = PLANETS[0];
	$scope.gravity = $scope.planet.gravity;
	$scope.minTWR = 1.2;
	$scope.maxTWR;
	$scope.minTime;
	$scope.maxTime;
	$scope.maxMass;
	$scope.maxPartCount;
	$scope.maxStages = 3;
	$scope.maxStacks = 4;
	$scope.cluster = false;
	$scope.parallel = false;
	$scope.asparagus = false;
	$scope.atmosphere = false;
	$scope.payloadDecoupler = true;
	$scope.lastStageSingle = true;
	$scope.tankDiametersEqual = true;
	$scope.tankDiametersEqualEngineDiameter = true;
	$scope.tankDiametersGreaterThenEngineDiameter = true;
	$scope.gimbal = true;
	$scope.throttleable = true;
	$scope.packTree = _.map(PACKS, function (pack) {
		var result = Object.create(pack);
		result.parts = _.map(_.groupBy(pack.parts, "type"), function (parts, partId) {
			return {
				name:TYPE_NAMES_PLURAL[partId],
				parts:parts
			}
		});
		return result;
	});
	$scope.webworkersSupported = false;
	$scope.searching = false;
	$scope.maxStagings = 20;
	$scope.bestStagings = [];
	$scope.bestStagingsCount = 0;
	$scope.bestStagingsValid = 0;
	$scope.bestStagingsInvalid = 0;
	$scope.bestStagingsArgs = null;

	//constants
	$scope.NEEDS_OPTIMIZATION2 = NEEDS_OPTIMIZATION2;
	$scope.PLANETS = PLANETS;
	$scope.PACKS = PACKS;
	$scope.TYPES = TYPES;
	$scope.TYPE_NAMES_PLURAL = TYPE_NAMES_PLURAL;
	$scope.OPTIMIZATION_NAMES = OPTIMIZATION_NAMES;
	$scope.Math = Math;
	$scope.parseFloat = parseFloat;
	
	//static functions
	function convertStaging(staging, args) {
		var result;
		if (staging) {
			result = {
				id : staging.id,
				attempt : $scope.bestStagingsCount + 1,
				optimization : staging.optimization,
				metric : staging.metric,
				partCount : KSP.Stages.partCount(staging),
				cost : KSP.Stages.cost(staging),
				mass : KSP.Stages.massStart(staging),
				payloadFraction : 0,
				deltaV : KSP.Stages.deltaVTotal(staging, args.atm),
				time : KSP.Stages.timeTotal(staging),
				stages : []
			};
			var runningDeltaVTotal = 0;
			var runningTimeTotal = 0;
			var currentStage = staging;
			while (currentStage) {
				var newStage = Object.create(currentStage);
				newStage.next = undefined;
				newStage.costStage = KSP.Stage.cost(currentStage);
				newStage.costTotal = KSP.Stages.cost(currentStage);
				newStage.massStage = KSP.Stage.massStart(currentStage);
				newStage.massTotal = KSP.Stages.massStart(currentStage);
				newStage.deltaVStage = KSP.Stages.deltaVStage(currentStage, args.atm);
				runningDeltaVTotal += newStage.deltaVStage
				newStage.deltaVTotal = runningDeltaVTotal;
				newStage.twr = KSP.Stages.twr(currentStage, args.atm, args.planet);
				newStage.timeStage = KSP.Stages.timeStage(currentStage, args.atm);
				runningTimeTotal += newStage.timeStage
				newStage.timeTotal = runningTimeTotal;
				newStage.others = KSP.Parts.countUnique(currentStage.others);
				newStage.lfoEngines = KSP.Parts.countUnique(currentStage.lfoEngines);
				newStage.lfoTanks = KSP.Parts.countUnique(currentStage.lfoTanks).reverse();
				newStage.boosters = KSP.Parts.countUnique(currentStage.boosters);
				newStage.decouplers = KSP.Parts.countUnique(currentStage.decouplers);
				newStage.branches = KSP.Parts.countUnique(currentStage.branches);
				
				result.stages.push(newStage);
				currentStage = currentStage.next;
			}
			result.stages.reverse();
			result.payloadFraction = result.stages[0].payload / result.mass;
		}
		return result;
	}
	
	function onSearchResult(staging) {
		$scope.bestStagingsCount++;
		staging = convertStaging(staging, $scope.bestStagingsArgs);
		var bestStagings = $scope.bestStagings;
		if (!staging) {
			$scope.bestStagingsInvalid++;
		} else if (staging.id === $scope.bestStagingsArgs.id) {
			$scope.bestStagingsValid++;
			if (bestStagings.length < $scope.maxStagings || staging.metric <= bestStagings[bestStagings.length-1].metric) {
				var index = _.sortedIndex(bestStagings, staging, "metric");
				if (!bestStagings[index] || staging.metric !== bestStagings[index].metric) {
					bestStagings.splice(index, 0, staging);
					if (bestStagings.length > $scope.maxStagings) {
						bestStagings.pop();
					}
				}
			}
		} else {
			$scope.bestStagingsCount--;
		}
	}
	
	//methods
	$scope.startSearch = function (args) {
		args.interval = 500;  //slow down the search when processing in the main thread
		$scope.stopSearch = searchForOptimalStaging(args, function (staging) {
			$scope.$apply(function () {
				onSearchResult(staging);
			});
		});
	};
	
	$scope.stopSearch = function () {};  //overwritten by startSearch
	
	$scope.getEnabledParts = function () {
		var enabledParts = [];
		var packs = $scope.packTree;
		for (var x = 0, xl = packs.length; x < xl; ++x) {
			if (packs[x].enabled) {
				var types = packs[x].parts;
				for (var y = 0, yl = types.length; y < yl; ++y) {
					if (types[y].enabled) {
						var parts = types[y].parts
						for (var z = 0, zl = parts.length; z < zl; ++z) {
							if (parts[z].enabled) enabledParts.push(parts[z]);
						}
					}
				}
			}
		}
		return enabledParts;
	}
	
	$scope.search = function () {
		$scope.stop();
		
		var args = {
			id : Math.ceil(0xFFFFFFFF * Math.random()),
			optimization : $scope.optimization,
			optimization2 : (NEEDS_OPTIMIZATION2[$scope.optimization] ? document.getElementById("settingsOptimization2").value : null),  //workaround for Angular bug //$scope.optimization2,
			next : {payload:$scope.payload},
			deltaV : $scope.deltaV,
			planet : ($scope.planet ? $scope.planet : {gravity:$scope.gravity}),
			minTWR : $scope.minTWR,
			maxTWR : $scope.maxTWR,
			minTime : $scope.minTime,
			maxTime : $scope.maxTime,
			maxMass : $scope.maxMass,
			maxPartCount : $scope.maxPartCount,
			atm : ($scope.atmosphere ? 1 : 0),
			maxStacks : ($scope.lastStageSingle ? 1 : $scope.maxStacks),
			cluster : $scope.cluster,
			parallel : false,
			asparagus : false,
			decoupling : $scope.payloadDecoupler,
			tankDiametersEqual : $scope.tankDiametersEqual,
			tankDiametersEqualEngineDiameter : $scope.tankDiametersEqual && $scope.tankDiametersEqualEngineDiameter,
			tankDiametersGreaterThenEngineDiameter : $scope.tankDiametersEqual && $scope.tankDiametersGreaterThenEngineDiameter,
			gimbal : $scope.gimbal || undefined,
			throttleable : $scope.throttleable || undefined,
			maxStages : $scope.maxStages,
			stagesMaxStacks : $scope.maxStacks,
			stagesParallel : $scope.parallel || $scope.asparagus,
			stagesAsparagus : $scope.asparagus,
			stagesThrottleable : undefined,
			parts : sortParts($scope.getEnabledParts(), $scope.optimization)
		};
		
		$scope.bestStagings = [];
		$scope.bestStagingsCount = 0;
		$scope.bestStagingsValid = 0;
		$scope.bestStagingsInvalid = 0;
		$scope.bestStagingsArgs = args;
		
		var singleStage = findOptimalStage(args);
		if (singleStage) {
			singleStage.id = args.id;
			onSearchResult(singleStage);
		}
		
		if (args.maxStages > 1) {
			$scope.searching = true;
			$scope.startSearch(args);
		}
	}
	
	$scope.stop = function () {
		$scope.stopSearch();
		$scope.searching = false;
	};
	
	//event listeners
	$scope.onOptimizationChange = function () {
		if (NEEDS_OPTIMIZATION2[$scope.optimization]) {
			if (!$scope.optimization2) $scope.optimization2 = "mass";
		} else {
			$scope.optimization2 = undefined;
		}
	};
	$scope.onPlanetChange = function () {
		$scope.gravity = $scope.planet.gravity;
	};
	$scope.onGravityChange = function () {
		$scope.planet = null;
	};
	$scope.onMaxStagesChange = function () {
		if ($scope.maxStages <= 1) {
			$scope.asparagus = false;
		}
	};
	$scope.onMaxStacksChange = function () {
		if ($scope.maxStacks <= 1) {
			$scope.cluster = false;
			$scope.asparagus = false;
		}
	};
	$scope.onAsparagusChange = function () {
		if ($scope.asparagus) $scope.maxStages = Math.max($scope.maxStages, 2);
	};
	$scope.onTankDiametersEqualChange = function () {
		if (!$scope.tankDiametersEqual) $scope.tankDiametersEqualEngineDiameter = false;
	}
	$scope.onPartListItemChange = function (partListItem) {
		var parts = partListItem.parts;
		if (parts) {
			for (var x = 0, xl = parts.length; x < xl; ++x) {
				var part = parts[x];
				if (!$scope.initialization || !part.size || !isNaN(part.size)) {
					part.enabled = partListItem.enabled;
					$scope.onPartListItemChange(part);
				}
			}
		}
		if (partListItem.enabled) {
			for (var x = 1, xl = arguments.length; x < xl; ++x) {
				arguments[x].enabled = true;
			}
		}
	};
	
	//initialization
	$scope.initialization = true;
	$scope.packTree[0].enabled = true;
	$scope.onPartListItemChange($scope.packTree[0]);
	$scope.initialization = false;
	
	//web worker initialization
	var kspcalcWorkers;
	if (typeof Worker !== "undefined") {
		try {
			kspcalcWorkers = [];
			//spawn 4 web workers
			for (var x = 0, xl = 4; x < xl; ++x) {
				kspcalcWorkers[x] = new Worker("kspcalc.js");
				kspcalcWorkers[x].addEventListener("message", function (evt) {
					$scope.$apply(function () {
						onSearchResult(evt.data);
					});
				});
			}
			$scope.startSearch = function (args) {
				for (var x = 0, xl = kspcalcWorkers.length; x < xl; ++x) {
					kspcalcWorkers[x].postMessage(args);
				}
			};
			$scope.stopSearch = function () {
				for (var x = 0, xl = kspcalcWorkers.length; x < xl; ++x) {
					kspcalcWorkers[x].postMessage({cancel:true});
				}
			};
			$scope.webworkersSupported = true;
		} catch (e) {
			console.error("Failed to create web workers", e);
			kspcalcWorkers = null;
		}
	}
}