function sumAll(arr) {
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });

  var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
  });

  for (var a = max - 1; a > min; a--) {
    arr.push(a);
  }
  var answer = arr.reduce(function(a, b) {
    return a + b;
  });

  return answer;
}

sumAll([5, 10]);
