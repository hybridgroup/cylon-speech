// jshint expr:true
"use strict";

var Speech = source("driver");

describe("Cylon.Drivers.Speech", function() {
  var driver = new Speech({
    connection: {}
  });

  it("needs tests", function() {
    expect(driver).to.be.an.instanceOf(Speech);
  });
});
