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

