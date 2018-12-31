module.exports = function vowelCount(str) {
  // write your code in here
  /* PSEUDOCODE
  001. Iterate through 'str' as an array to determine which letters are vowels or not.
  002. Add to the vowel count every time a vowel is detected. */
  let arr = str.split('');
  let vowelCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[aeiou]/)) {
      vowelCount++;
    }
  }
  return vowelCount;
}