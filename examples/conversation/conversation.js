"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    speech: { adaptor: "speech" }
  },

  devices: {
    voice1: { driver: "speech", voice: "en-f3", speed: 130 },
    voice2: { driver: "speech", voice: "en-m2", speed: 120 }
  },

  work: function(my) {
    my.voice1.say("Make me a sandwich", function() {
      my.voice2.say("What did you say?", function() {
        my.voice1.say("sudo make me a sandwich", function() {
          my.voice2.say("OK, you are a sandwich");
        });
      });
    });
  }
}).start();
