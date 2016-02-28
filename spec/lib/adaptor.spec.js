"use strict";

var Speech = lib("adaptor");

describe("Cylon.Adaptors.Speech", function() {
  var adaptor = new Speech();

  it("returns valid #languages", function() {
    expect(adaptor.languages()).to.have.property("english");
    expect(adaptor.languages()).to.have.property("spanish");
    expect(adaptor.languages()).to.have.property("mandarin");
  });
});
