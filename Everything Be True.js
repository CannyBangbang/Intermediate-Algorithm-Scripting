function truthCheck(collection, pre) {
  function toPre(item) {
    return item[pre];
  }

  var collectionArr = collection.map(toPre);
  var intialLength = collectionArr.length;
  collectionArr = collectionArr.filter(Boolean);
  var endLength = collectionArr.length;

  if (endLength < intialLength) {
    answer = false;
  } else {
    answer = true;
  }

  console.log("answer:", answer);
  return answer;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
