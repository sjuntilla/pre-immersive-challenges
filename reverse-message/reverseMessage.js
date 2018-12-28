module.exports = function reverseMessage(str) {
  str = str.split('').reverse().join('').toLowerCase().split(' ');
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}