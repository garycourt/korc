# Optimal Rocket Calculator for Kerbal Space Program

This tool calculates the most mass/cost efficient rocket possible, with the given requirements and parts available, in Kerbal Space Program.

## How To Use

Open index.html in a modern web browser.

1. Enter the mass (in metric tons) of the payload you are trying to move.
2. Enter the minimum amount of Delta-V you need to accelerate it.
3. If you are launching your payload from a planet, select the planet, or enter the force of gravity at your launch point.
4. Select which parts you have unlocked, or mods you have installed.
5. Hit search and watch the result come in!

If your rocket has more then one stage, you will see a list of possible designs at the bottom of the page, ordered by most to least efficient.
The program will constantly keep generating new designs, and displays only the top 20 most efficient ones. You can hit stop at any time if you see one you like.

Now that you've figured it out, there are many more other constraints you can configure:

* What metric you would like to optimize your rocket for.
* The minimum (and optionally, maximum) thrust-to-weight ratio you need all stages of the rocket to produce. 
  Remember that this must be greater then 1 to leave the surface of your selected planet. This field has no affect if there is no gravity.
* The maximum number of stages you want your rocket to have.
  Keep this number low as it increases the calculation times exponentially.
* If you would like your rocket to use asparagus staging (all engines fire at once, fuel is taken from outer stages first). This always produces lighter rockets and the cost of greater complexity.
* Have all calculations use the engine's atmospheric stats. This is not normally needed as most delta-V cheat sheets use vacuum stats.
* And many more!

Be aware that this program runs locally in your web browser, and will max out your CPU while running. Don't forget to click "Stop" before switching back to Kerbal Space Program!

If you are getting wildly different numbers in Kerbal Engineer, it's likely that you've enabled Atmospheric Stats in one tool and not the other. Or else you've messed up your staging.

## Roadmap

* Support parallel staging (all stages fire at same time)
* Add option for adding size adapters
* Add option to ensure stage 1 has thrust vectoring
* Serialize and output arguments used (for debugging)
* Output stats of parts in the parts list (for debugging)
* Add parts from other mods

## Support This Project

Find this tool useful? Like to see it continually supported?

I am a self-employed software developer who built this in my free time. 
Unfortunately, I can't work on stuff like this all the time as I have to make money to eat and live. 
With your support, I can continue working on this and other great tools for Kerbal Space Program that everyone can benefit from!

Please click the "Donate" link on the web app to support this project! Thanks!

## License

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