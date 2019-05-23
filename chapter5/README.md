# Chapter 5
## Higher-order functions

### Abstraction:
<b>Definition</b>: Hide details and give us the ability to talk about problem at a higher level


### Higher-order function
<b>Definition</b>: Functions that operate on other functions, either by taking them as arguments or by returning them.\

```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

### Summary
Being able to pass function values to other functions is a deeply useful aspect of JavaScript. It allows us to write functions that model computations with “gaps” in them. The code that calls these functions can fill in the gaps by providing function values.


EXERCISE CODE:
```
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
// Generated from the Unicode 10 database and https://en.wikipedia.org/wiki/Script_(Unicode)

// This makes sure the data is exported in node.js —
// `require('./path/to/scripts.js')` will get you the array.
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
    module.exports = SCRIPTS;
if (typeof global != "undefined" && !global.SCRIPTS)
    global.SCRIPTS = SCRIPTS;

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
                return code >= from && code < to;
            })) {
            return script;
        }
    }
    return null;
}

function dominantDirection(text) {
    let obj = {};
    obj.ltr = 0;
    obj.rtl = 0;
    obj.ttb = 0;
    text.split('').forEach((c, i) => {
        let script = characterScript(text.charCodeAt(i));
        if (script) {
            let direction = characterScript(text.charCodeAt(i)).direction;
            obj[direction]++;
        }

    })

    return getMax(obj);

}

function getMax(obj) {
    let max = 0;
    let dir = '';
    for (let prop in obj) {
        if (obj[prop] > max) {
            max = obj[prop];
            dir = prop;
        }
    }
    return dir;
}
console.log(dominantDirection("Hey, مساء الخير"));
```