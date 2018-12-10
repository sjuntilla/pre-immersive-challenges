module.exports = function doubleStrChars(str) {
  // write your code in here
  if(typeof (str) !== 'string'){
    return 'not a string!';
  }
  var returnedString = '';
  for (i = 0; i < str.length; i++) {
    returnedString += str.charAt(i) + str.charAt(i);
  }
    return returnedString;

}

