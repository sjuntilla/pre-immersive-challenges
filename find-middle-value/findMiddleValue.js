module.exports = function findMiddleValue(numArray) {
  // write your code in here
  let arr = numArray.slice();
  let arrSort = numArray.sort((a, b) => {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arrSort[1]) {
      return arr.indexOf(arr[i]);
    }
  }
}