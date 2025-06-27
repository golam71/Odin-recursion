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

console.log(fib(8));
