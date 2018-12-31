module.exports = function needleInHaystack(haystack) {
  // write code in here
  /* PSEUDOCODE
  001: Iterate through 'haystack' to find the fabled 'needle', and return its index.
  002. If 'needle' doesn't exist, return 'false.' */

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.indexOf('needle') > -1) {
      return haystack.indexOf('needle');
    } else {
      return false;
    }
  }
}