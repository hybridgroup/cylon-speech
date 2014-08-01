/*
 * cylon-speech driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.commands = ['say'];

Driver.prototype.start = function(callback) {
  Driver.__super__.start.apply(this, arguments);
};

Driver.prototype.say = function(text, cb) {
  this.connection.say(text, cb);
};
