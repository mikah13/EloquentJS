# Chapter 1
## Values, types, and operators

### Special Numbers
- There are three special values in Javascripts
  - Infinity
  - -Infinity
  - NaN

Note: Infinity - 1 is still Infinity

### Empty Values
- null
- undefined

There is no real difference between these two types

### Automatic Type Conversion
<b>Type coercion</b>: When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect.
Example:
```
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
```

To be safe, use === when comparing values/objects


<b>Short Circuit</b>: When one of the comparision was enough to determine the outcome of condition the rest will be ignored 