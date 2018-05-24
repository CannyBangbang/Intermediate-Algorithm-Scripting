function translatePigLatin(str) {
  var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  str = str.split("");
  startVowel = false;
  var moveToEnd;

  for (var i = 0; i < vowels.length; i++) {
    if (str[0] === vowels[i]) {
      startVowel = true;
    }
  }

  if (startVowel === true) {
    str.push("way");
  } else {
    moveToEnd = str.shift();
    str.push(moveToEnd);
    for (var ii = 0; ii < str.length && startVowel === false; ii++) {
      for (var iii = 0; iii < vowels.length; iii++) {
        if (str[ii] === vowels[iii]) {
          console.log(str[ii], " is not vowel");
          startVowel = true;
        }
      }
      if (startVowel === false) {
        moveToEnd = str.shift();
        str.push(moveToEnd);
        startVowel = true;
      }
    }
    str.push("ay");
  }

  console.log("answer: ", str.join(""));
  return str.join("");
}

translatePigLatin("paragraphs");
