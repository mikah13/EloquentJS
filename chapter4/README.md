# Chapter 4
## Data structures: Objects and arrays

### Mutability
- Object values can be modified
- Values are all immutable: it is impossible to change values of those types
- We can't change const object, but we can change object property
```
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};
```
- Comparing different objects will return false, even if they have identical properties. 

### Array Loops:
- classic for loop:
```
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
```
- for of loop:
```
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```

### Rest Parameters:
- The goal is to have a function that can accept any number of arguments. To write such a function, you put three dots before the function’s last parameter, like this:
```
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```
- You can use a similar three-dot notation to call a function with an array of arguments
```
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
```

Or

```
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]
```

### Destructuring
Our original function
```
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
```

One of the reasons this function is awkward to read is that we have a binding pointing at our array, but we’d much prefer to have bindings for the elements of the array, that is, let n00 = table[0] and so on. 

Here is the solution

```
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}

```

EXERCISE CODE:
```
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
```