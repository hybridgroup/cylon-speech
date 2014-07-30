/*
 * cylon-speech adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var spawn = require('child_process').spawn;

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }

  Adaptor.__super__.constructor.apply(this, arguments);
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ['say'];

Adaptor.prototype.connect = function(callback) {
  this.espeak = spawn('espeak', '-s 100');

  this.espeak.stderr.on('data', function(err){
    console.log('stderr:', err);
  });

  this.espeak.stdin.on('error', function(err){
    console.log('stdin.error:', err);
    if (err.code === 'EPIPE') return;
    throw err;
  });

  this.espeak.on('close', function(data){
    console.log('espeak process exited with:', data);
  });

  Adaptor.__super__.connect.apply(this, arguments);
};

Adaptor.prototype.disconnect = function(text, callback){
  this.espeak.stdin.end('\n');
};

Adaptor.prototype.say = function(text, callback){
  this.espeak.stdin.write(text + '\n', null, callback);
};
