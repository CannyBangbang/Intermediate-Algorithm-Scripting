function addTogether() {
  var isNumber = function(arg) {
    if (Number.isInteger(arg)) {
      return arg;
    } else {
      return undefined;
    }
  };

  if (arguments.length === 2) {
    var argOne = isNumber(arguments[0]);
    var argTwo = isNumber(arguments[1]);
    if (argOne != undefined && argTwo != undefined) {
      console.log("here1");
      return argOne + argTwo;
    } else {
      console.log("here2");
      return undefined;
    }
  } else {
    var argthree = arguments[0];
    if (isNumber(argthree)) {
      return function(newArg) {
        if (
          argthree != undefined &&
          newArg != undefined &&
          Number.isInteger(newArg)
        ) {
          console.log("here3");
          return argthree + newArg;
        } else {
          console.log("here4");
          return undefined;
        }
      };
    }
  }
}

addTogether(2, 3);
