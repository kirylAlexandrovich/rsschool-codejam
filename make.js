module.exports = function make(a) {

    const arr = [...arguments];

    return function makeClosure(a) {

        if (a instanceof Function) {
            return arr.reduce(a);
        }
        arr.push(...arguments);
        return makeClosure;
    };
};