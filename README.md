# Cylon.js For Speech

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and physical computing using Node.js.

This module provides an adaptor/driver for text to speech based on eSpeak (https://en.wikipedia.org/wiki/ESpeak).

For more information about Cylon, check out the repo at https://github.com/hybridgroup/cylon

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-speech.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-speech) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-speech/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-speech) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-speech/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-speech)

## How to Install

Install the module via NPM:

    $ npm install cylon cylon-speech

After the module is installed, but before you run any scripts using it, ensure the `espeak` utility is installed on your computer.

There are packages available for Linux, OS X, and Windows.

### Linux

On most Linux distros, there should already be a package you can install.
If you use Aptitude Package Manager (apt-get), just install it with:

    $ sudo apt-get install espeak

This is also true for Single-Board Linux Computers like the Raspberry-Pi and the Beaglebone Black.

Once the package has finished installing, try this command to verify everything is working as expected:

    $ espeak "This is awesome, Linux speaking"

If you hear your computer talking to you, everything is working as expected.
If not, please refer to the [espeak docs](http://espeak.sourceforge.net/commands.html) for more help.

### OS X

Install espeak through Homebrew.

    $ brew install espeak

After installing, test it out:

    $ espeak "This is awesome, OS X speaking"

### On Windows

For Windows systems there is a `.exe` file you can download from [SourceForge](http://espeak.sourceforge.net/download.html).

Same as with the above operating systems, make sure it works as advertized when the instalation has completed.

    $ espeak "This is awesome, Windows OS speaking!"

## How to Use

```javascript
var Cylon = require("cylon");

Cylon.robot({
  connections: {
    speech: { adaptor: "speech"}
  },

  devices: {
    voice: { driver: "speech", voice: "en+f3" }
  },

  work: function(my) {
    my.voice.say("I'm a Cylon.JS robot, and I'm talking!");
  }
}).start();
```

## Voice Options

You can choose which voice to use for the speech synthesizer, by passing parameters to the driver.

This example uses an "English" dictionary, with a "female" voice register that is the 3rd voice option variant out of 5, at a speed of 130 words per minute:

```
devices: {
  voice: {
    driver: "speech"
    language: "english",
    gender: "f",
    variant: "3",
    speed: 130
  }
}
```

Here is a shorter way to specify the same voice as above:

```
devices: {
  voice1: {
    voice: "en+f3", speed: 130
  }
}
```

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-speech/blob/master/RELEASES.md](https://github.com/hybridgroup/cylon-speech/blob/master/RELEASES.md).

## License

Copyright (c) 2014-2016 The Hybrid Group. Licensed under the Apache 2.0 license.
