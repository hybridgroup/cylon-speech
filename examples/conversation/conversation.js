"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    speech: { adaptor: "speech" }
  },

  devices: {
    voice1: { driver: "speech", language: "american", gender: "f", speed: 120 },
    voice2: { driver: "speech", language: "english", gender: "m", speed: 130 }
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
