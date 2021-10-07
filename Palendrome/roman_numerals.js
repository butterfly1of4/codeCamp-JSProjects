function convertToRoman(num) {
  var digits = num.toString().split("");

  //variables for numbers/letters
  var I = { value: 1, letter: "I" };
  var V = { value: 5, letter: "V" };
  var X = { value: 10, letter: "X" };
  var L = { value: 50, letter: "L" };
  var C = { value: 100, letter: "C" };
  var D = { value: 500, letter: "D" };
  var M = { value: 1000, letter: "M" };
  var len;
  var letter;
  var first = digits[0];
  var second = digits[1];
  var third = digits[2];
  var fourth = digits[3];

  for (let y = 0; y < digits.length; y++) {
    if (digits.length == 4) {
      len = 4;
      first = findThousands();
      second = findHundreds();
      third = findTens();
      fourth = findOnes();
      return first.concat(second).concat(third).concat(fourth);
    }
    if (digits.length == 3) {
      len = 3;
      first = findHundreds();
      second = findTens();
      third = findOnes();
      return first.concat(second).concat(third);
    }
    if (digits.length == 2) {
      len = 2;
      first = findTens();
      second = findOnes();
      return first.concat(second);
    }
    if (digits.length == 1) {
      len = 1;
      first = findOnes();
      return first;
    }
  }
  //define ones place
  function findOnes() {
    var dig = fourth || third || second || first;
    if (dig == 0) {
      return (letter = "");
    }
    if (dig == 1) {
      letter = I.letter;
    } else if (dig == 2) {
      letter = I.letter.concat(I.letter);
    } else if (dig == 3) {
      letter = I.letter.concat(I.letter).concat(I.letter);
    } else if (dig == 4) {
      letter = I.letter.concat(V.letter);
    } else if (dig == 5) {
      letter = V.letter;
    } else if (dig == 6) {
      letter = V.letter.concat(I.letter);
    } else if (dig == 7) {
      letter = V.letter.concat(I.letter.concat(I.letter));
    } else if (dig == 8) {
      letter = V.letter.concat(I.letter.concat(I.letter.concat(I.letter)));
    } else if (dig == 9) {
      letter = I.letter.concat(X.letter);
    }
    return letter;
  }
  //define tens place
  function findTens() {
    var dig;
    if (len === 2) {
      dig = first;
    }
    if (len === 3) {
      dig = second;
    }
    if (len === 4) {
      dig = third;
    }
    if (dig == 0) {
      return (letter = "");
    }
    if (dig == 1) {
      letter = X.letter;
    } else if (dig == 2) {
      letter = X.letter.concat(X.letter);
    } else if (dig == 3) {
      letter = X.letter.concat(X.letter).concat(X.letter);
    } else if (dig == 4) {
      letter = X.letter.concat(L.letter);
    } else if (dig == 5) {
      letter = L.letter;
    } else if (dig == 6) {
      letter = L.letter.concat(X.letter);
    } else if (dig == 7) {
      letter = L.letter.concat(X.letter).concat(X.letter);
    } else if (dig == 8) {
      letter = L.letter.concat(X.letter).concat(X.letter).concat(X.letter);
    } else if (dig == 9) {
      letter = X.letter.concat(C.letter);
    }
    return letter;
  }
  //define hundres place
  function findHundreds() {
    var dig;
    if (len === 3) {
      dig = first;
    }
    if (len === 4) {
      dig = second;
    }
    if (dig == 0) {
      return (letter = "");
    }
    if (dig == 1) {
      letter = C.letter;
    } else if (dig == 2) {
      letter = C.letter.concat(C.letter);
    } else if (dig == 3) {
      letter = C.letter.concat(C.letter).concat(C.letter);
    } else if (dig == 4) {
      letter = C.letter.concat(D.letter);
    } else if (dig == 5) {
      letter = D.letter;
    } else if (dig == 6) {
      letter = D.letter.concat(C.letter);
    } else if (dig == 7) {
      letter = D.letter.concat(C.letter).concat(C.letter);
    } else if (dig == 8) {
      letter = D.letter.concat(C.letter).concat(C.letter).concat(C.letter);
    } else if (dig == 9) {
      letter = C.letter.concat(M.letter);
    }
    return letter;
  }
  //define thousands place
  function findThousands() {
    var dig = first;
    if (dig == 1) {
      letter = M.letter;
    } else if (dig == 2) {
      letter = M.letter.concat(M.letter);
    } else if (dig == 3) {
      letter = M.letter.concat(M.letter).concat(M.letter);
    }
    return letter;
  }
}

// convertToRoman(36);

// console.log(convertToRoman(2)); //II
console.log(convertToRoman(3)); //III
console.log(convertToRoman(5)); //V
// console.log(convertToRoman(7)); //V
// console.log(convertToRoman(8)); //V

// console.log(convertToRoman(4)); //II
console.log(convertToRoman(12)); //II --fix
console.log(convertToRoman(10)); //II --fix

// console.log(convertToRoman(56)); //V
// console.log(convertToRoman(67)); //XLVII
// console.log(convertToRoman(78)); //XCVII
// console.log(convertToRoman(89)); //LXXXIX
console.log(convertToRoman(90)); //XC

console.log(convertToRoman(123)); //CXXIII
// console.log(convertToRoman(234)); //CCXXXIV
// console.log(convertToRoman(345)); //CCCXLV
// console.log(convertToRoman(456)); //CDLVI
// console.log(convertToRoman(567)); //DLXVII
// console.log(convertToRoman(678)); //DCLXXVIII
// console.log(convertToRoman(789)); //DCCLXXXIX
// console.log(convertToRoman(890)); //DCCCXC
// console.log(convertToRoman(990)); //CMXC

console.log(convertToRoman(1000)); //MVIII
console.log(convertToRoman(1004)); //MIV
console.log(convertToRoman(1006)); //MVI
console.log(convertToRoman(1023)); //MXXIII
console.log(convertToRoman(2014)); //MMXIV
console.log(convertToRoman(3999)); //MMMCMXCIX
