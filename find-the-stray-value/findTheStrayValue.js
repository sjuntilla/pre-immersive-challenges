module.exports = function findTheStrayValue(array) {
  // write your code in here
  let stray = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== array[0]) {
      stray = array[i];
    }
  }
  return stray;
}