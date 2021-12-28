/**
 * Checks if the input String is a Palindrome
 * @param {String} str 
 * @return {Boolean} 
 */
function isPalindrome(str) {

  let sanitize = str.replace(/\s/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reverse =  sanitize.split("").reverse().join("");
  
  return sanitize === reverse;
}


console.log(isPalindrome("race CAR"));
