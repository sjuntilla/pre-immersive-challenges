module.exports = function descendingOrder(number) {
  // write code in here
  if (typeof number === 'number') {
    let num = number.toString();
    let arr = Array.from(num).map(Number);
    return arr.sort().reverse().join('');

  } else {
    return 'not a number!';
  }
}