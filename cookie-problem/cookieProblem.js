module.exports = function cookieProblem(array) {
  // write your code in here
  var sum = 0;
  let numMax = Math.max(...array);
  for(var i = 0; i < array.length; i++) {
    if(array[i] !== numMax){
      sum += numMax - array[i];
    }
  } return sum;
  }
  // array.map(x => numMax - x);
   

    // decalre variable sum
    // find the value with the most cookies 
    // for loop each element
      // if value does not equal most cookie
        // sum most cookie - value
      // return sum