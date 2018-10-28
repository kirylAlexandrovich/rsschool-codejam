let assert = require('assert');
let sumOfOther = require('./sum-of-other.js');
let make = require('./make.js');
let recursion = require('./recursion.js');

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

describe('recursion', () => {
    it('1', () => {
        const result = recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
        assert.deepEqual(result, [ [ 100 ], [ 90, 120 ], [ 70, 99, 110, 130 ] ]);
    });
});