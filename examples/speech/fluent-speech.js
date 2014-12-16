var Cylon = require('cylon');

// The voice for eSpeak can be specified all in one string, or as adaptor
// params. Both of the below connections will produce the same voice.
//
//  { adaptor: 'speech', voice: 'en-f3', speed: 120 }
//  { adaptor: 'speech', language: 'en, gender: 'f', 'voice: '1' },
//
// 'speed' is the number of words per minute

Cylon
  .robot()
  .connection("speech", { adaptor: 'speech', voice: 'en-f3', speed: 120 })
  .device("mouth", { driver: 'speech' })
  .on('ready', function(bot) {
    bot.mouth.say("This is awesome!");
    bot.mouth.say("I'm a Cylon.JS bot, and I'm talking!");
  });

Cylon.start();
