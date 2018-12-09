module.exports = function doubleStrChars(str) {
  // write your code in here
  var returnedString = '';
  if(returnedString === undefined || returnedString === false){
    return 'not a string!';
  } else {
  for (i = 0; i < str.length; i++) {
    returnedString += str.charAt(i) + str.charAt(i);
  } return returnedString;
}
}