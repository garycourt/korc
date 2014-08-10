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
	UNKNOWN:0,
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
		name:"Stock 0.24.2", 
		parts:[
			//LF/O Engines
			{"name":"S3 KS-25x4 Engine Cluster","type":TYPES.LFO_ENGINE,"size":3,"cost":32400,"mass":9.75,"thrust":3200,"isp_vac":360,"isp_atm":320,"gimbal":0.5,"last":true},
			{"name":"Kerbodyne KR-2L Advanced Engine","type":TYPES.LFO_ENGINE,"size":3,"cost":20850,"mass":6.5,"thrust":2500,"isp_vac":380,"isp_atm":280,"gimbal":1},
			{"name":"Rockomax \"Mainsail\" Liquid Engine","type":TYPES.LFO_ENGINE,"size":2,"cost":5650,"mass":6,"thrust":1500,"isp_vac":360,"isp_atm":320,"gimbal":1},
			{"name":"Rockomax \"Skipper\" Liquid Engine","type":TYPES.LFO_ENGINE,"size":2,"cost":2850,"mass":3,"thrust":650,"isp_vac":370,"isp_atm":320,"gimbal":1},
			{"name":"Rockomax \"Poodle\" Liquid Engine","type":TYPES.LFO_ENGINE,"size":2,"cost":1600,"mass":2,"thrust":220,"isp_vac":390,"isp_atm":270,"gimbal":2.5},
			{"name":"LV-N Atomic Rocket Motor","type":TYPES.LFO_ENGINE,"size":1,"cost":8700,"mass":2.25,"thrust":60,"isp_vac":800,"isp_atm":220,"gimbal":1},
			{"name":"Toroidal Aerospike Rocket","type":TYPES.LFO_ENGINE,"size":1,"cost":3850,"mass":1.5,"thrust":175,"isp_vac":390,"isp_atm":388,"last":true},
			{"name":"LV-T45 Liquid Fuel Engine","type":TYPES.LFO_ENGINE,"size":1,"cost":950,"mass":1.5,"thrust":200,"isp_vac":370,"isp_atm":320,"gimbal":1},
			{"name":"LV-T30 Liquid Fuel Engine","type":TYPES.LFO_ENGINE,"size":1,"cost":850,"mass":1.25,"thrust":215,"isp_vac":370,"isp_atm":320},
			{"name":"R.A.P.I.E.R. Engine","type":TYPES.LFO_ENGINE,"size":1,"cost":3600,"mass":1.2,"thrust":175,"isp_vac":360,"isp_atm":320,"gimbal":3},
			{"name":"LV-909 Liquid Fuel Engine","type":TYPES.LFO_ENGINE,"size":1,"cost":750,"mass":0.5,"thrust":50,"isp_vac":390,"isp_atm":300,"gimbal":0.5},
			{"name":"Rockomax 48-7S","type":TYPES.LFO_ENGINE,"size":0,"cost":300,"mass":0.1,"thrust":30,"isp_vac":350,"isp_atm":300,"gimbal":1},
			{"name":"LV-1 Liquid Fuel Engine","type":TYPES.LFO_ENGINE,"size":0,"cost":350,"mass":0.03,"thrust":4,"isp_vac":290,"isp_atm":220},
			{"name":"Rockomax Mark 55 Radial Mount Liquid Engine","type":TYPES.LFO_ENGINE,"size":-1,"cost":850,"mass":0.9,"thrust":120,"isp_vac":320,"isp_atm":290,"gimbal":3,"last":true,"radial":true},
			{"name":"Rockomax 24-77","type":TYPES.LFO_ENGINE,"size":-1,"cost":480,"mass":0.09,"thrust":20,"isp_vac":300,"isp_atm":250,"gimbal":1,"last":true,"radial":true},
			{"name":"LV-1R Liquid Fuel Engine","type":TYPES.LFO_ENGINE,"size":-1,"cost":650,"mass":0.03,"thrust":4,"isp_vac":290,"isp_atm":220,"last":true,"radial":true},
			
			//LF/O Tanks
			{"name":"Kerbodyne S3-14400 Tank","type":TYPES.LFO_TANK,"size":3,"cost":22800,"mass":10,"mass_fuel":72},
			{"name":"Kerbodyne S3-7200 Tank","type":TYPES.LFO_TANK,"size":3,"cost":14400,"mass":5,"mass_fuel":36},
			{"name":"Kerbodyne S3-3600 Tank","type":TYPES.LFO_TANK,"size":3,"cost":7200,"mass":2.5,"mass_fuel":18},
			{"name":"Rockomax Jumbo-64 Fuel Tank","type":TYPES.LFO_TANK,"size":2,"cost":12800,"mass":4,"mass_fuel":32},
			{"name":"Rockomax X200-32 Fuel Tank","type":TYPES.LFO_TANK,"size":2,"cost":6400,"mass":2,"mass_fuel":16},
			{"name":"Rockomax X200-16 Fuel Tank","type":TYPES.LFO_TANK,"size":2,"cost":3200,"mass":1,"mass_fuel":8},
			{"name":"Rockomax X200-8 Fuel Tank","type":TYPES.LFO_TANK,"size":2,"cost":1600,"mass":0.5,"mass_fuel":4},
			{"name":"FL-T800 Fuel Tank","type":TYPES.LFO_TANK,"size":1,"cost":1600,"mass":0.5,"mass_fuel":4},
			{"name":"FL-T400 Fuel Tank","type":TYPES.LFO_TANK,"size":1,"cost":850,"mass":0.25,"mass_fuel":2},
			{"name":"FL-T200 Fuel Tank","type":TYPES.LFO_TANK,"size":1,"cost":425,"mass":0.125,"mass_fuel":1},
			{"name":"FL-T100 Fuel Tank","type":TYPES.LFO_TANK,"size":1,"cost":250,"mass":0.0625,"mass_fuel":0.5},
			{"name":"ROUND-8 Toroidal Fuel Tank","type":TYPES.LFO_TANK,"size":1,"cost":360,"mass":0.025,"mass_fuel":0.111},
			{"name":"Oscar-B Fuel Tank","type":TYPES.LFO_TANK,"size":0,"cost":180,"mass":0.015,"mass_fuel":0.06367500000000001},
			
			//Boosters
			{"name":"LFB KR-1x2","type":TYPES.BOOSTER,"size":2,"cost":16400,"mass":10,"thrust":2000,"isp_vac":340,"isp_atm":290,"gimbal":0.5,"mass_fuel":32,"last":true},
			{"name":"S1 SRB-KD25k","type":TYPES.BOOSTER,"size":1,"cost":1800,"mass":3,"thrust":650,"isp_vac":250,"isp_atm":230,"mass_fuel":18.75},
			{"name":"RT-10 Solid Fuel Booster","type":TYPES.BOOSTER,"size":1,"cost":325,"mass":0.5,"thrust":250,"isp_vac":240,"isp_atm":225,"mass_fuel":3.2475},
			{"name":"Rockomax BACC Solid Fuel Booster","type":TYPES.BOOSTER,"size":1,"cost":700,"mass":1.5,"thrust":315,"isp_vac":250,"isp_atm":230,"mass_fuel":6.375},
			{"name":"Launch Escape System","type":TYPES.BOOSTER,"size":-1,"cost":800,"mass":1,"thrust":750,"isp_vac":360,"isp_atm":320,"mass_fuel":0.11249999999999999},
			{"name":"Sepratron I","type":TYPES.BOOSTER,"size":-1,"cost":50,"mass":0.0125,"thrust":18,"isp_vac":100,"isp_atm":100,"mass_fuel":0.06,"last":true,"radial":true},
			
			//Decouplers
			{"name":"TR-38-D","type":TYPES.DECOUPLER,"size":3,"cost":600,"mass":0.8,"ejection_force":100},
			{"name":"TR-XL Stack Separator","type":TYPES.DECOUPLER,"size":2,"cost":900,"mass":0.45,"ejection_force":600},
			{"name":"Rockomax Brand Decoupler","type":TYPES.DECOUPLER,"size":2,"cost":550,"mass":0.4,"ejection_force":250},
			{"name":"TR-18D Stack Separator","type":TYPES.DECOUPLER,"size":1,"cost":600,"mass":0.075,"ejection_force":250},
			{"name":"TR-18A Stack Decoupler","type":TYPES.DECOUPLER,"size":1,"cost":400,"mass":0.05,"ejection_force":250},
			{"name":"TR-2C Stack Separator","type":TYPES.DECOUPLER,"size":0,"cost":450,"mass":0.02,"ejection_force":15},
			{"name":"TR-2V Stack Decoupler","type":TYPES.DECOUPLER,"size":0,"cost":300,"mass":0.015,"ejection_force":15},
			{"name":"Hydraulic Detachment Manifold","type":TYPES.DECOUPLER,"size":-1,"cost":770,"mass":0.4,"ejection_force":450,"last":true,"radial":true},
			{"name":"Structural Pylon","type":TYPES.DECOUPLER,"size":-1,"cost":1275,"mass":0.2,"ejection_force":250,"last":true,"radial":true},
			{"name":"TT-70 Radial Decoupler","type":TYPES.DECOUPLER,"size":-1,"cost":700,"mass":0.05,"ejection_force":260,"last":true,"radial":true},
			{"name":"TT-38K Radial Decoupler","type":TYPES.DECOUPLER,"size":-1,"cost":600,"mass":0.025,"ejection_force":250,"last":true,"radial":true},
			
			//Branches
			{"name":"TVR-400L Stack Quad-Adapter","type":TYPES.BRANCH,"size":2,"cost":800,"mass":0.2,"sizeA":2,"sizeB":1,"multiplier":4},
			{"name":"TVR-300L Stack Tri-Adapter","type":TYPES.BRANCH,"size":2,"cost":600,"mass":0.15,"sizeA":2,"sizeB":1,"multiplier":3},
			{"name":"TVR-200L Stack Bi-Adapter","type":TYPES.BRANCH,"size":2,"cost":400,"mass":0.1,"sizeA":2,"sizeB":1,"multiplier":2},
			{"name":"TVR-2160C Mk2 Stack Quad-Coupler","type":TYPES.BRANCH,"size":1,"cost":2000,"mass":0.175,"sizeA":1,"sizeB":1,"multiplier":4},
			{"name":"TVR-1180C Mk1 Stack Tri-Coupler","type":TYPES.BRANCH,"size":1,"cost":680,"mass":0.15,"sizeA":1,"sizeB":1,"multiplier":3},
			{"name":"TVR-200 Stack Bi-Coupler","type":TYPES.BRANCH,"size":1,"cost":400,"mass":0.1,"sizeA":1,"sizeB":1,"multiplier":2}
		]
	},
	{
		name:"KSPX 0.2.6.1",
		parts:[
			//LF/O Engines
			{"name":"LV-NB Atomic Rocket Motor","type":TYPES.LFO_ENGINE,"size":2,"cost":16000,"mass":5,"thrust":150,"isp_vac":800,"isp_atm":220,"gimbal":1},
			
			//LF/O Tanks
			{"name":"Rockomax X200-48 Fuel Tank","type":TYPES.LFO_TANK,"size":2,"cost":7600,"mass":3,"mass_fuel":24},
			{name:"Stratus-V Cylindrified Liquid Fuel Tank & Oxidizer Tank", type:TYPES.LFO_TANK, size:"radial", cost:2000, mass:0.300, mass_fuel:0.400, radial:true},
			{name:"Stratus-V Roundified Liquid Fuel Tank & Oxidizer Tank", type:TYPES.LFO_TANK, size:"radial", cost:900, mass:0.150, mass_fuel:0.200, radial:true},
			
			//Boosters
			{"name":"Escape Tower","type":TYPES.BOOSTER,"size":-1,"cost":1800,"mass":0.5,"thrust":750,"isp_vac":240,"isp_atm":225,"mass_fuel":0.6,"ejection_force":25}
		]
	},
	{
		name:"KW Rocketry 2.6c",
		parts:[
		    //LF/O Engines
			{"name":"KW Rocketry Griffon Century","type":TYPES.LFO_ENGINE,"size":4,"cost":55000,"mass":32,"thrust":11000,"isp_vac":300,"isp_atm":257,"gimbal":0.55,"sizeA":4,"sizeB":1,"multiplier":4},
			{"name":"KW Rocketry Titan V","type":TYPES.LFO_ENGINE,"size":4,"cost":28000,"mass":22,"thrust":5800,"isp_vac":335,"isp_atm":260,"gimbal":1},
			{"name":"KW Rocketry Griffon XX","type":TYPES.LFO_ENGINE,"size":3,"cost":15000,"mass":18,"thrust":5000,"isp_vac":310,"isp_atm":265,"gimbal":0.5},
			{"name":"KW Rocketry Titan-T1","type":TYPES.LFO_ENGINE,"size":3,"cost":10000,"mass":14,"thrust":3600,"isp_vac":325,"isp_atm":270,"gimbal":1.5},
			{"name":"KW Rocketry Wildcat-XR","type":TYPES.LFO_ENGINE,"size":3,"cost":7500,"mass":8,"thrust":1400,"isp_vac":370,"isp_atm":275,"gimbal":0.75},
			{"name":"KW Rocketry Griffon-G8D","type":TYPES.LFO_ENGINE,"size":2,"cost":3300,"mass":8,"thrust":1900,"isp_vac":325,"isp_atm":280,"gimbal":0.5},
			{"name":"KW Rocketry Maverick-V","type":TYPES.LFO_ENGINE,"size":2,"cost":2650,"mass":6,"thrust":1400,"isp_vac":335,"isp_atm":285,"gimbal":1},
			{"name":"KW Rocketry Vesta VR-9D","type":TYPES.LFO_ENGINE,"size":2,"cost":2200,"mass":5,"thrust":600,"isp_vac":380,"isp_atm":310,"gimbal":1.5},
			{"name":"KW Rocketry Maverick-1D","type":TYPES.LFO_ENGINE,"size":1,"cost":1200,"mass":2,"thrust":350,"isp_vac":355,"isp_atm":320,"gimbal":0.25},
			{"name":"KW Rocketry WildCat-V","type":TYPES.LFO_ENGINE,"size":1,"cost":950,"mass":1.5,"thrust":230,"isp_vac":370,"isp_atm":325,"gimbal":0.5},
			{"name":"KW Rocketry Vesta VR-1","type":TYPES.LFO_ENGINE,"size":1,"cost":1200,"mass":0.75,"thrust":90,"isp_vac":400,"isp_atm":350,"gimbal":0.75},
			
			//LF/O Tanks
			{"name":"KW Rocketry v-35 LFT","type":TYPES.LFO_TANK,"size":4,"cost":107520,"mass":30,"mass_fuel":268.8},
			{"name":"KW Rocketry v-15 LFT","type":TYPES.LFO_TANK,"size":4,"cost":46080,"mass":12.7,"mass_fuel":115.2},
			{"name":"KW Rocketry V-05 LFT","type":TYPES.LFO_TANK,"size":4,"cost":15360,"mass":4.25,"mass_fuel":38.400000000000006},
			{"name":"KW Rocketry SC-4 LFT","type":TYPES.LFO_TANK,"size":3,"cost":51840,"mass":14.3,"mass_fuel":129.6},
			{"name":"KW Rocketry SC-2 LFT","type":TYPES.LFO_TANK,"size":3,"cost":25920,"mass":7.15,"mass_fuel":64.8},
			{"name":"KW Rocketry SC-4A LFT","type":TYPES.LFO_TANK,"size":3,"cost":51840,"mass":7.15,"mass_fuel":129.6},
			{"name":"KW Rocketry SC-1 LFT","type":TYPES.LFO_TANK,"size":3,"cost":12960,"mass":3.58,"mass_fuel":32.4},
			{"name":"KW Rocketry SC-3 LFT","type":TYPES.LFO_TANK,"size":3,"cost":6480,"mass":3.2,"mass_fuel":15.1875},
			{"name":"KW Rocketry LFTA 5-3","type":TYPES.LFO_TANK,"size":3,"cost":10593,"mass":2.9,"mass_fuel":26.48199},
			{"name":"KW Rocketry SC-05 LFT","type":TYPES.LFO_TANK,"size":3,"cost":6480,"mass":1.79,"mass_fuel":16.2},
			{"name":"KW Rocketry SB-4 LFT","type":TYPES.LFO_TANK,"size":2,"cost":15360,"mass":4.24,"mass_fuel":38.400000000000006},
			{"name":"KW Rocketry LFTA 5-2","type":TYPES.LFO_TANK,"size":2,"cost":14055,"mass":3.9,"mass_fuel":35.1382},
			{"name":"KW Rocketry SB-2 LFT","type":TYPES.LFO_TANK,"size":2,"cost":7680,"mass":2.12,"mass_fuel":19.200000000000003},
			{"name":"KW Rocketry SB-4A LFT","type":TYPES.LFO_TANK,"size":2,"cost":15360,"mass":2.12,"mass_fuel":38.400000000000006},
			{"name":"KW Rocketry LFTA 3-2","type":TYPES.LFO_TANK,"size":2,"cost":6748,"mass":1.87,"mass_fuel":16.869875},
			{"name":"KW Rocketry SB-1 LFT","type":TYPES.LFO_TANK,"size":2,"cost":3840,"mass":1.06,"mass_fuel":9.600000000000001},
			{"name":"KW Rocketry LFTA 3-2 Short","type":TYPES.LFO_TANK,"size":2,"cost":3250,"mass":0.9,"mass_fuel":8.125155},
			{"name":"KW Rocketry SB-05 LFT","type":TYPES.LFO_TANK,"size":2,"cost":1920,"mass":0.53,"mass_fuel":4.800000000000001},
			{"name":"KW Rocketry SB-2 LFT","type":TYPES.LFO_TANK,"size":2,"cost":1920,"mass":0.5,"mass_fuel":4.5},
			{"name":"KW Rocketry LFTA 3-1","type":TYPES.LFO_TANK,"size":1,"cost":9439,"mass":2.6,"mass_fuel":23.596584999999997},
			{"name":"KW Rocketry LFTA 3-1 Short","type":TYPES.LFO_TANK,"size":1,"cost":4617,"mass":1.28,"mass_fuel":11.541615},
			{"name":"KW Rocketry LFTA 2-1","type":TYPES.LFO_TANK,"size":1,"cost":2478,"mass":0.68,"mass_fuel":6.195655},
			{"name":"KW Rocketry SA-4 LFT","type":TYPES.LFO_TANK,"size":1,"cost":1920,"mass":0.53,"mass_fuel":4.800000000000001},
			{"name":"KW Rocketry LFTA 2-1 Short","type":TYPES.LFO_TANK,"size":1,"cost":1140,"mass":0.316,"mass_fuel":2.85},
			{"name":"KW Rocketry SA-2 LFT","type":TYPES.LFO_TANK,"size":1,"cost":960,"mass":0.265,"mass_fuel":2.4000000000000004},
			{"name":"KW Rocketry SA-1 LFT","type":TYPES.LFO_TANK,"size":1,"cost":480,"mass":0.1325,"mass_fuel":1.2000000000000002},
			{"name":"KW Rocketry SA-05 LFT","type":TYPES.LFO_TANK,"size":1,"cost":240,"mass":0.0663,"mass_fuel":0.6000000000000001},
			{"name":"KW Rocketry SA-1 LFT","type":TYPES.LFO_TANK,"size":1,"cost":240,"mass":0.0625,"mass_fuel":0.5625},
			{"name":"KW Rocketry ST-37","type":TYPES.LFO_TANK,"size":3,"cost":43740,"mass":13.5,"mass_fuel":109.35},
			{"name":"KW Rocketry ST-25","type":TYPES.LFO_TANK,"size":2,"cost":5760,"mass":4,"mass_fuel":32.4},
			
			//Boosters
			{"name":"Large Ullage Motor","type":TYPES.BOOSTER,"size":3,"cost":250,"mass":0.45,"thrust":325,"isp_vac":220,"isp_atm":220,"gimbal":0.3,"mass_fuel":0.375,"last":true,"radial":true},
			{"name":"Globe X-10L \"Thor II\" SRB","type":TYPES.BOOSTER,"size":2,"cost":13900,"mass":6.5,"thrust":3015,"isp_vac":250,"isp_atm":230,"gimbal":0.5,"mass_fuel":79.6125},
			{"name":"Globe X-10S \"Thor II\" SRB","type":TYPES.BOOSTER,"size":2,"cost":10750,"mass":5,"thrust":2315,"isp_vac":250,"isp_atm":230,"gimbal":0.5,"mass_fuel":61.199999999999996},
			{"name":"Globe X-5 \"Thor\" SRB","type":TYPES.BOOSTER,"size":2,"cost":7350,"mass":3.5,"thrust":1590,"isp_vac":250,"isp_atm":230,"gimbal":0.3,"mass_fuel":42,"last":true,"radial":true},
			{"name":"1.25m SRB Nose Cone","type":TYPES.BOOSTER,"size":2,"cost":800,"mass":0.25,"thrust":10,"isp_vac":100,"isp_atm":100,"mass_fuel":0.03},
			{"name":"Globe X SRB","type":TYPES.BOOSTER,"size":1,"cost":1425,"mass":1.5,"thrust":614,"isp_vac":250,"isp_atm":230,"gimbal":0.3,"mass_fuel":8.1},
			{"name":"Globe X-2 SRB","type":TYPES.BOOSTER,"size":1,"cost":1880,"mass":1.5,"thrust":818,"isp_vac":250,"isp_atm":230,"gimbal":0.3,"mass_fuel":10.799999999999999},
			{"name":"Globe V SRB","type":TYPES.BOOSTER,"size":1,"cost":780,"mass":0.75,"thrust":372,"isp_vac":250,"isp_atm":230,"gimbal":0.2,"mass_fuel":4.5,"last":true,"radial":true},
			{"name":"Globe VI SRB","type":TYPES.BOOSTER,"size":1,"cost":1050,"mass":0.75,"thrust":495,"isp_vac":250,"isp_atm":230,"gimbal":0.2,"mass_fuel":6,"last":true,"radial":true},
			{"name":"Globe I SRB","type":TYPES.BOOSTER,"size":-1,"cost":230,"mass":0.3,"thrust":149,"isp_vac":250,"isp_atm":230,"gimbal":0.3,"mass_fuel":1.3125,"last":true,"radial":true},
			{"name":"Ullage Motor","type":TYPES.BOOSTER,"size":-1,"cost":50,"mass":0.25,"thrust":75,"isp_vac":250,"isp_atm":250,"gimbal":0.3,"mass_fuel":0.075,"last":true,"radial":true},
			
			//Decouplers
			{"name":"5m Expanded Fairing Base","type":TYPES.DECOUPLER,"size":4,"cost":4800,"mass":3.6,"ejection_force":1500},
			{"name":"5m Stack Decoupler","type":TYPES.DECOUPLER,"size":4,"cost":1000,"mass":3.6,"ejection_force":750},
			{"name":"5m Fairing Base","type":TYPES.DECOUPLER,"size":4,"cost":4000,"mass":3,"ejection_force":1500},
			{"name":"5m-3.75m Adapter Interstage","type":TYPES.DECOUPLER,"size":3,"cost":3000,"mass":3.75,"ejection_force":1500},
			{"name":"3.75m Fairing Base","type":TYPES.DECOUPLER,"size":3,"cost":2000,"mass":2,"ejection_force":1500},
			{"name":"3.75m Expanded Fairing Base","type":TYPES.DECOUPLER,"size":3,"cost":2400,"mass":2,"ejection_force":1500},
			{"name":"3.75m Stack Decoupler","type":TYPES.DECOUPLER,"size":3,"cost":750,"mass":2,"ejection_force":250},
			{"name":"2.5m Fairing Base","type":TYPES.DECOUPLER,"size":2,"cost":1000,"mass":1,"ejection_force":500},
			{"name":"2.5m Expanded Fairing Base","type":TYPES.DECOUPLER,"size":2,"cost":1200,"mass":1,"ejection_force":500},
			{"name":"3.75m-2.5m Adapter Interstage","type":TYPES.DECOUPLER,"size":2,"cost":1200,"mass":1,"ejection_force":1000},
			{"name":"2.5m Stack Decoupler","type":TYPES.DECOUPLER,"size":2,"cost":440,"mass":0.5,"ejection_force":250},
			{"name":"1.25m Stack Decoupler","type":TYPES.DECOUPLER,"size":1,"cost":250,"mass":0.25,"ejection_force":250},
			{"name":"1.25m Expanded Fairing Base","type":TYPES.DECOUPLER,"size":1,"cost":600,"mass":0.25,"ejection_force":100},
			{"name":"1.25m Fairing Base","type":TYPES.DECOUPLER,"size":1,"cost":500,"mass":0.25,"ejection_force":100}
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
