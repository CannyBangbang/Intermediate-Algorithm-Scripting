function convertToRoman(num) {
  var numThousands = Math.floor(num / 1000);
  var numFiveHundreds = Math.floor((num % 1000) / 500);
  var numHundreds = Math.floor((num % 500) / 100);
  var numFiftys = Math.floor((num % 100) / 50);
  var numTens = Math.floor((num % 50) / 10);
  var numFives = Math.floor((num % 10) / 5);
  var numOnes = Math.floor(num % 5);
  var numRoman = [];
  var numRomanM = [];
  var numRomanD = [];
  var numRomanC = [];
  var numRomanL = [];
  var numRomanX = [];
  var numRomanV = [];
  var numRomanI = [];
  var maxThreeOnOff = 0;

  function addRomanNum(
    decimalPlace,
    highDecimalPlace,
    romVar,
    lowLetter,
    highLetter,
    secondHighLetter
  ) {
    if (decimalPlace > 3 && highDecimalPlace === 0) {
      //resolves #4 issues
      numRoman.push(lowLetter, highLetter);
    } else if (decimalPlace > 3 && highDecimalPlace !== 0) {
      //resolves #9 issues
      numRoman.pop();
      numRoman.push(lowLetter, secondHighLetter);
    } else {
      for (i = 0; i < decimalPlace; i++) {
        numRoman.push(lowLetter);
      }
    }
  }

  if (num > 3999) {
    return "Sorry, I can only count to 3999!";
  } else {
    addRomanNum(numThousands, null, numRomanM, "M", null, null);
    addRomanNum(numFiveHundreds, numThousands, numRomanD, "D", "M", null);
    addRomanNum(numHundreds, numFiveHundreds, numRomanC, "C", "D", "M");
    addRomanNum(numFiftys, numHundreds, numRomanL, "L", "C", "D");
    addRomanNum(numTens, numFiftys, numRomanX, "X", "L", "C");
    addRomanNum(numFives, numTens, numRomanV, "V", "X", "V");
    addRomanNum(numOnes, numFives, numRomanI, "I", "V", "X");
  }

  return numRoman.join("");
}

console.log("1000:", convertToRoman(1000));
console.log("1004:", convertToRoman(1004));
console.log("2014:", convertToRoman(2014));
console.log("3999:", convertToRoman(3999));
convertToRoman(29);
