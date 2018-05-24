function smallestCommons(arr) {
  var high;
  var low;
  var rangeArr = [];
  var isTrue = false;

  if (arr[0] > arr[1]) {
    high = arr[0];
    low = arr[1];
  } else {
    high = arr[1];
    low = arr[0];
  }
  var count = high;

  console.log("high:", high);
  console.log("low:", low);

  for (var i = low; i < high + 1; i++) {
    rangeArr.push(i);
  }

  while (isTrue === false) {
    var truthCount = 0;
    for (var ii = 0; ii < rangeArr.length; ii++) {
      while (count % rangeArr[ii] !== 0) {
        count += high;
      }
    }
    for (var iii = 0; iii < rangeArr.length; iii++) {
      if (count % rangeArr[iii] === 0) {
        truthCount++;
      }
      if (truthCount == rangeArr.length) {
        isTrue = true;
      }
    }
  }

  console.log("range:", rangeArr);
  console.log("answer:", count);
  return count;
}

smallestCommons([23, 18]);
