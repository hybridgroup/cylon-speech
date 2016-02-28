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

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);

  opts = opts || {};
  this.voice = opts.voice;
  this.language = opts.language || "en";
  this.gender = opts.gender || "f";
  this.variant = opts.variant || "1";
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
  this.connection.say(text, this._findVoice(), this.speed, callback);
};

Driver.prototype._findVoice = function() {
  if (this.voice) {
    return this.voice;
  }

  var lang = this.connection.languages()[this.language],
      variant = this.variant,
      gender = this.gender;

  return lang + "+" + gender + variant;
};
