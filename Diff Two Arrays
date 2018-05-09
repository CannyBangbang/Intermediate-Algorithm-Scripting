function diffArray(arr1, arr2) {
  var newArr = [];
  
  arrCompare(arr1, arr2);
  arrCompare(arr2, arr1);
  
  function arrCompare(arrA, arrB) {
    for (var i = 0; i < arrA.length; i++) {
      if (arrB.indexOf(arrA[i]) === -1) {
        newArr.push(arrA[i]);
      }
    }
  }
 
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
