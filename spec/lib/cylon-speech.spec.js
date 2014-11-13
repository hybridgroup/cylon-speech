"use strict";

var module = source("cylon-speech");

var Adaptor = source('adaptor'),
    Driver = source('driver');

describe("Cylon.Speech", function() {
  describe("#adaptors", function() {
    it('is an array of supplied adaptors', function() {
      expect(module.adaptors).to.be.eql(['speech']);
    });
  });

  describe("#drivers", function() {
    it('is an array of supplied drivers', function() {
      expect(module.drivers).to.be.eql(['speech']);
    });
  });

  describe("#driver", function() {
    it("returns an instance of the Driver", function() {
      var args = { adaptor: {} };
      expect(module.driver(args)).to.be.instanceOf(Driver);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(module.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
