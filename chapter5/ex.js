/**
 * Use the reduce method in combination with the concat
 *  method to “flatten” an array of arrays into a 
 * single array that has all the elements of the 
 * original arrays.
 */

let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];

function flatten(array) {
    return array.reduce((acc, cur) => {
        cur.forEach(element => {
            acc.push(element);
        });
        return acc;
    }, [])
}


/**
 * Write a higher-order function loop that provides something
 *  like a for loop statement. It takes a value, a test 
 * function, an update function, and a body function.
 *  Each iteration, it first runs the test function on 
 * the current loop value and stops if that returns false. 
 * Then it calls the body function, giving it the current
 *  value. Finally, it calls the update function to create
 *  a new value and starts from the beginning.
 */
function loop(val, condition, update, body) {
    if (condition(val)) {
        body(val);
        val = update(val);
        loop(val, condition, update, body);
    }
}

/**
 * Analogous to the some method, arrays also have an every
 *  method. This one returns true when the given function 
 * returns true for every element in the array.
 */

function every(array, test) {
    for (let el of array) {
        if (!test(el)) {
            return false;
        }
    }
    return true;
}

function every(array, test) {
    return !array.some(el => {
        return !test(el);
    });
}

/**
 * Write a function that computes the dominant
 *  writing direction in a string of text. Remember
 *  that each script object has a direction property
 *  that can be "ltr" (left to right), "rtl" (right to left),
 *  or "ttb" (top to bottom).
 */