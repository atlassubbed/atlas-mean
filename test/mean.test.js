const { describe, it } = require("mocha")
const { expect } = require("chai")
const mean = require("../src/mean")

describe("mean", function(){
  it("should calculate the expectation value of the array", function(){
    expect(mean([1,2,3,4,5,6,7,8,9,10])).to.equal(5.5)
  })
})
