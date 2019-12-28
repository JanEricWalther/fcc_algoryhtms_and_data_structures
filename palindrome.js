/**
 * Checks if the input String is a Palindrome
 * @param {String} str 
 * @return {Boolean} 
 */
function isPalindrome(str) {

  // remove Whitespaces & non-letter-charachters and make everything lower case
  let sanitize = str.replace(/\s/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // split string into Array, reverse it, join it together again
  let reverse =  sanitize.split("").reverse().join("");
  
  // return reverse + sanitize;
  return sanitize === reverse;
}


console.log(isPalindrome("race CAR"));
