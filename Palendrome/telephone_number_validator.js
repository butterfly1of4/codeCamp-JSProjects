function telephoneCheck(str) {
  var valid = true;
  var letter_check = new RegExp(/[a-z]/g);
  var symbol_check = new RegExp(/[*|\":<>[\]{}?`\\';@&$]/g);

  const right = /\)/;
  const left = /\(/;
  var parenthesis_check = /right|left/;

  var split_str = str.split("");
  var number_str = str.replace(/\W/g, "").split("");

  for (let d = 0; d < split_str.length; d++) {
    if (right.test(split_str[5]) && !left.test(split_str[1])) {
      valid = false;
    }

    if (split_str.length < 10 || number_str.length > 11) {
      valid = false;
      break;
    }
    if (letter_check.test(split_str[d])) {
      valid = false;
      break;
    }
    if (symbol_check.test(split_str[d])) {
      valid = false;
      break;
    }

    if (number_str.length == 11) {
      if (number_str[0] != 1) {
        valid = false;
      }
      if (split_str[0] != "1") {
        valid = false;
      }
      break;
    }

    if (parenthesis_check.test(split_str)) {
      valid = true;
      break;
    }
    if (right.test(split_str[d])) {
      valid = false;
    }
    if (left.test(split_str[d])) {
      valid = false;
    }

    if (left.test(split_str[0]) && right.test(split_str[d])) {
      console.log(split_str[0]);
      valid = true;
      if (right.test(split_str[split_str.length - 1])) {
        valid = false;
      }
    }
  }

  return valid;
}

// telephoneCheck("555-555-5555");

// console.log(telephoneCheck("555-555-5555")) //boolean
console.log(telephoneCheck("1 555-555-5555")); //true
// console.log(telephoneCheck("5555555555")) //true
// console.log(telephoneCheck("1 456 789 4444")); //true
console.log(telephoneCheck("1(555)555-5555")); //true
console.log(telephoneCheck("(555)555-5555")); //true
console.log(telephoneCheck("(6054756961)")); //false ok
console.log(telephoneCheck("(555-555-5555")); //false ok
console.log(telephoneCheck("555)-555-5555")); //false ok
console.log(telephoneCheck("1 555)555-5555")); //false
// console.log(telephoneCheck("27576227382")) //false
// console.log(telephoneCheck("123**&!!asdf#")); //false
// console.log(telephoneCheck("2 (757) 622-7382")); //false
// console.log(telephoneCheck("-1 (757) 622-7382")); //false
// console.log(telephoneCheck("10 (757) 622-7382")) //false
// console.log(telephoneCheck("(275)76227382")) //false
// console.log(telephoneCheck("2(757)6227382")) //false
// console.log(telephoneCheck("2(757)622-7382")) //false
console.log(telephoneCheck("(555)5(55?)-5555")); //false
