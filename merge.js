let array = [3, 2, 1, 13, 8, 18, 34];

function mergeShort(array) {
  function merge(left, right) {
    let mergedArray = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        mergedArray.push(left.shift());
      } else {
        mergedArray.push(right.shift());
      }
    }

    return mergedArray.concat(left, right);
  }

  if (array.length == 0 || array.length == 1) return array;
  if (array.length > 2) {
    let middle = Math.floor(array.length / 2);
    // console.log(middle);
    let left = mergeShort(array.slice(0, middle));
    let right = mergeShort(array.slice(middle));

    return merge(left, right);
  }
  if (array.length == 2) {
    if (array[0] < array[1]) {
      return array;
    } else {
      [array[0], array[1]] = [array[1], array[0]];
      return array;
    }
  }
}

console.log(mergeShort(array));
