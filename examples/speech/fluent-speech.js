"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("speech", { adaptor: "speech" })
  .device("voice", { driver: "speech", voice: "en+f3", speed: 120 })
  .on("ready", function(bot) {
    bot.voice.say("I'm a Cylon.JS robot, and I'm talking!");
  });

Cylon.start();
