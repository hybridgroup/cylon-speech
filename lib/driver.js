/*
 * cylon-speech driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014-2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

/*jslint node: true */
"use strict";

var Cylon = require("cylon");
var LANGUAGES = require("./languages");

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);

  opts = opts || {};
  this.voice = this._findVoice(opts);
  this.speed = opts.speed || 120;

  this.commands = {
    say: this.say
  };
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};

/**
 * Speaks the provided text
 *
 * @param {String} text text to say
 * @param {Function} callback function to be called when done
 * @return {void}
 * @publish
 */
Driver.prototype.say = function(text, callback) {
  this.connection.say(text, this.voice, this.speed, callback);
};

Driver.prototype._findVoice = function(opts) {
  if (opts.voice) {
    return opts.voice;
  }

  var lang = LANGUAGES[opts.language] || "en",
      variant = opts.variant || "1",
      gender = opts.gender || "f";

  return lang + "+" + gender + variant;
};
