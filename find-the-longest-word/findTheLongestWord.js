module.exports = function findTheLongestWord(arr) {
  // write your code in here
  var longestWord = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}