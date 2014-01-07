/*!

Copyright (c) 2013, Gary Court
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

var PLANETS = [
    {name:"None", gravity:0},
	{name:"Moho", gravity:2.70},
	{name:"Eve", gravity:16.7},
	{name:"Gilly", gravity:0.049},
	{name:"Kerbin", gravity:9.81},
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
			{name:"Rockomax 'Mainsail' Liquid Engine", type:TYPES.LFO_ENGINE, cost:2850, mass:6.000, thrust:1500, isp_vac:330, isp_atm:280},
			{name:"Rockomax 'Skipper' Liquid Engine", type:TYPES.LFO_ENGINE, cost:2850, mass:4.000, thrust:650, isp_vac:350, isp_atm:300},
			{name:"Rockomax 'Poodle' Liquid Engine", type:TYPES.LFO_ENGINE, cost:1600, mass:2.500, thrust:220, isp_vac:390, isp_atm:270},
			{name:"LV-N Atomic Rocket Motor", type:TYPES.LFO_ENGINE, cost:8700, mass:2.250, thrust:60, isp_vac:800, isp_atm:220},
			{name:"R.A.P.I.E.R. Engine", type:TYPES.LFO_ENGINE, cost:5900, mass:1.750, thrust:175, isp_vac:360, isp_atm:320},
			{name:"Toroidal Aerospike Rocket", type:TYPES.LFO_ENGINE, cost:3850, mass:1.500, thrust:175, isp_vac:390, isp_atm:388},
			{name:"LV-T45 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:950, mass:1.500, thrust:200, isp_vac:370, isp_atm:320},
			{name:"LV-T30 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:850, mass:1.250, thrust:215, isp_vac:370, isp_atm:320},
			{name:"LV-909 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:750, mass:0.500, thrust:50, isp_vac:390, isp_atm:300},
			{name:"Rockomax 48-7S", type:TYPES.LFO_ENGINE, cost:300, mass:0.100, thrust:30, isp_vac:350, isp_atm:300},
			{name:"LV-1 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:350, mass:0.030, thrust:1.5, isp_vac:290, isp_atm:220},
			{name:"Rockomax Mark 55 Radial Mount Liquid Engine", type:TYPES.LFO_ENGINE, cost:850, mass:0.900, thrust:120, isp_vac:320, isp_atm:290, radial:true},
			{name:"Rockomax 24-77", type:TYPES.LFO_ENGINE, cost:480, mass:0.090, thrust:20, isp_vac:300, isp_atm:250, radial:true},
			{name:"LV-1R Liquid Fuel Engine", type:TYPES.LFO_ENGINE, cost:650, mass:0.030, thrust:1.5, isp_vac:290, isp_atm:220, radial:true},
			
			//LF/O Tanks
			{name:"Rockomax Jumbo-64 Fuel Tank", type:TYPES.LFO_TANK, cost:10500, mass:4.000, mass_fuel:32.000},
			{name:"Rockomax X200-32 Fuel Tank", type:TYPES.LFO_TANK, cost:2600, mass:2.000, mass_fuel:16.000},
			{name:"Rockomax X200-16 Fuel Tank", type:TYPES.LFO_TANK, cost:1800, mass:1.000, mass_fuel:8.000},
			{name:"Rockomax X200-8 Fuel Tank", type:TYPES.LFO_TANK, cost:900, mass:0.500, mass_fuel:4.000},
			{name:"FL-T800 Fuel Tank", type:TYPES.LFO_TANK, cost:1600, mass:0.500, mass_fuel:4.000},
			{name:"FL-T400 Fuel Tank", type:TYPES.LFO_TANK, cost:850, mass:0.250, mass_fuel:2.000},
			{name:"FL-T200 Fuel Tank", type:TYPES.LFO_TANK, cost:225, mass:0.125, mass_fuel:1.000},
			{name:"FL-T100 Fuel Tank", type:TYPES.LFO_TANK, cost:110, mass:0.0625, mass_fuel:0.500},
			{name:"ROUND-8 Toroidal Fuel Tank", type:TYPES.LFO_TANK, cost:220, mass:0.025, mass_fuel:0.111},
			{name:"Oscar-B Fuel Tank", type:TYPES.LFO_TANK, cost:280, mass:0.015, mass_fuel:0.063675},
			
			//Solid Rocket Boosters
			{name:"Rockomax BACC Solid Fuel Booster", type:TYPES.BOOSTER, cost:800, mass:1.500, mass_fuel:6.375, thrust:315, isp_vac:250, isp_atm:230},
			{name:"RT-10 Solid Fuel Booster", type:TYPES.BOOSTER, cost:450, mass:0.500, mass_fuel:3.2475, thrust:250, isp_vac:240, isp_atm:225},
			{name:"Sepratron I", type:TYPES.BOOSTER, cost:100, mass:0.0125, mass_fuel:0.060, thrust:18, isp_vac:100, isp_atm:100, radial:true},
			
			//Decouplers
			{name:"TR-2V Stack Decoupler", type:TYPES.DECOUPLER, cost:400, mass:0.015},
			{name:"TR-2C Stack Separator", type:TYPES.DECOUPLER, cost:450, mass:0.020},
			{name:"TR-18A Stack Decoupler", type:TYPES.DECOUPLER, cost:600, mass:0.050},
			{name:"TR-18D Stack Separator", type:TYPES.DECOUPLER, cost:600, mass:0.075},
			{name:"Rockomax Brand Decoupler", type:TYPES.DECOUPLER, cost:440, mass:0.400},
			{name:"TR-XL Stack Separator", type:TYPES.DECOUPLER, cost:900, mass:0.450},
			{name:"TT-38K Radial Decoupler", type:TYPES.DECOUPLER, cost:600, mass:0.025, radial:true},
			{name:"TT-70 Radial Decoupler", type:TYPES.DECOUPLER, cost:700, mass:0.050, radial:true},
			{name:"Structural Pylon", type:TYPES.DECOUPLER, cost:1275, mass:0.200, radial:true},
			{name:"Hydraulic Detachment Manifold", type:TYPES.DECOUPLER, cost:770, mass:0.400, radial:true},
		]
	}
];

var NO_ENGINE = {name:"", type:TYPES.LFO_ENGINE, cost:0, mass:0, thrust:0, isp_vac:0, isp_atm:0};
var FUEL_DUCT = {name:"FTX-2 External Fuel Duct", type:TYPES.DUCT, cost:650, mass:0.050, radial:true};

var CONVERSION_FACTOR = 9.82;  //m/s^2

var OPTIMIZATION_NAMES = {
	"mass" : "Mass",
	"cost" : "Cost"
};

function pluckNumber(key, obj) {
	return +obj[key] || 0;
}

function sum(a, b) {
	return a + b;
}

var KSP = {
	Parts : {
		countUnique : function (parts) {
			var unique = [];
			var hash = {};
			if (parts) {
				for (var x = 0, xl = parts.length; x < xl; ++x) {
					var part = parts[x];
					if (!hash[part.name]) {
						var copy = Object.create(part);
						copy.count = 1;
						unique.push(copy);
						hash[part.name] = unique.length;  //we use index+1 so as not to get !!0
					} else {
						unique[hash[part.name]-1].count++;
					}
				}
			}
			return unique;
		},
		
		humanize : function (parts) {
			var strBuild = [];
			var uniqueParts = KSP.Parts.countUnique(parts);
			for (var x = 0, xl = uniqueParts.length; x < xl; ++x) {
				var part = uniqueParts[x];
				strBuild.push(part.name + " x" + part.count);
			}
			return strBuild.join(", ");
		}
	},
	
	Engine : {
		//Engine fuel consumption at specified atmospheric pressure (kg/s)
		consumption : function (atm, engine) {
			atm = Math.min(Math.max(atm, 0), 1);  //Atmospheric pressure's affect on engines maxes out at 1 (TODO: Confirm this)
			return ((engine.thrust * 1000) / ((engine.isp_vac * CONVERSION_FACTOR) - ((engine.isp_vac - engine.isp_atm) * CONVERSION_FACTOR * (atm || 0)))) || 0;
		},
		
		//Engine fuel consumption in vacuum (kg/s)
		consumptionVac : function (engine) {
			return ((engine.thrust * 1000) / (engine.isp_vac * CONVERSION_FACTOR)) || 0;
		},
		
		//Engine fuel consumption in atmosphere (kg/s)
		consumptionAtm : function (engine) {
			return ((engine.thrust * 1000) / (engine.isp_atm * CONVERSION_FACTOR)) || 0;
		}
	},
	
	Stage : {
		//Cost of this stage only
		cost : function (stage) {
			return (stage.others ? stage.others.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) + 
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0);
		},
		
		//Thrust of active engines during this stage only (kN)
		thrust : function (stage) {
			return (stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "thrust")).reduce(sum, 0) : 0) + 
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "thrust")).reduce(sum, 0) : 0);
		},
		
		//Mass of this stage only (t)
		massStart : function (stage) {
			return (stage.payload || 0) + 
				(stage.others ? stage.others.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) + stage.lfoTanks.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0) : 0) + 
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) + stage.boosters.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0);
		},
		
		//Mass of this stage only at end of burn (t)
		massEndStage : function (stage) {
			return (stage.payload || 0) + 
				(stage.others ? stage.others.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) + 
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0);
		},
		
		//Total stage fuel consumption at specified atmospheric pressure (kg/s)
		consumption : function (stage, atm) {
			return (stage.lfoEngines ? stage.lfoEngines.map(KSP.Engine.consumption.bind(this, atm)).reduce(sum, 0) : 0) + 
				(stage.boosters ? stage.boosters.map(KSP.Engine.consumption.bind(this, atm)).reduce(sum, 0) : 0);
		},
		
		//Combined specific impulse at atmospheric pressure (m/s)
		impulse : function (stage, atm) {
			return ((KSP.Stage.thrust(stage) * 1000) / KSP.Stage.consumption(stage, atm)) || 0;
		}
	},
	
	Stages : {
		//Total cost of all stages
		cost : function (stage) {
			return KSP.Stage.cost(stage) +
				(stage.next ? KSP.Stages.cost(stage.next) : 0);
		},
		
		//Thrust of all active engines during this stage (kN)
		thrust : function (stage) {
			return KSP.Stage.thrust(stage) +
				(stage.parallel ? KSP.Stages.thrust(stage.next) : 0);
		},
		
		//Total mass of all stages (t)
		massStart : function (stage) {
			return KSP.Stage.massStart(stage) +
				(stage.next ? KSP.Stages.massStart(stage.next) : 0);
		},
		
		//Total mass of all stages at end of burn of this stage (t)
		massEndStage : function (stage) {
			if (stage.parallel && !stage.asparagus) throw new Error("Parallel staging (without asparagus) is not yet supported.");
			return KSP.Stage.massEndStage(stage) +
				(stage.next ? KSP.Stages.massStart(stage.next) : 0);
		},
		
		//Total mass of all stages at end of burn of all stages (t)
		massEndTotal : function (stage) {
			if (stage.parallel && !stage.asparagus) throw new Error("Parallel staging (without asparagus) is not yet supported.");
			return KSP.Stage.massEndStage(stage) +
				(stage.next ? KSP.Stages.massEndTotal(stage.next) : 0);
		},
		
		//Thrust-to-Weight Ratio
		twr : function (stage, planet) {
			return (KSP.Stages.thrust(stage) / (KSP.Stages.massStart(stage) * planet.gravity)) || 0;
		},
		
		//Total stage fuel consumption at specified atmospheric pressure (kg/s)
		consumption : function (stage, atm) {
			return KSP.Stage.consumption(stage, atm) +
				(stage.parallel ? KSP.Stages.consumption(stage.next, atm) : 0);
		},
		
		//Combined specific impulse at atmospheric pressure (m/s)
		impulse : function (stage, atm) {
			return ((KSP.Stages.thrust(stage) * 1000) / KSP.Stages.consumption(stage, atm)) || 0;
		},
		
		//Delta-V at atmospheric pressure of this stage only (m/s^2)
		deltaVStage : function (stage, atm) {
			return (Math.log((KSP.Stages.massStart(stage) * 1000) / (KSP.Stages.massEndStage(stage) * 1000)) * KSP.Stages.impulse(stage, atm)) || 0;
		},
		
		//Delta-V at atmospheric pressure of all stages (m/s^2)
		deltaVTotal : function (stage, atm) {
			return KSP.Stages.deltaVStage(stage, atm) +
				(stage.next ? KSP.Stages.deltaVTotal(stage.next, atm) : 0);
		},
		
		humanize : function (stage, planet, atm) {
			var strBuild = [];
			if (stage.payload) strBuild.push("Payload: " + stage.payload + "kg");
			if (stage.lfoEngines && stage.lfoEngines.length) strBuild.push("Engines: " + KSP.Parts.humanize(stage.lfoEngines));
			if (stage.lfoTanks && stage.lfoTanks.length) strBuild.push("LF/O Tanks: " + KSP.Parts.humanize(stage.lfoTanks));
			if (stage.boosters && stage.boosters.length) strBuild.push("Boosters: " + KSP.Parts.humanize(stage.boosters));
			if (stage.decouplers && stage.decouplers.length) strBuild.push("Decouplers: " + KSP.Parts.humanize(stage.decouplers));
			if (stage.others && stage.others.length) strBuild.push("Other: " + KSP.Parts.humanize(stage.others));
			if ((stage.lfoEngines && stage.lfoEngines.length) || (stage.boosters && stage.boosters.length)) {
				if (typeof atm === "number") strBuild.push("Delta-V: " + Math.round(KSP.Stages.deltaVStage(stage, atm)));
				if (planet) strBuild.push("TWR: " + KSP.Stages.twr(stage, planet).toFixed(2));
			}
			if (stage.parallel) {
				if (stage.asparagus) strBuild.push("ASPARAGUS");
				else strBuild.push("PARALLEL");
			}
			return (stage.next ? KSP.Stages.humanize(stage.next, planet, atm) + "\n" : "") + strBuild.join("; ");
		}
	}
};

function fixArgs(args) {
	args.optimization = args.optimization || "mass";
	args.next = args.next || {payload:0};
	args.deltaV = args.deltaV || 0;
	args.planet = args.planet || PLANETS[0];
	args.twr = args.twr || 0;
	args.atm = args.atm || 0;
	args.asparagus = !!(args.next.lfoTanks || 0).length && !!args.asparagus;
	args.parallel = /*!!args.parallel || */args.asparagus;  //FIXME: Parallel disabled until supported without asparagus
	args.decoupling = (args.decoupling !== false);
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
		metric = KSP.Stages.cost(stage);
	} else {
		metric = KSP.Stages.massStart(stage);
	}
	return metric;
}

function findOptimalStage(args) {
	fixArgs(args);
	
	var bestStage = null;
	
	//parallel stages must have two engines, or the same # of engines (if greater) as the next stage (simplifies design)
	var engineMultiplier = (args.parallel && args.next.lfoEngines ? Math.max(args.next.lfoEngines.length, 2) : 1);
	
	var stage = {
		next : args.next,
		payload : 0,
		others : [],
		lfoEngines : [],
		lfoTanks : [],
		boosters : [],
		decouplers : [],
		parallel : args.parallel,
		asparagus : args.asparagus,
		optimization : args.optimization,
		metric : Infinity
	};
	
	nextEngine: for (var e = 0, el = args.parts.lfoEngines.length; e <= el; ++e) {
		var engine = args.parts.lfoEngines[e] || NO_ENGINE;
		stage.lfoEngines = [];
		stage.decouplers = [];
		stage.others = [];
		if (engineMultiplier === 1 && engine.radial) stage.lfoEngines.push(engine);  //prevents a single radial engine
		var maxEngineCount = (engine.thrust ? (engine.radial ? 16 : 8) : engineMultiplier) - stage.lfoEngines.length;
		nextEngineCount: for (var ec = engineMultiplier; ec <= maxEngineCount; ec += engineMultiplier) {
			//add engine x multipler
			for (var x = 0; x < engineMultiplier; ++x) {
				stage.lfoEngines.push(engine);
				
				//add decouplers
				if (args.decoupling && (!engine.radial || ec === engineMultiplier)) {
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
					if (stage.asparagus) stage.others.push(FUEL_DUCT);
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
					
					if (args.twr && KSP.Stages.twr(stage, args.planet) < args.twr) {
						if (KSP.Stages.deltaVStage(stage, args.atm) >= args.deltaV) {
							//last tank was too big
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
						} else {
							//engine is too small
							continue nextEngineCount;
						}
					} else if (KSP.Stages.deltaVStage(stage, args.atm) >= args.deltaV) {
						stage.metric = getMetric(stage, args);
						
						if (!bestStage || stage.metric < bestStage.metric) {
							bestStage = {
								next : stage.next,
								payload : stage.payload,
								others : stage.others.slice(),
								lfoEngines : stage.lfoEngines.slice(),
								lfoTanks : stage.lfoTanks.slice(),
								boosters : stage.boosters.slice(),
								decouplers : stage.decouplers.slice(),
								parallel : stage.parallel,
								asparagus : stage.asparagus,
								optimization : stage.optimization,
								metric : stage.metric
							};
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
		others : [],
		lfoEngines : [],
		lfoTanks : [],
		boosters : [],
		decouplers : [],
		parallel : false,  //not yet supported
		asparagus : false,  //boosters can't share fuel
		optimization : args.optimization,
		metric : Infinity
	};
	nextBooster: for (var b = 0, bl = args.parts.boosters.length; b < bl; ++b) {
		var booster = args.parts.boosters[b];
		stage.boosters = [];
		stage.decouplers = [];
		if (engineMultiplier === 1 && booster.radial) stage.boosters.push(booster);  //prevents a single radial booster
		var maxBoosterCount = (booster.thrust ? (booster.radial ? 16 : 8) : 1) - stage.boosters.length;
		nextBoosterCount: for (var bc = engineMultiplier; bc <= maxBoosterCount; bc += engineMultiplier) {
			//add engine x multipler
			for (var x = 0; x < engineMultiplier; ++x) {
				stage.boosters.push(booster);
				
				//add decouplers
				if (args.decoupling && (!booster.radial || bc === engineMultiplier)) {
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
			}
			
			if (args.twr && KSP.Stages.twr(stage, args.planet) < args.twr) {
				continue nextBoosterCount;
			} else if (KSP.Stages.deltaVStage(stage, args.atm) >= args.deltaV) {
				stage.metric = getMetric(stage, args);
				
				if (!bestStage || stage.metric < bestStage.metric) {
					bestStage = {
						next : stage.next,
						payload : stage.payload,
						others : stage.others.slice(),
						lfoEngines : stage.lfoEngines.slice(),
						lfoTanks : stage.lfoTanks.slice(),
						boosters : stage.boosters.slice(),
						decouplers : stage.decouplers.slice(),
						parallel : stage.parallel,
						asparagus : stage.asparagus,
						optimization : stage.optimization,
						metric : stage.metric
					};
				}
				
				continue nextBooster;
			}
		}
	}
	
	if (bestStage && bestStage.lfoEngines[0] === NO_ENGINE) {
		bestStage.lfoEngines = [];
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
			secondArgs.decoupling = true;
			secondArgs.stages = args.stages - 1;
			var secondStage = findOptimalStage(secondArgs);
			
			var nextStage = null;
			if (secondArgs.stages > 1) {
				nextStage = findRandomOptimalStaging(secondArgs);
			}
			
			if (secondStage && (!nextStage || secondStage.metric < nextStage.metric)) {
				randomSolution = secondStage;
			} else if (nextStage) {
				randomSolution = nextStage;
			}
		}
	}
	
	return randomSolution;
}

function searchForOptimalStaging(args, callback) {
	var timerId;
	var cancelled = false;
	var routine = function routine() {
		if (!cancelled) {
			var staging = findRandomOptimalStaging(args);
			if (staging) staging.id = args.id;
			if (args.stages > 1) {
				timerId = setTimeout(routine, (args.interval || 10));
			}
			callback(staging);
		}
	}
	timerId = setTimeout(routine, (args.interval || 10));
	
	return function cancel() {
		cancelled = true;
		clearTimeout(timerId);
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