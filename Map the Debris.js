function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = arr.slice();
  newArr.forEach( function(x) {
    let realRadius = (earthRadius + x.avgAlt);
    x.orbitalPeriod = Math.round((2 * Math.PI) * (Math.sqrt((Math.pow(realRadius, 3)/GM))));
    delete x.avgAlt;
  });

  console.log("newArr", newArr)
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);