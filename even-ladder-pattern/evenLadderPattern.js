module.exports = function evenLadderPattern(num) {
  // write your code in here

  if (num <= 1) {
    return '';
  } else {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0) {
        const str = i.toString().repeat(i);
        arr.push(str.toString(''));
      }
    }
    return arr.join('\n');
  }

}