/*
 * cylon-speech driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

/*jslint node: true */
'use strict';

var Cylon = require('cylon');

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
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

Driver.prototype.say = function(text, cb) {
  this.connection.say(text, cb);
};
