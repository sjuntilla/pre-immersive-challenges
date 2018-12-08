module.exports = function checkAscOrder(numArray) {
  // write your code in here
  let result = true;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > numArray[i + 1]) {
      result = false; 
    } 
  } return result;
} 