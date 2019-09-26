const assert = require('assert')
const add = require('./add');

describe("add", () => {
  it("Get sum of numbers", () => {
    assert.equal(sum(1, 2, 3), 6)
    assert.equal(sum(1, 2), 3)
    assert.equal(sum(0, 2), 2)
    assert.equal(sum(1), 1)
  });
});