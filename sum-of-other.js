module.exports = function sumOfOther(a) {
    let sum = a.reduce((accum, current) => accum + current);

    return a.map(elem => sum - elem);
}


