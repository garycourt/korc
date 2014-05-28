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
	DUCT:5,
	BRANCH:6
};

var TYPE_NAMES_PLURAL = {
	1:"LF/O Engines",
	2:"LF/O Tanks",
	3:"Boosters",
	4:"Decouplers",
	5:"Fuel Ducts",
	6:"Branches"
}

var PACKS = [
	{
		name:"Stock 0.23.5", 
		parts:[
			//LF/O Engines
			{name:"S3 KS-25x4 Engine Cluster", type:TYPES.LFO_ENGINE, size:3, cost:5900, mass:9.750, thrust:3200, isp_vac:360, isp_atm:320},
			{name:"Kerbodyne KR-2L Advanced Engine", type:TYPES.LFO_ENGINE, size:3, cost:2850, mass:6.500, thrust:2500, isp_vac:380, isp_atm:280},
			{name:"Rockomax 'Mainsail' Liquid Engine", type:TYPES.LFO_ENGINE, size:2, cost:2850, mass:6.000, thrust:1500, isp_vac:330, isp_atm:280},
			{name:"Rockomax 'Skipper' Liquid Engine", type:TYPES.LFO_ENGINE, size:2, cost:2850, mass:4.000, thrust:650, isp_vac:350, isp_atm:300},
			{name:"Rockomax 'Poodle' Liquid Engine", type:TYPES.LFO_ENGINE, size:2, cost:1600, mass:2.500, thrust:220, isp_vac:390, isp_atm:270},
			{name:"LV-N Atomic Rocket Motor", type:TYPES.LFO_ENGINE, size:1, cost:8700, mass:2.250, thrust:60, isp_vac:800, isp_atm:220},
			{name:"R.A.P.I.E.R. Engine", type:TYPES.LFO_ENGINE, size:1, cost:5900, mass:1.750, thrust:175, isp_vac:360, isp_atm:320},
			{name:"Toroidal Aerospike Rocket", type:TYPES.LFO_ENGINE, size:1, cost:3850, mass:1.500, thrust:175, isp_vac:390, isp_atm:388, last:true},
			{name:"LV-T45 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, size:1, cost:950, mass:1.500, thrust:200, isp_vac:370, isp_atm:320},
			{name:"LV-T30 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, size:1, cost:850, mass:1.250, thrust:215, isp_vac:370, isp_atm:320},
			{name:"LV-909 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, size:1, cost:750, mass:0.500, thrust:50, isp_vac:390, isp_atm:300},
			{name:"Rockomax 48-7S", type:TYPES.LFO_ENGINE, size:0, cost:300, mass:0.100, thrust:30, isp_vac:350, isp_atm:300},
			{name:"LV-1 Liquid Fuel Engine", type:TYPES.LFO_ENGINE, size:0, cost:350, mass:0.030, thrust:4, isp_vac:290, isp_atm:220},
			{name:"Rockomax Mark 55 Radial Mount Liquid Engine", type:TYPES.LFO_ENGINE, size:"radial", cost:850, mass:0.900, thrust:120, isp_vac:320, isp_atm:290, radial:true},
			{name:"Rockomax 24-77", type:TYPES.LFO_ENGINE, size:"radial", cost:480, mass:0.090, thrust:20, isp_vac:300, isp_atm:250, radial:true},
			{name:"LV-1R Liquid Fuel Engine", type:TYPES.LFO_ENGINE, size:"radial", cost:650, mass:0.030, thrust:4, isp_vac:290, isp_atm:220, radial:true},
			//disabled until code can support liquid boosters:
			//{name:"LFB KR-1x2", type:TYPES.LFO_ENGINE, size:2, cost:5900, mass:10.000, mass_fuel:32.000, thrust:2000, isp_vac:360, isp_atm:320, disabled:true},
			
			//LF/O Tanks
			{name:"Kerbodyne S3-14400 Tank", type:TYPES.LFO_TANK, size:3, cost:2600, mass:10.000, mass_fuel:72.000},
			{name:"Kerbodyne S3-7200 Tank", type:TYPES.LFO_TANK, size:3, cost:2600, mass:5.000, mass_fuel:36.000},
			{name:"Kerbodyne S3-3600 Tank", type:TYPES.LFO_TANK, size:3, cost:2600, mass:2.500, mass_fuel:18.000},
			{name:"Rockomax Jumbo-64 Fuel Tank", type:TYPES.LFO_TANK, size:2, cost:10500, mass:4.000, mass_fuel:32.000},
			{name:"Rockomax X200-32 Fuel Tank", type:TYPES.LFO_TANK, size:2, cost:2600, mass:2.000, mass_fuel:16.000},
			{name:"Rockomax X200-16 Fuel Tank", type:TYPES.LFO_TANK, size:2, cost:1800, mass:1.000, mass_fuel:8.000},
			{name:"Rockomax X200-8 Fuel Tank", type:TYPES.LFO_TANK, size:2, cost:900, mass:0.500, mass_fuel:4.000},
			{name:"FL-T800 Fuel Tank", type:TYPES.LFO_TANK, size:1, cost:1600, mass:0.500, mass_fuel:4.000},
			{name:"FL-T400 Fuel Tank", type:TYPES.LFO_TANK, size:1, cost:850, mass:0.250, mass_fuel:2.000},
			{name:"FL-T200 Fuel Tank", type:TYPES.LFO_TANK, size:1, cost:225, mass:0.125, mass_fuel:1.000},
			{name:"FL-T100 Fuel Tank", type:TYPES.LFO_TANK, size:1, cost:110, mass:0.0625, mass_fuel:0.500},
			{name:"ROUND-8 Toroidal Fuel Tank", type:TYPES.LFO_TANK, size:0, cost:220, mass:0.025, mass_fuel:0.111},
			{name:"Oscar-B Fuel Tank", type:TYPES.LFO_TANK, size:0, cost:280, mass:0.015, mass_fuel:0.063675},
			
			//Solid Rocket Boosters
			{name:"S1 SRB-KD25k", type:TYPES.BOOSTER, size:1, cost:800, mass:3.000, mass_fuel:18.750, thrust:650, isp_vac:250, isp_atm:230},
			{name:"Rockomax BACC Solid Fuel Booster", type:TYPES.BOOSTER, size:1, cost:800, mass:1.500, mass_fuel:6.375, thrust:315, isp_vac:250, isp_atm:230},
			{name:"RT-10 Solid Fuel Booster", type:TYPES.BOOSTER, size:1, cost:450, mass:0.500, mass_fuel:3.2475, thrust:250, isp_vac:240, isp_atm:225},
			{name:"Sepratron I", type:TYPES.BOOSTER, size:"radial", cost:100, mass:0.0125, mass_fuel:0.060, thrust:18, isp_vac:100, isp_atm:100, radial:true},
			
			//Decouplers
			{name:"TR-2V Stack Decoupler", type:TYPES.DECOUPLER, size:0, cost:400, mass:0.015},
			{name:"TR-2C Stack Separator", type:TYPES.DECOUPLER, size:0, cost:450, mass:0.020},
			{name:"TR-18A Stack Decoupler", type:TYPES.DECOUPLER, size:1, cost:600, mass:0.050},
			{name:"TR-18D Stack Separator", type:TYPES.DECOUPLER, size:1, cost:600, mass:0.075},
			{name:"Rockomax Brand Decoupler", type:TYPES.DECOUPLER, size:2, cost:440, mass:0.400},
			{name:"TR-XL Stack Separator", type:TYPES.DECOUPLER, size:2, cost:900, mass:0.450},
			{name:"TR-38-D", type:TYPES.DECOUPLER, size:3, cost:600, mass:0.800},
			{name:"TT-38K Radial Decoupler", type:TYPES.DECOUPLER, size:"radial", cost:600, mass:0.025, radial:true},
			{name:"TT-70 Radial Decoupler", type:TYPES.DECOUPLER, size:"radial", cost:700, mass:0.050, radial:true},
			{name:"Structural Pylon", type:TYPES.DECOUPLER, size:"radial", cost:1275, mass:0.200, radial:true},
			{name:"Hydraulic Detachment Manifold", type:TYPES.DECOUPLER, size:"radial", cost:770, mass:0.400, radial:true},
			
			//Branches
			{name:"TVR-200 Stack Bi-Coupler", type:TYPES.BRANCH, size:"bicoupler", cost:400, mass:0.100, sizeA:1, sizeB:1, multiplier:2},
			{name:"TVR-1180C Mk1 Stack Tri-Coupler", type:TYPES.BRANCH, size:"tricoupler", cost:680, mass:0.150, sizeA:1, sizeB:1, multiplier:3},
			{name:"TVR-2160C Mk2 Stack Quad-Coupler", type:TYPES.BRANCH, size:"quadcoupler", cost:2000, mass:0.175, sizeA:1, sizeB:1, multiplier:4},
			{name:"TVR-200L Stack Bi-Adapter", type:TYPES.BRANCH, size:"bicoupler", cost:400, mass:0.100, sizeA:2, sizeB:1, multiplier:2},
			{name:"TVR-300L Stack Tri-Adapter", type:TYPES.BRANCH, size:"tricoupler", cost:600, mass:0.150, sizeA:2, sizeB:1, multiplier:3},
			{name:"TVR-400L Stack Quad-Adapter", type:TYPES.BRANCH, size:"quadcoupler", cost:800, mass:0.2, sizeA:2, sizeB:1, multiplier:4}
		]
	},
	{
		name:"KSPX 0.2.5",
		parts:[
			//LF/O Engines
			{name:"LV-NB Atomic Rocket Motor", type:TYPES.LFO_ENGINE, size:2, cost:16000, mass:5, thrust:150, isp_vac:800, isp_atm:220},
			
			//LF/O Tanks
			{name:"Rockomax X200-48 Fuel Tank", type:TYPES.LFO_TANK, size:2, cost:7600, mass:3.000, mass_fuel:24.000},
			{name:"Stratus-V Cylindrified Liquid Fuel Tank & Oxidizer Tank", type:TYPES.LFO_TANK, size:"radial", cost:2000, mass:0.300, mass_fuel:0.400, radial:true},
			{name:"Stratus-V Roundified Liquid Fuel Tank & Oxidizer Tank", type:TYPES.LFO_TANK, size:"radial", cost:900, mass:0.150, mass_fuel:0.200, radial:true}
		]
	},
	{
		name:"KW Rocketry 2.5.6",
		parts:[
		    //LF/O Engines
			{name:"KW Rocketry Maverick-1D", type:TYPES.LFO_ENGINE, size:1, cost:950, mass:2, thrust:350, isp_vac:355, isp_atm:320},
			{name:"KW Rocketry Vesta VR-1", type:TYPES.LFO_ENGINE, size:1, cost:950, mass:0.6, thrust:120, isp_vac:400, isp_atm:350},
			{name:"KW Rocketry WildCat-V", type:TYPES.LFO_ENGINE, size:1, cost:950, mass:1.5, thrust:230, isp_vac:370, isp_atm:325},
			{name:"KW Rocketry Griffon-G8D", type:TYPES.LFO_ENGINE, size:2, cost:950, mass:8, thrust:1900, isp_vac:325, isp_atm:280},
			{name:"KW Rocketry Maverick-V", type:TYPES.LFO_ENGINE, size:2, cost:950, mass:6, thrust:1400, isp_vac:335, isp_atm:285},
			{name:"Service Propulsion System", type:TYPES.LFO_ENGINE, size:2, cost:700, mass:2.25, thrust:200, isp_vac:410, isp_atm:270},
			{name:"KW Rocketry Vesta VR-9D", type:TYPES.LFO_ENGINE, size:2, cost:950, mass:5, thrust:600, isp_vac:380, isp_atm:310},
			{name:"KW Rocketry Griffon XX", type:TYPES.LFO_ENGINE, size:3, cost:950, mass:18, thrust:4900, isp_vac:310, isp_atm:265},
			{name:"KW Rocketry Titan-T1", type:TYPES.LFO_ENGINE, size:3, cost:950, mass:14, thrust:3600, isp_vac:315, isp_atm:270},
			{name:"KW Rocketry Wildcat-XR", type:TYPES.LFO_ENGINE, size:3, cost:950, mass:8, thrust:1400, isp_vac:370, isp_atm:275},
			
			//LF/O Tanks
			{name:"KW Rocketry SA-1 LFT Pancake", type:TYPES.LFO_TANK, size:1, cost:225, mass:0.0625, mass_fuel:0.5625},
			{name:"KW Rocketry SA-1 LFT", type:TYPES.LFO_TANK, size:1, cost:225, mass:0.125, mass_fuel:1.125},
			{name:"KW Rocketry SA-2 LFT", type:TYPES.LFO_TANK, size:1, cost:225, mass:0.25, mass_fuel:2.25},
			{name:"KW Rocketry SA-4 LFT", type:TYPES.LFO_TANK, size:1, cost:225, mass:0.5, mass_fuel:4.5},
			{name:"KW Rocketry SB-1 LFT Pancake", type:TYPES.LFO_TANK, size:2, cost:225, mass:0.5, mass_fuel:4.5},
			{name:"KW Rocketry SB-1 LFT", type:TYPES.LFO_TANK, size:2, cost:225, mass:1, mass_fuel:9},
			{name:"KW Rocketry SB-2 LFT", type:TYPES.LFO_TANK, size:2, cost:225, mass:2, mass_fuel:18},
			{name:"KW Rocketry SB-4 LFT", type:TYPES.LFO_TANK, size:2, cost:225, mass:4, mass_fuel:36},
			{name:"KW Rocketry SC-1 LFT Pancake", type:TYPES.LFO_TANK, size:3, cost:225, mass:1.6875, mass_fuel:15.1875},
			{name:"KW Rocketry SC-1 LFT", type:TYPES.LFO_TANK, size:3, cost:225, mass:3.375, mass_fuel:30.375},
			{name:"KW Rocketry SC-2 LFT", type:TYPES.LFO_TANK, size:3, cost:225, mass:6.75, mass_fuel:60.74875},
			{name:"KW Rocketry SC-4 LFT", type:TYPES.LFO_TANK, size:3, cost:225, mass:13.5, mass_fuel:121.5},
			{name:"KW Rocketry SC-4 LFT ALT", type:TYPES.LFO_TANK, size:3, cost:225, mass:13.5, mass_fuel:121.5},
			{name:"KW Rocketry ST-25", type:TYPES.LFO_TANK, size:2, cost:225, mass:4, mass_fuel:32.4},
			{name:"KW Rocketry ST-37", type:TYPES.LFO_TANK, size:3, cost:225, mass:13.5, mass_fuel:109.35},
			
			//Solid Rocket Boosters
			{name:"Globe I SRB", type:TYPES.BOOSTER, size:0, cost:200, mass:0.3025, mass_fuel:1.310, thrust:149, isp_vac:250, isp_atm:230, radial:true},
			{name:"Globe VI SRB", type:TYPES.BOOSTER, size:1, cost:200, mass:0.750, mass_fuel:6.000, thrust:495, isp_vac:250, isp_atm:230, radial:true},
			{name:"Globe V SRB", type:TYPES.BOOSTER, size:1, cost:200, mass:0.750, mass_fuel:4.500, thrust:372, isp_vac:250, isp_atm:230, radial:true},
			{name:"Globe X-2 SRB", type:TYPES.BOOSTER, size:1, cost:800, mass:1.500, mass_fuel:10.800, thrust:818, isp_vac:250, isp_atm:230, radial:true},
			{name:"Globe X SRB", type:TYPES.BOOSTER, size:1, cost:800, mass:1.500, mass_fuel:8.100, thrust:614, isp_vac:250, isp_atm:230, radial:true},
			{name:"Globe X-5 'Thor' SRB", type:TYPES.BOOSTER, size:2, cost:800, mass:3.500, mass_fuel:42.000, thrust:1590, isp_vac:250, isp_atm:230, radial:true},
			
			//Decouplers
			{name:"1.25m Stack Decoupler", type:TYPES.DECOUPLER, size:1, cost:400, mass:0.250},
			{name:"2.5m Stack Decoupler", type:TYPES.DECOUPLER, size:2, cost:400, mass:0.500},
			{name:"3.75m Stack Decoupler", type:TYPES.DECOUPLER, size:3, cost:400, mass:2.000}
		]
	}
];

var NO_ENGINE = {name:"", type:TYPES.LFO_ENGINE, size:0, cost:0, mass:0, thrust:0, isp_vac:0, isp_atm:0};
var FUEL_DUCT = {name:"FTX-2 External Fuel Duct", type:TYPES.DUCT, size:"radial", cost:650, mass:0, radial:true};  //mass:0.05, but have no mass in flight

var CONVERSION_FACTOR = 9.82;  //m/s^2

var OPTIMIZATION_NAMES = {
	"mass" : "Mass",
	"cost" : "Cost",
	"partCount" : "Part Count"
};

var NEEDS_OPTIMIZATION2 = {
	"partCount" : true
}

function pluck(key, obj) {
	return obj[key];
}

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
		//Engine fuel consumption at specified atmospheric pressure (t/s)
		consumption : function (atm, engine) {
			atm = Math.min(Math.max(atm, 0), 1);  //Atmospheric pressure's affect on engines maxes out at 1 (TODO: Confirm this)
			return (engine.thrust / ((engine.isp_vac * CONVERSION_FACTOR) - ((engine.isp_vac - engine.isp_atm) * CONVERSION_FACTOR * (atm || 0)))) || 0;
		},
		
		//Engine fuel consumption in vacuum (t/s)
		consumptionVac : function (engine) {
			return (engine.thrust / (engine.isp_vac * CONVERSION_FACTOR)) || 0;
		},
		
		//Engine fuel consumption in atmosphere (t/s)
		consumptionAtm : function (engine) {
			return (engine.thrust / (engine.isp_atm * CONVERSION_FACTOR)) || 0;
		}
	},
	
	Stage : {
		//Number of parts in this stage only
		partCount : function (stage) {
			return (
				((stage.others || 0).length || 0) +
				((stage.lfoTanks || 0).length || 0) +
				((stage.lfoEngines || 0).length || 0) +
				((stage.boosters || 0).length || 0) +
				((stage.decouplers || 0).length || 0) +
				((stage.branches || 0).length || 0)
			) * (stage.multiplier || 1);
		},
		
		//Cost of this stage only
		cost : function (stage) {
			return (
				(stage.others ? stage.others.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) + 
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0) +
				(stage.branches ? stage.branches.map(pluckNumber.bind(this, "cost")).reduce(sum, 0) : 0)
			) * (stage.multiplier || 1);
		},
		
		//Thrust of active engines during this stage only (kN)
		thrust : function (stage) {
			return (
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "thrust")).reduce(sum, 0) : 0) + 
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "thrust")).reduce(sum, 0) : 0)
			) * (stage.multiplier || 1);
		},
		
		//Mass of just the fuel of this stage only (t)
		massFuelStart : function (stage) {
			return (
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0) : 0)
			) * (stage.multiplier || 1);
		},
		
		//Mass of this stage only (t)
		massStart : function (stage) {
			return (
				(stage.payload || 0) + 
				(stage.others ? stage.others.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) + stage.lfoTanks.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0) : 0) + 
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) + stage.boosters.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.branches ? stage.branches.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0)
			) * (stage.multiplier || 1);
		},
		
		//Mass of this stage only at the specified time from the beginning of this stage's burn (t)
		massAt : function (stage, atm, time) {
			time = Math.max(time, 0);
			var mass = (stage.payload || 0) + 
				(stage.others ? stage.others.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.branches ? stage.branches.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0);
			if (stage.lfoTanks) {
				mass += stage.lfoTanks.map(pluckNumber.bind(this, "mass")).reduce(sum, 0);
				var fuelMass = stage.lfoTanks.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0);
				var consumption = (stage.lfoEngines ? stage.lfoEngines.map(KSP.Engine.consumption.bind(this, atm)).reduce(sum, 0) : 0);
				fuelMass -= consumption * time;
				if (fuelMass < 0) fuelMass = 0;
				mass += fuelMass;
			}
			if (stage.boosters) {
				mass += stage.boosters.map(pluckNumber.bind(this, "mass")).reduce(sum, 0);
				var fuelMass = stage.boosters.map(pluckNumber.bind(this, "mass_fuel")).reduce(sum, 0);
				var consumption = (stage.boosters ? stage.boosters.map(KSP.Engine.consumption.bind(this, atm)).reduce(sum, 0) : 0);
				fuelMass -= consumption * time;
				if (fuelMass < 0) fuelMass = 0;
				mass += fuelMass;
			}
			return mass * (stage.multiplier || 1);
		},
		
		//Mass of this stage only at end of burn (t)
		massEndStage : function (stage) {
			return (
				(stage.payload || 0) + 
				(stage.others ? stage.others.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.lfoTanks ? stage.lfoTanks.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) + 
				(stage.lfoEngines ? stage.lfoEngines.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.boosters ? stage.boosters.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.decouplers ? stage.decouplers.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0) +
				(stage.branches ? stage.branches.map(pluckNumber.bind(this, "mass")).reduce(sum, 0) : 0)
			) * (stage.multiplier || 1);
		},
		
		//Stage fuel consumption at specified atmospheric pressure (t/s)
		consumption : function (stage, atm) {
			return (
				(stage.lfoEngines ? stage.lfoEngines.map(KSP.Engine.consumption.bind(this, atm)).reduce(sum, 0) : 0) + 
				(stage.boosters ? stage.boosters.map(KSP.Engine.consumption.bind(this, atm)).reduce(sum, 0) : 0)
			) * (stage.multiplier || 1);
		},
		
		//Combined specific impulse at atmospheric pressure (m/s)
		impulse : function (stage, atm) {
			return (KSP.Stage.thrust(stage) / KSP.Stage.consumption(stage, atm)) || 0;
		},
		
		//Time required to use all fuel in this stage only at full thrust at specified atmospheric pressure (s)
		timeStage : function (stage, atm) {
			return (KSP.Stage.massFuelStart(stage) / KSP.Stage.consumption(stage, atm)) || 0;
		}
	},
	
	Stages : {
		//Number of parts of all stages
		partCount : function (stage) {
			return KSP.Stage.partCount(stage) +
				(stage.next ? KSP.Stages.partCount(stage.next) : 0);
		},
		
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
		
		//Total mass of all stages at the specified time from the beginning of this stage's burn, assuming no jettisoned stages (t)
		massAt : function (stage, atm, time) {
			var mass;
			
			if (time > 0) {
				var timeEmpty = KSP.Stages.timeStage(stage, atm);
				
				if (time < timeEmpty) {
					mass = KSP.Stage.massStart(stage) - (consumption * time);
				} else {
					mass = KSP.Stage.massEndStage(stage);  //assume we haven't jettisoned this stage yet
				}
				
				if (stage.next) {
					if (stage.parallel && !stage.asparagus) {
						mass += KSP.Stages.massAt(stage.next, atm, time);
					} else {
						mass += KSP.Stages.massAt(stage.next, atm, time - timeEmpty);
					}
				}
			} else {
				mass = KSP.Stages.massStart(stage);
			}
			
			return mass;
		},
		
		//Total mass of all stages at end of burn of this stage (t)
		massEndStage : function (stage, atm) {
			if (stage.parallel && !stage.asparagus) {
				return KSP.Stages.massAt(stage, atm, KSP.Stages.timeStage(stage, atm));
			}
			return KSP.Stage.massEndStage(stage) +
				(stage.next ? KSP.Stages.massStart(stage.next) : 0);
		},
		
		//Total mass of all stages at end of burn of all stages, assuming no jettisoned stages (t)
		massEndTotal : function (stage) {
			return KSP.Stage.massEndStage(stage) +
				(stage.next ? KSP.Stages.massEndTotal(stage.next) : 0);
		},
		
		//Thrust-to-Weight Ratio
		twr : function (stage, planet) {
			return (KSP.Stages.thrust(stage) / (KSP.Stages.massStart(stage) * planet.gravity)) || 0;
		},
		
		//Total stage fuel consumption at specified atmospheric pressure (t/s)
		consumption : function (stage, atm) {
			return KSP.Stage.consumption(stage, atm) +
				(stage.parallel ? KSP.Stages.consumption(stage.next, atm) : 0);
		},
		
		//Combined specific impulse at atmospheric pressure (m/s)
		impulse : function (stage, atm) {
			return (KSP.Stages.thrust(stage) / KSP.Stages.consumption(stage, atm)) || 0;
		},
		
		//Delta-V at atmospheric pressure of this stage only (m/s)
		deltaVStage : function (stage, atm) {
			return (Math.log((KSP.Stages.massStart(stage) * 1000) / (KSP.Stages.massEndStage(stage, atm) * 1000)) * KSP.Stages.impulse(stage, atm)) || 0;
		},
		
		//Delta-V at atmospheric pressure of all stages (m/s)
		deltaVTotal : function (stage, atm) {
			return KSP.Stages.deltaVStage(stage, atm) +
				(stage.next ? KSP.Stages.deltaVTotal(stage.next, atm) : 0);
		},
		
		//Time required to use all fuel in this stage at full thrust at specified atmospheric pressure (s)
		timeStage : function (stage, atm) {
			return (KSP.Stage.massFuelStart(stage) / KSP.Stages.consumption(stage, atm)) || 0;
		},
		
		//Time required to use all fuel in all stages at full thrust at specified atmospheric pressure (s)
		timeTotal : function (stage, atm) {
			var time = KSP.Stages.timeStage(stage, atm);
			
			while (stage.next && stage.parallel && !stage.asparagus) {
				time = Math.max(time, KSP.Stages.timeStage(stage.next, atm));
				stage = stage.next;
			}
			
			if (stage.next) {
				time += KSP.Stages.timeTotal(stage.next, atm);
			}
			
			return time;
		},
		
		humanize : function (stage, planet, atm) {
			var strBuild = [];
			if (stage.multiplier > 1) strBuild.push("x" + stage.multiplier + ":");
			if (stage.payload) strBuild.push("Payload: " + stage.payload + "t");
			if (stage.lfoEngines && stage.lfoEngines.length) strBuild.push("Engines: " + KSP.Parts.humanize(stage.lfoEngines));
			if (stage.lfoTanks && stage.lfoTanks.length) strBuild.push("LF/O Tanks: " + KSP.Parts.humanize(stage.lfoTanks));
			if (stage.boosters && stage.boosters.length) strBuild.push("Boosters: " + KSP.Parts.humanize(stage.boosters));
			if (stage.branches && stage.branches.length) strBuild.push("Branches: " + KSP.Parts.humanize(stage.branches));
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
	args.minTWR = args.minTWR || 0;
	args.maxTWR = args.maxTWR || Infinity;
	args.minTime  = args.minTime || 0;
	args.maxTime = args.maxTime || Infinity;
	args.maxMass = (args.optimization !== "mass" && args.maxMass ? args.maxMass : Infinity);
	args.maxPartCount = (args.optimization !== "partCount" && args.maxPartCount ? args.maxPartCount : Infinity);
	args.atm = args.atm || 0;
	args.maxSymmetry = args.maxSymmetry || 8;
	args.maxStacks = args.maxStacks || 1;
	args.cluster = (args.maxStacks > 1 || args.stagesMaxStacks > 1) && !!args.cluster;
	args.asparagus = !!(args.next.lfoTanks || 0).length && !!args.asparagus;
	args.parallel = /*!!args.parallel || */args.asparagus;  //FIXME: Parallel disabled until supported without asparagus
	args.decoupling = (args.decoupling !== false);
	args.tankDiametersEqual = !!args.tankDiametersEqual;
	args.tankDiametersEqualEngineDiameter = args.tankDiametersEqual && !!args.tankDiametersEqualEngineDiameter;
	args.tankDiametersGreaterThenEngineDiameter = args.tankDiametersEqual && !!args.tankDiametersGreaterThenEngineDiameter;
	args.maxStages = args.maxStages || 1;
	args.stagesMaxStacks = args.stagesMaxStacks || 1;
	args.stagesAsparagus = !!args.stagesAsparagus;
	args.stagesParallel = !!args.stagesParallel || args.stagesAsparagus;
	args.parts = args.parts || {};
	args.parts.lfoEngines = args.parts.lfoEngines || [];
	args.parts.lfoTanks = args.parts.lfoTanks || [];
	args.parts.boosters = args.parts.boosters || [];
	args.parts.stackDecouplers = args.parts.stackDecouplers || [];
	args.parts.radialDecouplers = args.parts.radialDecouplers || [];
	args.parts.branches = args.parts.branches || [];
}

function getMetric(stage, args) {
	var metric;
	if (args.optimization === "mass") {
		metric = KSP.Stages.massStart(stage);
	} else if (args.optimization === "cost") {
		metric = KSP.Stages.cost(stage);
	} else if (args.optimization === "partCount") {
		metric = KSP.Stages.partCount(stage);
	} else {
		metric = KSP.Stages.massStart(stage);
	}
	
	if (args.optimization2) {
		var metric2;
		if (args.optimization2 === "mass") {
			metric2 = 1 - (1 / KSP.Stages.massStart(stage));
		} else if (args.optimization2 === "cost") {
			metric2 = 1 - (1 / KSP.Stages.cost(stage));
		} else if (args.optimization2 === "deltaV") {
			metric2 = (1 / KSP.Stages.deltaVTotal(stage, args.atm));
		} else {
			metric2 = 1 - (1 / KSP.Stages.massStart(stage));
		}
		
		metric += metric2;
	}
	
	return metric;
}

function findOptimalStage(args) {
	fixArgs(args);
	
	var bestStage = null;
	var stage = null;
	var stackMultiplier = Math.max((args.next.multiplier || 1), (args.parallel || (args.next.lfoEngines && (args.next.lfoEngines.length > 1 || (args.next.lfoEngines[0] || 0).last)) ? 2 : 1));  //parallel stages must have two stacks, or the same # of stacks (if greater) as the next stage (simplifies design)
	var bestStackDecoupler, bestRadialDecoupler;
	
	//
	//LF/O Engines
	//

	stage = {
		next : args.next,
		multiplier : 0,
		payload : 0,
		others : [],
		lfoEngines : [],
		lfoTanks : [],
		boosters : [],
		decouplers : [],
		branches : [],
		parallel : args.parallel,
		asparagus : args.asparagus,
		optimization : args.optimization,
		metric : Infinity,
		deltaV : 0
	};
	
	bestStackDecoupler = args.parts.stackDecouplers[0];
	bestRadialDecoupler = args.parts.radialDecouplers[0];
	
	nextEngine: for (var e = 0, el = args.parts.lfoEngines.length; e <= el; ++e) {
		var engine = args.parts.lfoEngines[e] || NO_ENGINE;
		var branches = [];
		if (args.cluster) {
			branches = args.parts.branches.filter(function (branch) {
				return (args.tankDiametersEqualEngineDiameter ? branch.sizeB === engine.size : branch.sizeB >= engine.size);
			});
		}
		
		nextBranch: for (var c = -1, cl = (engine.radial ? 0 : branches.length); c < cl; ++c) {
			var branch = branches[c];
			var engineMultiplier = (branch || 0).multiplier || 1;
			
			stage.lfoEngines = [];
			stage.branches = [];
			stage.others = [];
			
			//add fuel ducts for asparagus staging
			if (stage.asparagus) stage.others.push(FUEL_DUCT);
			
			//add branch
			if (branch) stage.branches.push(branch);
			
			nextEngineCount: for (var ec = 1, ecl = (engine.radial ? args.maxSymmetry : 1); ec <= ecl; ++ec) {
				//add engine * branch multiplier
				for (var y = 0; y < engineMultiplier; ++y) {
					stage.lfoEngines.push(engine);
				}
				
				stage.lfoTanks = [];
				
				nextTank: for (var skippedTank, t = 0, tl = args.parts.lfoTanks.length; t < tl || skippedTank; ++t) {
					//if we are out of tanks, but skipped some, go back and try them
					if (t >= tl) {
						t = skippedTank - 1;  //gets incremented next time around
						skippedTank = undefined;
						stage.lfoTanks = [];
						continue nextTank;
					}
					
					var tank = args.parts.lfoTanks[t];
					
					if (args.tankDiametersEqual && !tank.radial) {
						if (branch && branch.sizeA !== tank.size) {
							//this tank will not work
							continue nextTank;
						} else if (!branch && !stage.lfoEngines[0].radial && ((tank.size < stage.lfoEngines[0].size && args.tankDiametersEqualEngineDiameter) || (tank.size > stage.lfoEngines[0].size && !args.tankDiametersGreaterThenEngineDiameter))) {
							//this tank will not work
							continue nextTank;
						} else if (stage.lfoTanks.length && stage.lfoTanks[0].size !== tank.size) {
							//come back to this tank later
							if (!skippedTank) skippedTank = t;
							continue nextTank;
						} else if (bestStackDecoupler && bestStackDecoupler.size !== tank.size) {
							var newDecouplerIndex = args.parts.stackDecouplers.map(pluck.bind(this, "size")).indexOf(tank.size);
							if (newDecouplerIndex > -1) {
								bestStackDecoupler = args.parts.stackDecouplers[newDecouplerIndex];
							}
						}
					}
					
					var diff = (stage.lfoTanks.length === 0 ? 8 : Math.ceil(args.parts.lfoTanks[t-1].mass_fuel / tank.mass_fuel));
					nextTankCount: for (var tc = 1; tc < diff; ++tc) {
						stage.lfoTanks.push(tank);
						stage.decouplers = [];
						
						nextStackCount: for (var sc = stackMultiplier; sc <= args.maxStacks; sc += stackMultiplier) {
							stage.multiplier = sc;
							
							if (engine.radial && stage.multiplier === 1) {
								//prevent a single radial engine on a single stack
								continue nextStackCount;
							}
							
							//add decouplers
							if (args.decoupling) {
								if (stage.multiplier === 1) {
									if (bestStackDecoupler) stage.decouplers = [ bestStackDecoupler ];
								} else {
									if (bestRadialDecoupler) {
										stage.decouplers = [ bestRadialDecoupler ];
									}
								}
							}
						
							if (args.maxPartCount !== Infinity && KSP.Stages.partCount(stage) > args.maxPartCount) {
								//too many parts, try something different
								if (sc === stackMultiplier) {
									continue nextBranch;
								} else {
									break;
								}
							}
							
							if (args.maxMass !== Infinity && KSP.Stages.massStart(stage) > args.maxMass) {
								//parts are too heavy
								if (sc === stackMultiplier) {
									stage.lfoTanks.pop();
									continue nextTank;
								} else {
									break;
								}
							}
							
							var twr = KSP.Stages.twr(stage, args.planet);
							var time = KSP.Stages.timeStage(stage, args.atm);
							
							if (twr < args.minTWR || time > args.maxTime) {
								if (KSP.Stages.deltaVStage(stage, args.atm) >= args.deltaV) {
									//last tank was too big
									if (sc === stackMultiplier) {
										stage.lfoTanks.pop();
										continue nextTank;
									} else {
										break;
									}
								} else {
									//engine is not a good fit
									continue nextEngineCount;
								}
							} else {
								var dV = KSP.Stages.deltaVStage(stage, args.atm);
								if (twr <= args.maxTWR && time >= args.minTime && dV >= args.deltaV) {
									stage.metric = getMetric(stage, args);
									
									if (!bestStage || stage.metric < bestStage.metric) {
										bestStage = {
											next : stage.next,
											multiplier : stage.multiplier,
											payload : stage.payload,
											others : stage.others.slice(),
											lfoEngines : stage.lfoEngines.slice(),
											lfoTanks : stage.lfoTanks.slice(),
											boosters : stage.boosters.slice(),
											decouplers : stage.decouplers.slice(),
											branches : stage.branches.slice(),
											parallel : stage.parallel,
											asparagus : stage.asparagus,
											optimization : stage.optimization,
											metric : stage.metric,
											deltaV : dV
										};
									}
									
									if (sc === stackMultiplier) {
										stage.lfoTanks.pop();
										continue nextTank;
									} else {
										break;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	
	//
	//Boosters
	//
	
	stage = {
		next : args.next,
		multiplier : 0,
		payload : 0,
		others : [],
		lfoEngines : [],
		lfoTanks : [],
		boosters : [],
		decouplers : [],
		branches : [],
		parallel : false,  //not yet supported
		asparagus : false,  //boosters can't share fuel
		optimization : args.optimization,
		metric : Infinity,
		deltaV : 0
	};
	
	bestStackDecoupler = args.parts.stackDecouplers[0];
	bestRadialDecoupler = args.parts.radialDecouplers[0];
	
	nextBooster: for (var b = 0, bl = args.parts.boosters.length; b < bl; ++b) {
		var booster = args.parts.boosters[b];
		
		if (args.tankDiametersEqual && !booster.radial && bestStackDecoupler && bestStackDecoupler.size !== booster.size) {
			var newDecouplerIndex = args.parts.stackDecouplers.map(pluck.bind(this, "size")).indexOf(booster.size);
			if (newDecouplerIndex > -1) {
				bestStackDecoupler = args.parts.stackDecouplers[newDecouplerIndex];
			}
		}
		
		stage.boosters = [ booster ];
		
		nextStackCount: for (var sc = stackMultiplier; sc <= args.maxStacks; sc += stackMultiplier) {
			stage.multiplier = sc;
		
			if (booster.radial && stage.multiplier === 1) {
				//prevents a single radial booster on a single stack
				continue nextStackCount;
			}
			
			//add decouplers
			if (args.decoupling) {
				if (stage.multiplier === 1) {
					if (bestStackDecoupler) stage.decouplers = [ bestStackDecoupler ];
				} else {
					if (bestRadialDecoupler) {
						stage.decouplers = [ bestRadialDecoupler ];
					}
				}
			}
		
			if (args.maxPartCount !== Infinity && KSP.Stages.partCount(stage) > args.maxPartCount) {
				//too many parts, try something different
				if (sc === stackMultiplier) {
					continue nextBooster;
				} else {
					break;
				}
			}
			
			if (args.maxMass !== Infinity && KSP.Stages.massStart(stage) > args.maxMass) {
				//parts are too heavy
				if (sc === stackMultiplier) {
					stage.lfoTanks.pop();
					continue nextBooster;
				} else {
					break;
				}
			}
			
			var twr = KSP.Stages.twr(stage, args.planet);
			var time = KSP.Stages.timeStage(stage, args.atm);
			if (twr > args.maxTWR || time < args.minTime || time > args.maxTime) {
				continue nextBooster;
			} else {
				var dV = KSP.Stages.deltaVStage(stage, args.atm);
				if (twr >= args.minTWR && dV >= args.deltaV) {
					stage.metric = getMetric(stage, args);
					
					if (!bestStage || stage.metric < bestStage.metric) {
						bestStage = {
							next : stage.next,
							multiplier : stage.multiplier,
							payload : stage.payload,
							others : stage.others.slice(),
							lfoEngines : stage.lfoEngines.slice(),
							lfoTanks : stage.lfoTanks.slice(),
							boosters : stage.boosters.slice(),
							decouplers : stage.decouplers.slice(),
							branches : stage.branches.slice(),
							parallel : stage.parallel,
							asparagus : stage.asparagus,
							optimization : stage.optimization,
							metric : stage.metric,
							deltaV : dV
						};
					}
					
					continue nextBooster;
				}
			}
		}
	}
	
	
	//remove empty engines
	if (bestStage && bestStage.lfoEngines[0] === NO_ENGINE) {
		bestStage.lfoEngines = [];
	}
	
	return bestStage;
}

function findRandomOptimalStaging(args) {
	fixArgs(args);
	var randomSolution = null;
	
	if (args.maxStages === 1) {
		randomSolution = findOptimalStage(args);
	} else {
		var firstArgs = Object.create(args);
		firstArgs.deltaV = Math.round(args.deltaV * Math.random());
		var firstStage = findOptimalStage(firstArgs);
		
		if (firstStage) {
			var secondArgs = Object.create(args);
			secondArgs.next = firstStage;
			secondArgs.deltaV = args.deltaV - firstStage.deltaV;
			secondArgs.maxStacks = args.stagesMaxStacks;
			secondArgs.parallel = !!args.stagesParallel;
			secondArgs.asparagus = !!args.stagesAsparagus;
			secondArgs.decoupling = true;
			secondArgs.maxStages = args.maxStages - 1;
			var secondStage = findOptimalStage(secondArgs);
			
			var nextStage = null;
			if (secondArgs.maxStages > 1) {
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
			if (args.maxStages > 1) {
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