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
  this.voice = this._findVoice(opts);

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
  this.connection.say(text, this.voice, callback);
};

var VOICES = {
  "en-m1": "en+m1",
  "en-m2": "en+m3",
  "en-m3": "en+m3",
  "en-m4": "en+m4",
  "en-m5": "en+m5",
  "en-f1": "en+f1",
  "en-f2": "en+f2",
  "en-f3": "en+f3",
  "en-f4": "en+f4",
  "en-f5": "en+f5",
  "es-m1": "es+m1",
  "es-m2": "es+m2",
  "es-m3": "es+m3",
  "es-m4": "es+m4",
  "es-m5": "es+m5",
  "es-f1": "es+f1",
  "es-f2": "es+f2",
  "es-f3": "es+f3",
  "es-f4": "es+f4",
  "es-f5": "es+f5"
};

Driver.prototype._findVoice = function(opts) {
  var lang = opts.language,
      voice = opts.voice,
      gender = opts.gender,
      voiceArg = null;

  if ((voice != null) && (lang != null) && (gender != null)) {
    lang = lang;
    gender = gender;
    voiceArg = VOICES[lang + "-" + gender + voice];
    return voiceArg || "en+m1";
  }

  voiceArg = VOICES[voice || "en-m1"];

  return voiceArg || voice;
};
