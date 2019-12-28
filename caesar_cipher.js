/**
 * Implements ROT13 Chiffre
 * @param {String} str
 * @returns {String} 
 */
function rot13(str) {

  // Split String up into Char Array
  str.split('');
  let result = [];

  for(let i=0; i<str.length; i++) {
    let c = str.charCodeAt(i);

    // check if Char at i is between 'A' and 'Z'
    if(c >= 'A'.charCodeAt(0) && c <= 'Z'.charCodeAt(0)) {

      // check if Char at i is after 'N', so 13 gets subtracted
      if(c >= 'N'.charCodeAt(0)) {
        result.push(String.fromCharCode(c - 13));
      }
      else {  // Char at i is before 'N', so 13 gets added
        result.push(String.fromCharCode(c + 13))
      }
    }
    // Non 'A'-'Z' gets just ignored
    else {
      result.push(str[i])
    }
  }
  
  // join Char Array back together
  return result.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
