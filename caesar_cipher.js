/**
 * Implements ROT13 Chiffre
 * @param {String} str
 * @returns {String} 
 */
function rot13(str) {

  str.split('');
  let result = [];

  for(let i=0; i<str.length; i++) {
    let c = str.charCodeAt(i);

    if(c >= 'A'.charCodeAt(0) && c <= 'Z'.charCodeAt(0)) {

      if(c >= 'N'.charCodeAt(0)) {
        result.push(String.fromCharCode(c - 13));
      } else {
        result.push(String.fromCharCode(c + 13))
      }
    } else {
      result.push(str[i])
    }
  }
  
  return result.join('');
}

console.log(rot13("SERR PBQR PNZC"));
