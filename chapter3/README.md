# Chapter 3
## Functions

### Bindings and scopes
- Global: defined outside of any function or block
- Local: Declared inside a function. Can be referenced only in that function

Bindings declared with let and const are in fact local to the block

### Optional Arguments
JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined.
```
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```

Default value for an argument
```
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```

### Closure
<b>#Definej</b>: The ability to treat functions as values

```
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

EXERCISE CODE:
```
//Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
    return Math.min(a, b);
}

// Check if a number is Even
function isEven(n) {
    n = Math.abs(n);
    if (n === 0) {
        return true;
    }
    if (n === 1) {
        return false;
    }

    n = n - 2;
    return isEven(n);
}

// Count char in a string
function countBs(str) {
    return str.split('').filter(e => e === 'B').length;
}

function countChar(str, chr) {
    return str.split('').filter(e => e === chr).length;
}
```