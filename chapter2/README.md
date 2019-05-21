# CHAPTER 2
## Program Structure

### Bindings
- We can declare variables using:
  - let
  - var
  - const

### Binding names
- A binding name must not start with a digit
- A binding name may include $ or _
- A binding name can't be the same as reserved keywords

### Breaking out of a loop
- Use break; to get out of a loop
```
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
```
