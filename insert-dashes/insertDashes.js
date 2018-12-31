module.exports = function insertDashes(num) {
  // write your code in here
  /* PSEUDOCODE
  001. Iterate through 'num' as a string.
  002. Determine the even numbers in the array and insert a dash after them by pushing them into 'arr.'
  003. Return 'arr' as a string. */
  let str = num.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0 && str[i - 1] % 2 === 0) {
      arr.push('-', str[i])
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join('');
}