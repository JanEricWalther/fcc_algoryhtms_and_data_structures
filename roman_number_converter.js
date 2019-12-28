/**
 * Convert Decimal Number to Roman Number
 * @param {BigInteger} num 
 * @returns {String}
 */
function convertToRoman(num) {
  
  const romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50, 
    XL: 40,
    X: 10,
    V: 5,
    IV: 4,
    I: 1
  }

  let result = '';

  for (let symbol in romans) {
    if (num >= romans[symbol]) {
      result += symbol.repeat(Math.trunc(num / romans[symbol]));
      num -= romans[symbol] * Math.trunc(num / romans[symbol]);
    }
  }

  return result;
}


function convertToRomanOld(num) {
    
  let romanString = '';
  while (num > 0) {
      
      // M
      if(num >= 1000) {
          num -= 1000;
          romanString = romanString.concat('M');            
      }
      else if (num >= 900) {
          num -= 900;
          romanString = romanString.concat('CM');
      }
      // D
      else if(num >= 500) {
          num -= 500;
          romanString = romanString.concat('D');
      }
      else if (num >= 400) {
          num -= 400;
          romanString = romanString.concat('CD');
      }
      // C
      else if(num >= 100) {
          num -= 100;
          romanString = romanString.concat('C');
      }
      else if (num >= 90) {
          num -= 90;
          romanString = romanString.concat('XC');
      }
      // L
      else if(num >= 50) {
          num -= 50;
          romanString = romanString.concat('L');
      }
      else if (num >= 40) {
          num -= 40;
          romanString = romanString.concat('XL');
      }
      // X
      else if(num >= 10) {
          num -= 10;
          romanString = romanString.concat('X');
      }
      else if (num >= 9) {
          num -= 9;
          romanString = romanString.concat('IX');
      }
      // V
      else if(num >= 5) {
          num -= 5;
          romanString = romanString.concat('V');
      }
      else if (num >= 4) {
          num -= 4;
          romanString = romanString.concat('IV');
      }
      // I
      else if(num >= 1) {
          num -= 1;
          romanString = romanString.concat('I');
          
      }
  }

  return romanString;
}

console.log(convertToRoman(36));
console.log(convertToRomanOld(36));
