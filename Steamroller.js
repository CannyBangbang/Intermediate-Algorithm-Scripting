function steamrollArray(arr) {
  var finalArr = [];
  var tempArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      tempArr = steamrollArray(arr[i]);
      finalArr = finalArr.concat(tempArr);
    } else {
      finalArr.push(arr[i]);
    }
  }

  console.log("final:", finalArr);
  return finalArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
