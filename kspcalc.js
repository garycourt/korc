var PLANETS = [
    {name:"None", gravity:0},
	{name:"Moho", gravity:2.70},
	{name:"Eve", gravity:16.7},
	{name:"Gilly", gravity:0.049},
	{name:"Kerbin", gravity:9.82},
	{name:"Mun", gravity:1.63},
	{name:"Minmus", gravity:0.491},
	{name:"Duna", gravity:2.94},
	{name:"Ike", gravity:1.10},
	{name:"Dres", gravity:1.13},
	{name:"Jool", gravity:7.85},
	{name:"Laythe", gravity:7.85},
	{name:"Vall", gravity:2.31},
	{name:"Tylo", gravity:7.85},
	{name:"Bop", gravity:0.589},
	{name:"Pol", gravity:0.373},
	{name:"Eeloo", gravity:1.69}
];

var TYPES = {
	LFO_ENGINE:1,
	LFO_TANK:2,
	BOOSTER:3,
	DECOUPLER:4,
	DUCT:5
};

var TYPE_NAMES_PLURAL = {
	1:"LF/O Engines",
	2:"LF/O Tanks",
	3:"Boosters",
	4:"Decouplers",
	5:"Fuel Ducts"
}

var PACKS = [
	{
		name:"Stock 0.23", 
		parts:[
			//LF/O Engines
			{name:"Rockomax 'Mainsail' Liquid Engine", type:TYPES.LFO_ENGINE, cost:2850, mass:6000, thrust:1500000, isp_vac:330, isp_atm:280},
			{name:"Rockomax 'Skipper' Liquid Engine", type:TYPES.LFO_ENGINE, cost:2850, mass:4000, thrust:650000, isp_vac:350, isp_atm:300},
			{name:"Rockomax 'Poodle' Liquid Engine", type:TYPES.LFO_ENGINE, cost:1600, mass:2500, thrust:220000, isp_vac:390, isp_atm:270},
			{name:"LV-N Atomic Rocket Motor", type:TYPES.LFO_ENGINE, cost:8700, mass:2250, thrust:60000, isp_vac:800, isp_atm:220},
			{name:"R.A.P.I.E.R. Engine", type:TYPES.LFO_ENGINE, cost:5900, mass:1750, thrust:175000, isp_vac:360, isp_atm:320},
			{name:"Toroidal Aerospike Rocket", type:TYPES.LFO_ENGINE, cost:3850, mass:1500, thrust:175000, isp_vac:390, isp_atm:388},
			{name:"LV-T45 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:950, mass:1500, thrust:200000, isp_vac:370, isp_atm:320},
			{name:"LV-T30 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:850, mass:1250, thrust:215000, isp_vac:370, isp_atm:320},
			{name:"LV-909 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:750, mass:500, thrust:50000, isp_vac:390, isp_atm:300},
			{name:"Rockomax 48-7S", type:TYPES.LFO_ENGINE, cost:300, mass:100, thrust:30000, isp_vac:350, isp_atm:300},
			{name:"LV-1 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:350, mass:30, thrust:1500, isp_vac:290, isp_atm:220},
			{name:"Rockomax Mark 55 Radial Mount Liquid Engine", type:TYPES.LFO_ENGINE, cost:850, mass:900, thrust:120000, isp_vac:320, isp_atm:290, radial:true},
			{name:"Rockomax 24-77", type:TYPES.LFO_ENGINE, cost:480, mass:90, thrust:20000, isp_vac:300, isp_atm:250, radial:true},
			{name:"LV-1R Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:650, mass:30, thrust:1500, isp_vac:290, isp_atm:220, radial:true},
			
			//LF/O Tanks
			{name:"Rockomax Jumbo-64 Fuel Tank", type:TYPES.LFO_TANK, cost:10500, mass:4000, mass_fuel:32000},
			{name:"Rockomax X200-32 Fuel Tank", type:TYPES.LFO_TANK, cost:2600, mass:2000, mass_fuel:16000},
			{name:"Rockomax X200-16 Fuel Tank", type:TYPES.LFO_TANK, cost:1800, mass:1000, mass_fuel:8000},
			{name:"Rockomax X200-8 Fuel Tank", type:TYPES.LFO_TANK, cost:900, mass:500, mass_fuel:4000},
			{name:"FL-T800 Fuel Tank", type:TYPES.LFO_TANK, cost:1600, mass:500, mass_fuel:4000},
			{name:"FL-T400 Fuel Tank", type:TYPES.LFO_TANK, cost:850, mass:250, mass_fuel:2000},
			{name:"FL-T200 Fuel Tank", type:TYPES.LFO_TANK, cost:225, mass:125, mass_fuel:1000},
			{name:"FL-T100 Fuel Tank", type:TYPES.LFO_TANK, cost:110, mass:62.5, mass_fuel:500},
			{name:"ROUND-8 Toroidal Fuel Tank", type:TYPES.LFO_TANK, cost:220, mass:25, mass_fuel:111},
			{name:"Oscar-B Fuel Tank", type:TYPES.LFO_TANK, cost:280, mass:15, mass_fuel:63.675},
			
			//Solid Rocket Boosters
			{name:"Rockomax BACC Solid Fuel Booster", type:TYPES.BOOSTER, cost:800, mass:1500, mass_fuel:6375, thrust:315000, isp_vac:250, isp_atm:230},
			{name:"RT-10 Solid Fuel Booster", type:TYPES.BOOSTER, cost:450, mass:500, mass_fuel:3247.5, thrust:250000, isp_vac:240, isp_atm:225},
			{name:"Sepratron I", type:TYPES.BOOSTER, cost:100, mass:12.5, mass_fuel:60, thrust:18000, isp_vac:100, isp_atm:100, radial:true},
			
			//Decouplers
			{name:"TR-2V Stack Decoupler", type:TYPES.DECOUPLER, cost:400, mass:15},
			{name:"TR-2C Stack Separator", type:TYPES.DECOUPLER, cost:450, mass:20},
			{name:"TR-18A Stack Decoupler", type:TYPES.DECOUPLER, cost:600, mass:50},
			{name:"TR-18D Stack Separator", type:TYPES.DECOUPLER, cost:600, mass:75},
			{name:"Rockomax Brand Decoupler", type:TYPES.DECOUPLER, cost:440, mass:400},
			{name:"TR-XL Stack Separator", type:TYPES.DECOUPLER, cost:900, mass:450},
			{name:"TT-38K Radial Decoupler", type:TYPES.DECOUPLER, cost:600, mass:25, radial:true},
			{name:"TT-70 Radial Decoupler", type:TYPES.DECOUPLER, cost:700, mass:50, radial:true},
			{name:"Structural Pylon", type:TYPES.DECOUPLER, cost:1275, mass:200, radial:true},
			{name:"Hydraulic Detachment Manifold", type:TYPES.DECOUPLER, cost:770, mass:400, radial:true},
		]
	}
];

var FUEL_DUCT = {name:"FTX-2 External Fuel Duct", type:TYPES.DUCT, cost:650, mass:50, radial:true};

var EARTH_GRAVITY = 9.81;  //m/s^2

function pluckNumber(key, obj) {
	return +obj[key] || 0;
}

function sum(a, b) {
	return a + b;
}

var KSP = {
	Parts : {
		countUnique : function (parts) {
			var map = {};
			for (var x = 0, xl = parts.length; x < xl; ++x) {
				if (map[parts[x].name]) map[parts[x].name]++;
				else map[parts[x].name] = 1;
			}
			return map;
		},
		
		humanize : function (parts) {
			var strBuild = [];
			var uniqueParts = KSP.Parts.countUnique(parts);
			for (var name in uniqueParts) {
				strBuild.push(name + " x" + uniqueParts[name]);
			}
			return strBuild.join(", ");
		}
	},
	
	Engine : {
		//Engine fuel consumption at specified atmospheric pressure (kg/s)
		consumption : function (atm, engine) {
			atm = Math.min(Math.max(atm, 0), 1);  //Atmospheric pressure's affect on engines maxes out at 1 (TODO: Confirm this)
			return engine.thrust / ((engine.isp_vac * EARTH_GRAVITY) - ((engine.isp_vac - engine.isp_atm) * EARTH_GRAVITY * (atm || 0)));
		},
		
		//Engine fuel consumption in vacuum (kg/s)
		consumptionVac : function (engine) {
			return engine.thrust / (engine.isp_vac * EARTH_GRAVITY);
		},
		
		//Engine fuel consumption in atmosphere (kg/s)
		consumptionAtm : function (engine) {
			return engine.thrust / (engine.isp_atm * EARTH_GRAVITY);
		}
	},
	
	Stage : {
		//Total cost of all stages
		cost : function (stage) {
			return (stage.other ? stage.other.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) + 
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.next ? KSP.Stage.cost(stage.next) : 0);
		},
		
		//Thrust of all active engines during this stage (N)
		thrust : function (stage) {
			return (stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "thrust")).reduce(sum, 0) : 0) + 
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "thrust")).reduce(sum, 0) : 0) +
				(stage.parallel ? KSP.Stage.thrust(stage.next) : 0);
		},
		
		//Total mass at start of this stage (kg)
		massStart : function (stage) {
			return (stage.payload || 0) + 
				(stage.other ? stage.other.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) + stage.lfoTanks.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0) : 0) + 
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) + stage.boosters.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.next ? KSP.Stage.massStart(stage.next) : 0);
		},
		
		//Total mass at end of this stage (kg)
		massEnd : function (stage) {
			if (stage.parallel && !stage.asparagus) throw new Error("Parallel staging (without asparagus) is not yet supported.");
			return (stage.payload || 0) + 
				(stage.other ? stage.other.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) + 
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.next ? KSP.Stage.massStart(stage.next) : 0);
		},
		
		//Thrust-to-Weight Ratio
		twr : function (stage, planet) {
			return KSP.Stage.thrust(stage) / (KSP.Stage.massStart(stage) * planet.gravity);
		},
		
		//Total stage fuel consumption at specified atmospheric pressure (kg/s)
		consumption : function (stage, atm) {
			return (stage.lfoEngines ? stage.lfoEngines.map(KSP.Engine.consumption.bind(this, atm)).reduce(sum, 0) : 0) + 
				(stage.boosters ? stage.boosters.map(KSP.Engine.consumption.bind(this, atm)).reduce(sum, 0) : 0) +
				(stage.parallel ? KSP.Stage.consumption(stage.next, atm) : 0);
		},
		
		//Combined specific impulse at atmospheric pressure (m/s)
		impulse : function (stage, atm) {
			return KSP.Stage.thrust(stage) / 
				KSP.Stage.consumption(stage, atm);
		},
		
		//Delta-V at atmospheric pressure (m/s^2)
		deltaV : function (stage, atm) {
			return Math.log(KSP.Stage.massStart(stage) / KSP.Stage.massEnd(stage)) * KSP.Stage.impulse(stage, atm);
		},
		
		humanize : function (stage, planet, atm) {
			var strBuild = [];
			if (stage.payload) strBuild.push("Payload: " + stage.payload + "kg");
			if (stage.lfoEngines && stage.lfoEngines.length) strBuild.push("Engines: " + KSP.Parts.humanize(stage.lfoEngines));
			if (stage.lfoTanks && stage.lfoTanks.length) strBuild.push("LF/O Tanks: " + KSP.Parts.humanize(stage.lfoTanks));
			if (stage.boosters && stage.boosters.length) strBuild.push("Boosters: " + KSP.Parts.humanize(stage.boosters));
			if (stage.decouplers && stage.decouplers.length) strBuild.push("Decouplers: " + KSP.Parts.humanize(stage.decouplers));
			if (stage.other && stage.other.length) strBuild.push("Other: " + KSP.Parts.humanize(stage.other));
			if ((stage.lfoEngines && stage.lfoEngines.length) || (stage.boosters && stage.boosters.length)) {
				if (typeof atm === "number") strBuild.push("Delta-V: " + Math.round(KSP.Stage.deltaV(stage, atm)));
				if (planet) strBuild.push("TWR: " + KSP.Stage.twr(stage, planet).toFixed(2));
			}
			if (stage.parallel) {
				if (stage.asparagus) strBuild.push("ASPARAGUS");
				else strBuild.push("PARALLEL");
			}
			return (stage.next ? KSP.Stage.humanize(stage.next, planet, atm) + "\n" : "") + strBuild.join("; ");
		}
	}
};

function sortParts(parts, optimization) {
	optimization = optimization || "mass";
	var ascending = function (part) {
		return part[optimization];
	};
	var descending = function (part) {
		return -part[optimization];
	};
	
	var types = _.groupBy(parts, "type");
	return {
		lfoEngines : _.sortBy(types[TYPES.LFO_ENGINE], descending),
		lfoTanks : _.sortBy(types[TYPES.LFO_TANK], descending),
		boosters : _.sortBy(types[TYPES.BOOSTER], descending),
		stackDecouplers : _.sortBy(_.where(types[TYPES.DECOUPLER], {radial:undefined}), ascending),
		radialDecouplers : _.sortBy(_.where(types[TYPES.DECOUPLER], {radial:true}), ascending)
	}
}

function fixArgs(args) {
	args.optimization = args.optimization || "mass";
	args.next = args.next || {payload:0};
	args.deltaV = args.deltaV || 0;
	args.planet = args.planet || PLANETS[0];
	args.twr = args.twr || 0;
	args.atm = args.atm || 0;
	args.asparagus = !!(args.next.lfoEngines || 0).length && !!args.asparagus;
	args.parallel = /*!!args.parallel || */args.asparagus;  //FIXME: Parallel disabled until supported without asparagus
	args.stages = args.stages || 1;
	args.stagesAsparagus = !!args.stagesAsparagus;
	args.stagesParallel = !!args.stagesParallel || args.stagesAsparagus;
	args.parts = args.parts || {
		lfoEngines : [],
		lfoTanks : [],
		boosters : [],
		stackDecouplers : [],
		radialDecouplers : []
	};
}

function getMetric(stage, args) {
	var metric;
	if (args.optimization === "cost") {
		metric = KSP.Stage.cost(stage);
	} else {
		metric = KSP.Stage.massStart(stage);
	}
	return metric;
}

function findOptimalStage(args) {
	fixArgs(args);
	
	var bestStage = null;
	var bestStageMetric = Infinity;
	
	//parallel stages must have two engines, or the same # of engines (if greater) as the next stage (simplifies design)
	var engineMultiplier = (args.parallel && args.next.lfoEngines ? Math.max(args.next.lfoEngines.length, 2) : 1);
	
	var stage = {
		next : args.next,
		payload : 0,
		other : [],
		lfoEngines : [],
		lfoTanks : [],
		boosters : [],
		decouplers : [],
		parallel : args.parallel,
		asparagus : args.asparagus
	};
	
	nextEngine: for (var e = 0, el = args.parts.lfoEngines.length; e < el; ++e) {
		var engine = args.parts.lfoEngines[e];
		stage.lfoEngines = [];
		stage.decouplers = [];
		var maxEngineCount = (engine.thrust ? (engine.radial ? 16 : 8) : 1);
		nextEngineCount: for (var ec = engineMultiplier; ec <= maxEngineCount; ec += engineMultiplier) {
			//add engine x multipler
			for (var x = 0; x < engineMultiplier; ++x) {
				stage.lfoEngines.push(engine);
				if (!engine.radial || ec === engineMultiplier) {
					//add decouplers
					if (ec === 1 && engineMultiplier === 1) {
						if (args.parts.stackDecouplers[0]) stage.decouplers.push(args.parts.stackDecouplers[0]);
					} else {
						if (args.parts.radialDecouplers[0]) {
							if (stage.decouplers.length && !stage.decouplers[0].radial) {
								for (var y = 0, yl = stage.decouplers.length; y < yl; ++y) {
									stage.decouplers[y] = args.parts.radialDecouplers[0];
								}
							}
							stage.decouplers.push(args.parts.radialDecouplers[0]);
						}
					}
					
					//add fuel ducts for asparagus staging
					if (args.asparagus) stage.other.push(FUEL_DUCT);
				}
			}
			
			stage.lfoTanks = [];
			nextTank: for (var t = 0, tl = args.parts.lfoTanks.length; t < tl; ++t) {
				var tank = args.parts.lfoTanks[t];
				var diff = (t === 0 ? 8 : Math.ceil(args.parts.lfoTanks[t-1].mass_fuel / tank.mass_fuel));
				nextTankCount: for (var tc = 1; tc < diff; ++tc) {
					//fuel tanks must balance with number of engines, unless engines are radial
					if (engine.radial) {
						for (var x = 0; x < engineMultiplier; ++x) {
							stage.lfoTanks.push(tank);
						}
					} else {
						for (var x = 0; x < ec; ++x) {
							stage.lfoTanks.push(tank);
						}
					}
					
					if (args.twr && KSP.Stage.twr(stage, args.planet) < args.twr) {
						continue nextTankCount;
					} else if (KSP.Stage.deltaV(stage, args.atm) >= args.deltaV) {
						var metric = getMetric(stage, args);
						
						if (metric < bestStageMetric) {
							bestStage = {
								next : stage.next,
								payload : stage.payload,
								other : stage.other.slice(),
								lfoEngines : stage.lfoEngines.slice(),
								lfoTanks : stage.lfoTanks.slice(),
								boosters : stage.boosters.slice(),
								decouplers : stage.decouplers.slice(),
								parallel : stage.parallel,
								asparagus : stage.asparagus
							};
							bestStageMetric = metric;
						}
						
						if (engine.radial) {
							for (var x = 0; x < engineMultiplier; ++x) {
								stage.lfoTanks.pop();
							}
						} else {
							for (var x = 0; x < ec; ++x) {
								stage.lfoTanks.pop();
							}
						}
						
						continue nextTank;
					}
				}
			}
		}
	}
	
	stage = {
		next : args.next,
		payload : 0,
		other : [],
		lfoEngines : [],
		lfoTanks : [],
		boosters : [],
		decouplers : [],
		parallel : false,  //not yet supported
		asparagus : false  //boosters can't share fuel
	};
	nextBooster: for (var b = 0, bl = args.parts.boosters.length; b < bl; ++b) {
		var booster = args.parts.boosters[b];
		stage.boosters = [];
		stage.decouplers = [];
		nextBoosterCount: for (var bc = engineMultiplier; bc <= 16; bc += engineMultiplier) {
			//add engine x multipler
			for (var x = 0; x < engineMultiplier; ++x) {
				stage.boosters.push(booster);
				
				//add decouplers
				if (bc === 1 && engineMultiplier === 1) {
					if (args.parts.stackDecouplers[0]) stage.decouplers.push(args.parts.stackDecouplers[0]);
				} else {
					if (args.parts.radialDecouplers[0]) {
						if (stage.decouplers.length && !stage.decouplers[0].radial) {
							for (var y = 0, yl = stage.decouplers.length; y < yl; ++y) {
								stage.decouplers[y] = args.parts.radialDecouplers[0];
							}
						}
						stage.decouplers.push(args.parts.radialDecouplers[0]);
					}
				}
			}
			
			if (args.twr && KSP.Stage.twr(stage, args.planet) < args.twr) {
				continue nextBoosterCount;
			} else if (KSP.Stage.deltaV(stage, args.atm) >= args.deltaV) {
				var metric = getMetric(stage, args);
				
				if (metric < bestStageMetric) {
					bestStage = {
						next : stage.next,
						payload : stage.payload,
						other : stage.other.slice(),
						lfoEngines : stage.lfoEngines.slice(),
						lfoTanks : stage.lfoTanks.slice(),
						boosters : stage.boosters.slice(),
						decouplers : stage.decouplers.slice(),
						parallel : stage.parallel,
						asparagus : stage.asparagus
					};
					bestStageMetric = metric;
				}
				
				continue nextBooster;
			}
		}
	}
	
	return bestStage;
}

function findRandomOptimalStaging(args) {
	fixArgs(args);
	var randomSolution = null;
	
	if (args.stages === 1) {
		randomSolution = findOptimalStage(args);
	} else {
		var firstArgs = Object.create(args);
		firstArgs.deltaV = Math.round(args.deltaV * Math.random());
		var firstStage = findOptimalStage(firstArgs);
		
		if (firstStage) {
			var secondArgs = Object.create(args);
			secondArgs.next = firstStage;
			secondArgs.deltaV = args.deltaV - firstArgs.deltaV;
			secondArgs.parallel = !!args.stagesParallel;
			secondArgs.asparagus = !!args.stagesAsparagus;
			secondArgs.stages = args.stages - 1;
			var secondStage = findOptimalStage(secondArgs);
			var secondStageMetric = NaN;
			var nextStage = null;
			var nextStageMetric = NaN;
			
			if (secondArgs.stages > 1) {
				if (secondStage) {
					secondStageMetric = getMetric(secondStage, secondArgs);
				}
				nextStage = findRandomOptimalStaging(secondArgs);
				if (nextStage) {
					nextStageMetric = getMetric(nextStage, secondArgs);
				}
			}
			
			if (secondStage && (!nextStage || secondStageMetric < nextStageMetric)) {
				randomSolution = secondStage;
			} else if (nextStage) {
				randomSolution = nextStage;
			}
		}
	}
	
	return randomSolution;
}

function searchForOptimalStaging(args, callback) {
	var intervalId = setInterval(function () {
		var staging = findRandomOptimalStaging(args);
		if (staging) staging.id = args.id;
		if (args.stages < 2) {
			clearInterval(intervalId);
		}
		callback(staging);
	}, 100);
	
	return function cancel() {
		clearInterval(intervalId);
	}
}


//WebWorker Job Runner
if (typeof document === "undefined") {
	var global = this;
	var cancelGlobalSearcher = function () {};
	
	addEventListener('message', function onmessage(evt) {
		cancelGlobalSearcher();
		var args = evt.data;
		if (!args.cancel) {
			cancelGlobalSearcher = searchForOptimalStaging(args, postMessage);
		}
	});
}