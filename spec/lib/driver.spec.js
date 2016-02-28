"use strict";

var Speech = lib("driver");

describe("Cylon.Drivers.Speech", function() {
  var driver = new Speech({
    connection: {
      languages: function() {
        return { english: "en", spanish: "es" };
      }
    }
  });

  it("needs tests", function() {
    expect(driver).to.be.an.instanceOf(Speech);
  });
});
