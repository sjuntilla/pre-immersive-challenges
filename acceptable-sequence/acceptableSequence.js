module.exports = function acceptableSequence(str) {
  // write your code here

  /* My original solution, only accounted for the first and last characters in the string!!!


  if (str.startsWith('+'), str.endsWith('+')) {
	return true;
  } else {
	return false;
  } */

  /* BRUTE FOOOOOORCE!!!!

  var letters = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < str.length; i++) {
	var isALetter = letters.includes(str);
	var noSymbolBeforeLetter = str[i -1] !== '+';
	var noSymbolAfterLetter = str[i + 1] !== '+';
	if (isALetter && noSymbolBeforeLetter || noSymbolAfterLetter) {
			return false; 
		}
  	}
  	return true;
  	}     */

for (var i = 0; i < str.length; i++) { 
	if (str[i].match(/[a-z]/i) !== null){
		if (str.charAt(i + 1) === '+' && str.charAt(i - 1) === '+') {
			return true;
		} else {
			return false;
		}
	}
} 
}