module.exports = function sumOfOther(a) {
    const sum = a.reduce((accum, current) => accum + current);

    return a.map(elem => sum - elem);
}


