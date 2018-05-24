function convertHTML(str) {
  // &colon;&rpar;
  //var regHTML = new RegExp(/\W/);

  function newHTMLStr(match) {
    console.log("match:", match);
    switch (match) {
      case "&":
        match = "&​amp;";
        break;

      case "<":
        match = "&​lt;";
        break;

      case ">":
        match = "&​gt;";
        break;

      case '"':
        match = "&​quot;";
        break;

      case "'":
        match = "&​apos;";
        break;

      default:
        console.log("Something is wrong!!!");
    }
    return match;
  }

  str = str.replace(/[^\w\s]/g, newHTMLStr);

  console.log("answer str:", str);
  return str;
}

convertHTML("Hamburgers < Pizza < Tacos");
