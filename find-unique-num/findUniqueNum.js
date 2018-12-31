module.exports = function findUniqueNum(strOfNums) {
  // write your code in here
  /* PSEUDOCODE 
  001. Iterate through the string as an array to determine the items in the array.
  002. Push the odd numbers and even numbers into their own arrays, then determine their position within arr using indexOf().
  003. Return the index of said item. */
  let arr = strOfNums.split(" ");
  let evens = [];
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }
  if (evens.length === 1) {
    return arr.indexOf(evens[0]);
  } else {
    return arr.indexOf(odds[0]);
  }
}