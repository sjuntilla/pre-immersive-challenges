module.exports = function countByMultiples(length, x) {
  // write your code in here
  let arr = [x];
  let mult = x;

  for (var i = 0; i < length - 1; i++) {
    mult += x
    arr.push(mult);
  }
  return arr;

}