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


