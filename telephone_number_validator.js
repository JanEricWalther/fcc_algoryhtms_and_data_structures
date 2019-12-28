/**
 * Check if input String is a valid US Phone Number
 * @param {String} str 
 * @returns {Boolean}
 */
function telephoneCheck(str) {

  // Start with optional 1
  // optional Whitespace, optional opening Parantheses (
  // 3 Digits
  // optional Whitespace, optional closing Parantheses ), optional Dash -
  // 3 Digits
  // optional Whitespace, optional Dash -
  // 4 Digits
  // End of String
  const numberRegEx = /^1?\s?\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}$/;

  // Check if opened Parantheses get closed again
  let arr = str.split('');
  let openParantheses = 0;
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] === '(') {
      openParantheses++;
    } else if (arr[i] === ')') {
      openParantheses--;
    }
  }
  if(openParantheses  !== 0) return false;

  return numberRegEx.test(str);
  
}

// -------- Should Work ---------
// "1 555-555-5555"
// "1 (555) 555-5555"
// "555-555-5555"
// "1 555 555 5555"

// ------ Shouldn't Work ------- 
// "1 555)555-5555"
// "123**&!!asdf#"
// "(6054756961)"
// "-1 (757) 622-7382"
// "10 (757) 622-7382"
// "2(757)622-7382"
// "555)-555-5555"

// console.log(telephoneCheck('-1 (757) 622-7382'));