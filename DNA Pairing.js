function pairElement(str) {
  var DNA = [];
  str = str.split("");
  console.log(str);

  for (i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      DNA.push(["A", "T"]);
    } else if (str[i] === "T") {
      DNA.push(["T", "A"]);
    } else if (str[i] === "G") {
      DNA.push(["G", "C"]);
    } else if (str[i] === "C") {
      DNA.push(["C", "G"]);
    }
  }
  console.log(DNA);
  return DNA;
}

pairElement("GCG");
