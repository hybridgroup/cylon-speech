"use strict";

var speech = lib("../");

var Adaptor = lib("adaptor"),
    Driver = lib("driver");

describe("Cylon.Speech", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(speech.adaptors).to.be.eql(["speech"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(speech.drivers).to.be.eql(["speech"]);
    });
  });

  describe("#driver", function() {
    it("returns an instance of the Driver", function() {
      var args = { adaptor: {} };
      expect(speech.driver(args)).to.be.instanceOf(Driver);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(speech.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
