function fearNotLetter(str) {
    var strCharCodes = [];
    var missingLetter;
    console.log(str);

    for (i = 0; i < str.length; i++) {
        strCharCodes.push(str.charCodeAt(i));
    }
   
    console.log(strCharCodes);
   
    for (ii = 0; ii < strCharCodes.length; ii++) {
        if (strCharCodes[ii] - strCharCodes[ii+1] == -2) {
            missingLetter = String.fromCharCode(strCharCodes[ii] + 1);
        }
    }
    
    console.log(missingLetter);
    return missingLetter;
  }
  
  fearNotLetter("abce");