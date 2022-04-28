Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Steps:

-REGEX needed:
    -global match (\g)(/g)
    //-ignore whitespace (\s)
    -ignore case (toLowerCase) OR (/''/i)
    -ignore symbols/match all non-whitespace (\S)
    -beginning matching (^)
    -end matching ($)
    -all letters and numbers (\w)
    -all non-numbers (\W) OR input.replace(/[^0-9a-z]/gi, '')
    
1. Create a new string (new_str) that doesn't include cases, spaces or symbols
      -//remove space == input = input.replace(/\s/g, '') OR input.replace(/\s/gi, '')
      -//to lowercase == input= input.toLowerCase()
      -//    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]}
2. Create a string that is the reverse of new_str (backward_str) //split(),reverse(),join()
OR
2. OR look into regex for matching the beginning (^) or ends ($) of strings
3. Using an array (new_arr && backward_arr), split the strings into individual letters
4. Create a loop that compares each entry in new_arr w/ the corresponding entry in backward_arr
5. If the 2 arrays match, return True
6. If they don't return False