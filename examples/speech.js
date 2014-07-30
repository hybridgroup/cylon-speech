var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'speech', adaptor: 'speech' },
  device: {name: 'mouth', driver: 'speech'},

  work: function(my) {
    my.mouth.say("This is awesome!");
    my.mouth.say("I'm a Cylon.JS robot, and I'm talking!");
  }
}).start();
