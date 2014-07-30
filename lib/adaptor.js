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

var VOICES = {
  'en-m1': 'en+m1',
  'en-m2': 'en+m3',
  'en-m3': 'en+m3',
  'en-m4': 'en+m4',
  'en-m5': 'en+m5',
  'en-f1': 'en+f1',
  'en-f2': 'en+f2',
  'en-f3': 'en+f3',
  'en-f4': 'en+f4',
  'en-f5': 'en+f5',
  'es-m1': 'es+m1',
  'es-m2': 'es+m2',
  'es-m3': 'es+m3',
  'es-m4': 'es+m4',
  'es-m5': 'es+m5',
  'es-f1': 'es+f1',
  'es-f2': 'es+f2',
  'es-f3': 'es+f3',
  'es-f4': 'es+f4',
  'es-f5': 'es+f5'
};

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }

  this.voice = this._findVoice(opts.extraParams);

  Adaptor.__super__.constructor.apply(this, arguments);
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ['say'];

Adaptor.prototype.connect = function(callback) {
  this.espeak = spawn('espeak', ['-s 130', '-v' + this.voice]);

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

Adaptor.prototype._findVoice = function(extraParams){
  var lang = extraParams.language,
      voice = extraParams.voice,
      gender = extraParams.gender,
      voiceArg = null;

  if ((voice != null) && (lang != null) && (gender != null)){
    lang = lang;
    gender = gender;
    voiceArg = VOICES[lang + '-' + gender + voice];
    return(voiceKey || 'en+m1');
  }

  voiceArg = VOICES[voice || 'en-m1'];

  return(voiceArg || voice);
};
