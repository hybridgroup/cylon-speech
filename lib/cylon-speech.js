/*
 * cylon-speech
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Your License Here
*/

'use strict';

var Adaptor = require('./adaptor'),
    Driver = require('./driver');

module.exports = {
  adaptors: ['speech'],
  drivers: ['speech'],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  }
};
