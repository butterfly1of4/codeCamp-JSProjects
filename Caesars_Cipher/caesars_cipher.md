One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

https://en.wikipedia.org/wiki/ROT13

Steps:

1. MAYBE: Set variable with alphabet and assign each letter a value
2. MAYBE: Create an array of duples containing each letter & its reverse
3. Write a function to read the inputs
    -Split the words into letters
    -Assess value and locate var
    -Replace current value with update value
4. Return deciphered words w/ spaces & characters.

