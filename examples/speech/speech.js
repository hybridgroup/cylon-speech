"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    speech: { adaptor: "speech" }
  },

  devices: {
    voice: { driver: "speech", voice: "en+f3", speed: 120 }
  },

  work: function(my) {
    my.voice.say("I'm a Cylon.JS robot, and I'm talking!");
  }
}).start();
