"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("speech", { adaptor: "speech" })
  .device("voice1", { driver: "speech", voice: "en-f3", speed: 130 })
  .device("voice2", { driver: "speech", voice: "en-m2", speed: 120 })
  .on("ready", function(bot) {
    bot.voice1.say("Make me a sandwich", function() {
      bot.voice2.say("What did you say?", function() {
        bot.voice1.say("sudo make me a sandwich", function() {
          bot.voice2.say("OK, you are a sandwich");
        });
      });
    });
  });

Cylon.start();
