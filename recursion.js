function fib(n) {
  let x = 0;
  let y = 1;
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(x);
    [x, y] = [y, x + y];
  }
  return result;
}

function fibRecursive(n) {
  if (!fibRecursive.array) fibRecursive.array = [0, 1];
  if (fibRecursive.array.length === n) {
    return fibRecursive.array;
  }
  fibRecursive.array.push(
    fibRecursive.array.at(-1) + fibRecursive.array.at(-2)
  );
  return fibRecursive(n);
}

console.log(fib(8));
console.log(fibRecursive(8));
