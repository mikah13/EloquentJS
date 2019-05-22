// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end


function range(start, end, step = 1) {

    let max = Math.max(start, end);
    let min = Math.min(start, end);
    let length = max - min + 1;
    let array = new Array(length).fill('').map((e, i) => min + i);
    let result = [];
    for (let i = 0; i < length; i += Math.abs(step)) {
        result.push(array[i])
    }
    return step >= 0 ? result : result.reverse();
}

function sum(array) {
    return array.reduce((acc, cur) => acc + cur);
}

//The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
function reverseArray(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        swap(array, i, array.length - 1 - i);
    }
}

function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}


function arrayToList(array) {
    if (array.length < 1) {
        return null;
    }
    if (array.length === 1) {
        return { value: array[0], rest: null }
    }
    let shiftedArray = array.filter((e, i) => i !== 0);
    return { value: array[0], rest: arrayToList(shiftedArray) };
}

function listToArray(object) {

    let array = [];
    if (!object) {
        return array;
    }
    array.push(object.value);
    if (object.rest === null) {

        return array;
    }
    return array.concat(listToArray(object.rest));
}

function prepend(val, obj) {
    return { value: val, rest: obj };
}

function nth(list, index) {

    if (index < 0) {
        return undefined;
    }
    if (index === 0) {
        return list.value;
    }
    if (!list.rest) {
        return undefined;
    }
    return nth(list.rest, index - 1);
}

// Deep Comparision

function deepEqual(a, b) {
    if (areSameType(a, b)) {
        if (typeof a !== 'object') {
            return a === b;
        }
        for (let val in a) {
            let check = deepEqual(a[val], b[val]);
            if (!check) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function areSameType(a, b) {
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && !b || !a && b) {
        return false;
    }
    return true;
}

// Your code here.

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true