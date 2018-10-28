module.exports = function recursion(a) {
    treeToArray(a, 0);
    return arr;
}

let arr = [];

function treeToArray(a, level) {
    if (arr.length === level) {
        arr.push([]);
    }

    Object.keys(a).forEach(key => {
        if (key === 'value') {
            arr[level].push(a[key]);
        }
        if (key === 'left' || key === 'right') {
            treeToArray(a[key], level + 1);
        }
    })
}

