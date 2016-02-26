"use strict";

var Cylon = require("cylon");

// The voice for eSpeak can be specified all in one string, or as adaptor
// params. Both of the below connections will produce the same voice.
//
//  { adaptor: "speech", voice: "en-f3", speed: 120 }
//  { adaptor: "speech", language: "en, gender: "f", "voice: "1" },
//
// "speed" is the number of words per minute

Cylon.robot({
  connections: {
    speech: { adaptor: "speech" }
  },

  devices: {
    voice: { driver: "speech", voice: "en-f3", speed: 120 }
  },

  work: function(my) {
    my.voice.say("This is awesome!");
    my.voice.say("I'm a Cylon.JS robot, and I'm talking!");
  }
}).start();
