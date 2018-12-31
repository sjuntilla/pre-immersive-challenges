module.exports = function moveTheZeros(arrNum, isRight) {
  // write your code here
  /* PSUEDOCODE:
  001. Determine whether 'isRight' is set to 'true' or not.
  002. If so, move all the zeroes in the array to the right (end) of the array.
  003. Otherwise, move all zeroes to the left (beginning) of the array. */

  if (isRight === true) {
    for (var i = arrNum.length; i--;) {
      if (arrNum[i] === 0) {
        arrNum.splice(i, 1);
        arrNum.push(0);
      }
    }
  }
  if (isRight === false) {
    for (var j = arrNum.length; j--;) {
      if (arrNum[j] === 0) {
        arrNum.splice(j, 1);
        arrNum.unshift(0);
      }
    }
  }
  return arrNum;
}