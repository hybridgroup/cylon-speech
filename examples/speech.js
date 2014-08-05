var Cylon = require('cylon');

Cylon.robot({
  // voice for espeak can be specified either in one string or as params for the adaptor.
  // both connections below will reproduce with the same voice.
  // connection: { name: 'speech', adaptor: 'speech', language: 'en, gender: 'f', 'voice: '1' },
  // speed: number of words per minute.
  connection: { name: 'speech', adaptor: 'speech', voice: 'en-f3', speed: 120 },
  device: {name: 'mouth', driver: 'speech'},

  work: function(my) {
    my.mouth.say("This is awesome!");
    my.mouth.say("I'm a Cylon.JS robot, and I'm talking!");
  }
}).start();
