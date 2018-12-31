module.exports = function swapLetterCase(str) {
  // write your code in here
  /* PSEUDOCODE
  001: Iterate through the string as an array to determine which letters are uppercase and lowercase.
  002. If uppercase, switch to lowercase, and vice versa. */

  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      str[i] = str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      str[i] = str[i].toLowerCase();
    } else {
      str[i] = str[i]
    }
  }
  return str.join('');
}