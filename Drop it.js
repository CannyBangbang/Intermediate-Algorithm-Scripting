function dropElements(arr, func) {
  while (func(arr[0]) === false) {
    arr.shift();
  }

  console.log(arr);
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
