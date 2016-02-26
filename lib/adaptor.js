/*
 * cylon-speech adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014-2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var spawn = require("child_process").spawn;

var Adaptor = module.exports = function Adaptor() {
  Adaptor.__super__.constructor.apply(this, arguments);
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ["say"];

Adaptor.prototype.connect = function(callback) {
  callback();
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};

/**
 * Speaks the provided text
 *
 * @param {String} text text to say
 * @param {String} voice options for voice
 * @param {Function} callback callback to be invoked when done
 * @return {void}
 * @publish
 */
Adaptor.prototype.say = function(text, voice, callback) {
  this.espeak = spawn("espeak", ["-s 130", "-v" + voice]);

  this.espeak.stderr.on("data", function(err) {
    console.log("stderr:", err);
  });

  this.espeak.stdin.on("error", function(err) {
    console.log("stdin.error:", err);

    if (err.code === "EPIPE") {
      return;
    }

    throw err;
  });

  this.espeak.on("close", function(data) {
    console.log("espeak process exited with:", data);
    this.emit("finished");
  }.bind(this));

  this.espeak.stdin.end(text + "\n", null, callback);
};
