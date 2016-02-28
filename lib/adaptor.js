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
var LANGUAGES = require("./languages");

var Adaptor = module.exports = function Adaptor() {
  Adaptor.__super__.constructor.apply(this, arguments);
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ["say", "languages"];

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
 * @param {Number} speed speed of voice
 * @param {Function} callback callback to be invoked when done
 * @return {void}
 * @publish
 */
Adaptor.prototype.say = function(text, voice, speed, callback) {
  this.espeak = spawn("espeak", ["-s", speed, "-v", voice, text]);

  this.espeak.stderr.on("data", function(err) {
    Cylon.Logger.log("espeak error:", err);
  });

  this.espeak.stdin.on("error", function(err) {
    Cylon.Logger.log("espeak error:", err);

    if (err.code === "EPIPE") {
      return;
    }

    throw err;
  });

  this.espeak.on("close", function() {
    this.emit("finished");
    if (typeof callback === "function") {
      callback();
    }
  }.bind(this));
};

/**
 * Returns hash with all of the currently supported languages
 *
 * @return {Object} languages that are currently supported
 * @publish
 */
Adaptor.prototype.languages = function() {
  return LANGUAGES;
};
