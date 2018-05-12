function myReplace(str, before, after) {
    function strSwap(match) {
        if (match[0] === match[0].toUpperCase()) {
            return after[0].toUpperCase() + after.slice(1);
        }
        else {
            return after;
        }
    }

    str = str.replace(new RegExp(before, "g"), strSwap);
    console.log(str);
    return str;
}
  
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

  