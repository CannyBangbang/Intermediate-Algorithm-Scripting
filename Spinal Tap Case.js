function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  str = str.replace(/[\s|_]/g, "-");
  str = str.toLowerCase();

  console.log(str);
  return str;
}
  
  spinalCase("The_Andy_Griffith_Show");
  