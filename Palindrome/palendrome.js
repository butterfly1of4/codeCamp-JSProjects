function palindrome(str) {
  var x;
  var compare_array = [];
  var forward_loop = [];
  var backward_loop = [];
  var str = str.replace(/\W/g, "").split("_").pop() //takes out symbols, spaces and special characters
  var forward = str.toLowerCase(); //ignore case
  let forward_array = forward.split(""); //makes an array from forward letters
  let backward_array = reverseString(forward); //reverses 'forward' into array
  var backward = backward_array.join(""); //joins the backward arr into a string

  for (let x = 0; x < forward_array.length; x++) {
    forward_loop.push(forward_array[x]);
    backward_loop.push(backward_array[x]);

    if (forward_loop[x] != backward_loop[x]) {
      return false;
    }
  } //end for loop

  return true;
} //end palindrome

function reverseString(str) {
  return str.split("").reverse();
}

palindrome("eye");

console.log(palindrome("sis")); //t/f
console.log(palindrome("nope")); //f
console.log(palindrome("almostomla")); //f
console.log(palindrome("never odd or even")); //t
console.log(palindrome("A man, a plan, a canal. Panama")); //t