const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector('#check-btn')
let str = textInput.innerText;
let isEntered = false;

//Add text to the textbox to be tested
textInput.addEventListener("onchange",getText)
textInput.onchange = getText;
checkButton.onclick = checkInput;

function getText() {
  console.log(textInput.innerHTML)
  console.log(str, "typing")
}
// checkButton.addEventListener('click',checkInput)
getText()

//Check for alert on button submit
function checkInput() {
  // getText();
alert("Please input a value")
  console.log("button clicked")
}
// checkButton.onclick = checkInput()


//Clean string, lowercase & remove spaces


/*

function palindrome(str) {
  let x;
  let compare_array = [];
  let forward_loop = [];
  let backward_loop = [];
  str = str.replace(/\W/g, "").split("_").pop() //takes out symbols, spaces and special characters
  let forward = str.toLowerCase(); //ignore case
  let forward_array = forward.split(""); //makes an array from forward letters
  let backward_array = reverseString(forward); //reverses 'forward' into array
  let backward = backward_array.join(""); //joins the backward arr into a string

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
*/