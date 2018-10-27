const assert = require('assert');
const sumOfOther = require('./sum-of-other.js');
const make = require('./make.js');

describe('sum of other', () => {
    it('1', () => {
        const result = sumOfOther([1, 3, 4]);
        assert.deepEqual(result, [7, 5, 4]);
    });
    it('2', () => {
        const result = sumOfOther([24, 56, 78, 60, 3, 4]);
        assert.deepEqual(result, [201, 169, 147, 165, 222, 221]);
    });
});

describe('make', () => {
    it('1', () => {
        const sum = ((a, b) => a + b);
        const result = make(5, 8)(8, 5, 1)(9)(sum);
        assert.equal(result, 36);
    });
    it('2', () => {
        const mul = ((a, b) => a * b);
        const result = make(5, 8)(8, 5, 1)(9)(mul);
        assert.equal(result, 14400);
    });
  
});