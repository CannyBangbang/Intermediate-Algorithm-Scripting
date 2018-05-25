function binaryAgent(str) {
  function biToLetter(match) {
    var count = 0;

    if (match[0] == 1) {
      count = count + 128;
    }
    if (match[1] == 1) {
      count = count + 64;
    }
    if (match[2] == 1) {
      count = count + 32;
    }
    if (match[3] == 1) {
      count = count + 16;
    }
    if (match[4] == 1) {
      count = count + 8;
    }
    if (match[5] == 1) {
      count = count + 4;
    }
    if (match[6] == 1) {
      count = count + 2;
    }
    if (match[7] == 1) {
      count = count + 1;
    }

    console.log("count:", count);
    console.log("code:", String.fromCharCode(count));
    return String.fromCharCode(count);
  }

  str = str.replace(/[01][01][01][01][01][01][01][01]/g, biToLetter);
  str = str.replace(/\b | \b|/g, "");
  str = str.replace(/\B | \B/g, "");

  console.log("answer:", str);
  return str;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
