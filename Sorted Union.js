function uniteUnique(arr) {
  var arrToArray = Array.from(arguments);
  finalArr = arrToArray[0];
  console.log("first final arr", finalArr);
  var i;
  var ii;

  for (i = 1; i < arrToArray.length; i++) {
    for (ii = 0; ii < arrToArray[i].length; ii++) {
      if (finalArr.indexOf(arrToArray[i][ii]) != -1) {
        console.log("failed number", arrToArray[i][ii]);
      } else {
        console.log("passing number", arrToArray[i][ii]);
        finalArr.push(arrToArray[i][ii]);
      }
    }
  }

  console.log("answer:", finalArr);
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
