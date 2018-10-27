const assert = require('assert');
const sumOfOther = require('./sum-of-other.js');

describe('sum of other', () => {
  it('1', () => {
    const result = sumOfOther([1, 3, 4]);
    assert.deepEqual(result, [7, 5, 4]);
  });
  it('1', () => {
    const result = sumOfOther([24, 56, 78, 60, 3, 4]);
    assert.deepEqual(result, [201, 169, 147, 165, 222, 221]);
  });
});