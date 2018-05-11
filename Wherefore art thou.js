function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var sourceKeys = Object.keys(source);

    arr = collection.filter(function checkObjects(objNum) {
        for ( var i = 0; i < sourceKeys.length; i++) {
            if (!objNum.hasOwnProperty(sourceKeys[i]) || objNum[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });