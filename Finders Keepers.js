function findElement(arr, func) {
  var filteredArr = arr.filter(func);
  console.log(filteredArr);
  return filteredArr[0];
}

findElement([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});
