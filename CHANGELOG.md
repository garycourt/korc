**Version 1.15 - October 14, 2014**
* Updated parts for KSP 0.25.
* Non-round parts are not selected by default.

**Version 1.14 - August 10, 2014**
* Added option to force each stage to have a gimbaling (thrust vectoring) engine.

**Version 1.13 - August 9, 2014**
* Created part_parser for parsing part files and generating part lists for kspcalc.js.
* Updated all parts to their latest version using part_parser.

**Version 1.12 - August 5, 2014**
* Updated parts for KSP 0.24.2 (by pee8379)

**Version 1.11.1 - May 27, 2014**
* Performance improvement (by Apexo).

**Version 1.11 - April 1, 2014**
* Updated and added new parts from KSP 0.23.5.
* Disabled LFB KR-1x2 until code can support liquid boosters.

**Version 1.10 - February 13, 2014**
* Added option to allow equal tank sizes to be bigger then the engines.
* Fixed Delta-V unit typo.
* Fixed single stacks from being created under an Aerospike Rocket (as KSP 0.23 doesn't allow this).
* Fixed bug where single stack rockets would have clustered engines.

**Version 1.9 - February 5, 2014**
* Added KW Rocketry 2.5.6 pack.
* Fixed bug "Last stage must be a single stack" not working.
* Fixed bug with stack decouplers being the wrong size when radial tanks are used.

**Version 1.8 - February 5, 2014**
* Performance improvements.
* Now displays payload fraction.
* Changed max symmetry to maximum number of stacks.
* Stack multiplier is now easier to read.
* Changed default settings.

**Version 1.7 - January 30, 2014**
* Added engine clustering to search.
* Added branch parts from Stock.
* Added min/max burn time restriction.
* Added maximum mass restriction.
* Added maximum part count restriction.
* Added KSPX 0.2.5 pack.
* Now outputs just the parts in a stack, with a separate multiplier on how many stacks are required.
* Fixed bug with decoupler size matching.

**Version 1.6 - January 13, 2014**
* Added time to finish stage to results.

**Version 1.5 - January 8, 2014**
* Added Part Count optimization, with a secondary optimization criteria.
* Added field for changing the maximum amount of symmetry allowed per stack.
* Added option for forcing the last stage to be a single stack.
* Added option for forcing all tanks & stack decouplers in a stage to be the same size.
* Added option for forcing all tanks & stack decouplers in a stage to be the same size as the engines (except radial engines).
* Added additional summary fields to the header of search results.
* Small visual change to search results.
* Added part sizes to Stock parts data.
* Fixed symmetry issues with multiple stages of radial parts. Makes rockets much easier to build.

**Version 1.4 - January 7, 2014**
* Added max thrust-to-weight ratio field.
* Added separate valid/invalid design count.
* Added preliminary part count code.
* Added link to asparagus definition.
* Fixed Fuel Ducts to have no mass.

**Version 1.3 - January 6, 2014**
* Fixed Isp conversion factor.
* Stages are now allowed to have no LF/O engines in an asparagus setup.

**Version 1.2 - January 6, 2014**
* Added asparagus indicator to staging output.
* Performance improvement.
* Added link to changelog.

**Version 1.1 - January 6, 2014**
* Added option for adding a decoupler between the payload.
* Changed masses to use metric tons.
* Changed internal thrust values to use kN.
* Fixed gravity of Kerbin. (facepalm)
* Fixed bug where small payloads would not get the most efficient setup.

**Version 1.0 - January 5, 2014**
* Initial release.