module.exports = function make(a) {
    let arr = [...arguments];

    return function makeClosure(a) {
        if (a instanceof Function) {
            return arr.reduce(a);
        }

        arr.push(...arguments);
        return makeClosure;
    };
};