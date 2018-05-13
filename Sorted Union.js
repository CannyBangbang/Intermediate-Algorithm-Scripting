function uniteUnique(arr) {
    var arrToArray = Array.from(arguments);
    finalArr = arrToArray[0];
    var i;
    var ii;
    var iii;
    
    for (i = 1; i < arrToArray.length; i++) {
        for (ii = 0; ii < arrToArray[i].length; ii++) {
            for (iii = 0; iii < finalArr.length; iii++) {
                if (arrToArray[i][ii] === finalArr[iii]) {
                    console.log("deepfor1:", arrToArray, "///", arrToArray[i][ii], "///", finalArr[iii]);
                    arrToArray[i] = arrToArray[i].splice([ii, 1]);
                    console.log("deepfor2:", arrToArray);
                }
            }
        }
        var finalArr = finalArr.concat(arrToArray[i]);
    }
  


    console.log("answer:", finalArr);
    return finalArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);