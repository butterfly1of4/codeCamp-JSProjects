function rot13(str) {
  var firstSplit = str.split(" ").join("_");
  var splitStr = firstSplit.replace(" ").split("");
  var letter;
  var newStr = [];
  var joinStr;
  var spaces = new RegExp(/[*|\":<> [\]!{}.?`\\';@&$]/g)
  const alphabetA = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "_",
    ".",
  ];
  const alphabetB = [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
  ];
  for (letter of splitStr) {
    for (let x = 0; x < alphabetA.length; x++) {
      if (letter == alphabetA[x]) {
        newStr.push(alphabetB[x]);
      }
      if (letter == alphabetB[x]) {
        newStr.push(alphabetA[x]);
      }
      if (spaces.test(letter[x])) {
        newStr.push(letter);
      }
    }
    joinStr = newStr.join("");
  }
  joinStr = joinStr.split(" ").join(" ");

  return joinStr;
}
// rot13("SERR PBQR PNZC");

console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP
// console.log(rot13("CVMMN"));
// console.log(rot13("YBIR"));
console.log(rot13("SERR CVMMN!")); //FREE PIZZA!
console.log(rot13("SERR YBIR?")); //FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
