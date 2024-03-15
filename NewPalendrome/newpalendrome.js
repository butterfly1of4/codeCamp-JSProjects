const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector('#check-btn');
const resutBox = document.querySelector('#result');
let str = "";
let isChanged = false;

console.log(textInput,"textinput")
console.log(checkButton, "buttoning")
//Add text to the textbox to be tested
textInput.addEventListener("change",getText)
resutBox.addEventListener("change",addText)

function getText(str) {
  let x = document.getElementById("text-input");
  console.log(str, "value")
str =  x.value;
isChanged = true;
return str
} 

function addText() {
  let x = document.getElementById("result");
  if(isChanged){
    x.value = str;
    x.innerText = str;
  }
  else {
    console.log('not changed')
  }
}

checkButton.addEventListener('click',checkInput)


//Check for alert on button submit
function checkInput() {
  // getText();
  console.log(isChanged)
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