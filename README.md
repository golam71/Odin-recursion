# JS Algorithms: Merge Sort & Fibonacci

This small JavaScript project includes a simple implementation of merge sort and two ways to generate Fibonacci numbers. It's meant to be easy to read, tweak, and learn from. Everything here is in the public domain—use it however you like.

## What’s Inside

- A basic recursive merge sort: `mergeShort(array)`
- An iterative Fibonacci generator: `fib(n)`
- A recursive Fibonacci version with simple caching: `fibRecursive(n)`

## mergeShort(array)

This function sorts an array using the merge sort technique. It splits the array into halves, sorts each half, and then merges them back together in order.

### How it works

- If the array is empty or has one item, it's already sorted.
- If it has two items, we just compare and swap them if needed.
- For longer arrays, it keeps splitting in half until it gets to size 1 or 2.
- Then it merges sorted pieces together using a helper function called `merge`.

### Example

```js
let array = [3, 2, 1, 13, 8, 18, 34];
console.log(mergeShort(array));
// Output: [1, 2, 3, 8, 13, 18, 34]
```

## fib(n)

This is a straightforward, loop-based Fibonacci number generator. It gives you the first `n` numbers in the sequence.

### How it works

- Starts with 0 and 1.
- Adds up the last two numbers repeatedly until it hits `n` items.

### Example

```js
console.log(fib(8));
// Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

## fibRecursive(n)

This one generates Fibonacci numbers using recursion, but with a twist—it remembers previous results in an array attached to the function itself.

### How it works

- The first time you call it, it sets up a static array `[0, 1]`.
- Then it keeps calculating and storing the next numbers until the array has `n` items.
- This avoids recalculating the same values again and again.

**Note:** Since the array is stored on the function, it keeps its state across calls unless you reset it manually.

### Example

```js
console.log(fibRecursive(8));
// Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

## License

This code is released into the public domain under [The Unlicense](https://unlicense.org). That means you can use it for anything—personal, educational, or commercial—without asking for permission or giving credit.
