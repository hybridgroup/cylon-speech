# Cylon.js For Speech

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for Speech.

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon

## Getting Started

Install the module with: `npm install cylon-speech`

After the module has been installed but before you run the example
make sure `espeak` package is installed and works on your computer or
SBC(Single Board Computer), there are packages available for Linux,
Mac and Windows.

## How to install espeak

### On Linux

On most newer distros there is already a package easy to install for
your convenience, on distros using Aptitude Package Manager (AKA: apt-get),
just run:

```bash
$ sudo apt-get install espeak
```

This is also true for SBCs like the Raspberry-Pi and the Beaglebone Black.

Once the package has finished installing try this command to verify everything
is working as expected:

```bash
$ espeak "This is awesome, Linux the best OS speaking"
```

If you can hear the text you passed to the `espeak` command talked back to you then
you are good to go. Otherwise refer to the speak docs in (espeak.sourceforge.net)[http://espeak.sourceforge.net/commands.html]
for further details and debuggin the instalation.


### On Mac

Make sure to download and uncompress the approtiate version (here)[http://espeak.sourceforge.net/download.html], same as
with linux after installing make sure it works as expected with:

```bash
$ espeak "This is awesome, Mac OS speaking!"
```

### On Windows

For Windows systems there is a `.exe` file you can download in (espeak.sourceforge.net/download)[http://espeak.sourceforge.net/download.html].

Same as with the above operating systems, make sure it works as advertized when the instalation has completed.

```bash
$ espeak "This is awesome, Windows OS speaking!"
```
## Examples
```javascript
var Cylon = require('cylon');

Cylon.robot({
  // voice for espeak can be specified either in one string or as params for the adaptor.
  // both connections below will reproduce with the same voice.
  // connection: { name: 'speech', adaptor: 'speech', language: 'en, gender: 'f', 'voice: '3' },
  connection: { name: 'speech', adaptor: 'speech', voice: 'en-f3', speed: 130 },
  device: {name: 'mouth', driver: 'speech'},

  work: function(my) {
    my.mouth.say("This is awesome!");
    my.mouth.say("I'm a Cylon.JS robot, and I'm talking!");
  }
}).start();    
```
## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using `make test` and `make lint`.

## Release History

None yet...

## License

Copyright (c) 2014 Your Name Here. See `LICENSE` for more details
