User Stories:

You should have an input element with an id of "text-input"
You should have a button element with an id of "check-btn"
You should have a div element with an id of "result"
When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text "Please input a value"
When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome"
When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text "eye is a palindrome"
When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text "_eye is a palindrome"
When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text "race car is a palindrome"
When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text "not a palindrome is not a palindrome"
When the #test-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text "A man, a plan, a canal. Panama is a palindrome"
When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text "never odd or even is a palindrome"
When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text "nope is not a palindrome"
When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text "almostomla is not a palindrome"
When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text "My age is 0, 0 si ega ym. is a palindrome"
When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text "1 eye for of 1 eye. is not a palindrome"
When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text "0_0 (: /-\ :) 0-0 is a palindrome"
When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text "five|\_/|four is not a palindrome"
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!


Roman  Numeral
Build a Roman Numeral Converter
Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
Objective: Build an app that is functionally similar to https://roman-numeral-converter.freecodecamp.rocks

User Stories:

You should have an input element with an id of "number"
You should have a button element with an id of "convert-btn"
You should have a div element with an id of output
When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"
When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

Telephone Validator
Build a Telephone Number Validator
In the US, phone numbers can be formatted in many ways. Here are some examples of valid formats for US phone numbers:

1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555
Note that the area code is required. Also, if the country code is provided, you must confirm that the country code is 1.

Objective: Build an app that is functionally similar to https://telephone-number-validator.freecodecamp.rocks

User Stories:

You should have an input element with an id of "user-input"
You should have a button element with an id of "check-btn
You should have a button element with an id of "clear-btn"
You should have a div element with an id of "results-div"
When you click on the #check-btn element without entering a value into the #user-input element, an alert should appear with the text "Please provide a phone number"
When you click on the #clear-btn element, the content within the #results-div element should be removed
When the #user-input element contains 1 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 555-555-5555"
When the #user-input element contains 1 (555) 555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 (555) 555-5555"
When the #user-input element contains 5555555555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 5555555555"
When the #user-input element contains 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text `"Valid US number: 555-555-5555"
When the #user-input element contains (555)555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: (555)555-5555"
When the #user-input element contains 1(555)555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1(555)555-5555"
When the #user-input element contains 555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 555-5555"
When the #user-input element contains 5555555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 5555555"
When the #user-input element contains 1 555)555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 1 555)555-5555"
When the #user-input element contains 1 555 555 5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 555 555 5555"
When the #user-input element contains 1 456 789 4444 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 456 789 4444"
When #user-input contains 123**&!!asdf# and #check-btn is clicked, #results-div should contain the text "Invalid US number: 123**&!!asdf#"
When the #user-input element contains 55555555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 55555555"
When the #user-input element contains (6054756961) and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: (6054756961)"
When the #user-input element contains 2 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2 (757) 622-7382"
When the #user-input element contains 0 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 0 (757) 622-7382"
When the #user-input element contains -1 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: -1 (757) 622-7382"
When the #user-input element contains 2 757 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2 757 622-7382"
When the #user-input element contains 10 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 10 (757) 622-7382"
When the #user-input element contains 27576227382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 27576227382"
When the #user-input element contains (275)76227382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: (275)76227382"
When the #user-input element contains 2(757)6227382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2(757)6227382"
When the #user-input element contains 2(757)622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2(757)622-7382"
When the #user-input element contains 555)-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 555)-555-5555"
When the #user-input element contains (555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: (555-555-5555"
When #user-input contains (555)5(55?)-5555 and #check-btn is clicked, #results-div should contain the text "Invalid US number: (555)5(55?)-5555"
When the #user-input element contains 55 55-55-555-5 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 55 55-55-555-5"
When the #user-input element contains 11 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 11 555-555-5555"
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

Cash Register
Build a Cash Register
Here you'll build a cash register app that will return change to the customer based on the price of the item, the amount of cash provided by the customer, and the amount of cash in the cash drawer. You'll also need to show different messages to the user in different scenarios, such as when the customer provides too little cash or when the cash drawer doesn't have enough to issue the correct change.

In the script.js file, you have been provided with the price and cid variables. The price variable is the price of the item, and the cid variable is the cash-in-drawer, which is a 2D array listing the available currency in the cash drawer.

The other variable you will need add is the cash variable, which is the amount of cash provided by the customer for the item, which is provided via an input element on the page.

If you'd like to test your application with different values for price and cid, make sure to declare them with the let keyword so they can be reassigned by our tests.

Your application should show different messages depending on the price of the item, the amount of cash provided by the customer, and the amount of cash in the drawer:

"Status: INSUFFICIENT_FUNDS": if cash-in-drawer is less than the change due, or if you cannot return the exact change.
"Status: CLOSED": if cash-in-drawer is equal to the change due.
"Status: OPEN": if cash-in-drawer is greater than the change due and you can return change, with the change due in coins and bills sorted in highest to lowest order.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickle	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One Hundred Dollars	$100 (ONE HUNDRED)
Objective: Build an app that is functionally similar to https://cash-register.freecodecamp.rocks

User Stories:

You should have an input element with an id of "cash"
You should have a div element with an id of "change-due"
You should have a button element with an id of "purchase-btn"
When the value in the #cash element is less than price, an alert should appear with the text "Customer does not have enough money to purchase the item"
When the value in the #cash element is equal to price, the value in the #change-due element should be "No change due - customer paid with exact cash"
When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: OPEN QUARTER: $0.5"
When price is 3.26, the value in the #cash element is 100, cid is [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"
When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: INSUFFICIENT_FUNDS"
When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: INSUFFICIENT_FUNDS"
When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: CLOSED PENNY: $0.5"
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

Pokeman
Build a Pokémon Search App
In this project, you'll build an app that will search for Pokémon by name or ID and display the results to the user. To retrieve the Pokémon data and images, you'll use freeCodeCamp's PokéAPI Proxy.

Objective: Build an app that is functionally similar to https://pokemon-search-app.freecodecamp.rocks

User Stories:

You should have an input element with an id of "search-input"
You should have a button element with an id of "search-button
You should have an element with an id of "pokemon-name"
You should have an element with an id of "pokemon-id"
You should have an element with an id of "weight"
You should have an element with an id of "height"
You should have an element with an id of "types"
You should have an element with an id of "hp"
You should have an element with an id of "attack"
You should have an element with an id of "defense"
You should have an element with an id of "special-attack"
You should have an element with an id of "special-defense"
You should have an element with an id of "speed"
When the #search-input element contains the value Red and the #search-button element is clicked, an alert should appear with the text "Pokémon not found"
When the #search-input element contains the value Pikachu and the #search-button element is clicked, the values in the #pokemon-name, #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense, and #speed elements should be PIKACHU, #25 or 25, Weight: 60 or 60, Height: 4 or 4, 35, 55, 40, 50, 50, and 90, respectively
When the #search-input element contains the value Pikachu and the #search-button element is clicked, you should add an img element with the id of "sprite" and the src set to the Pokémon's front_default sprite to the page
When the #search-input element contains the value Pikachu and the #search-button element is clicked, the #types element should contain a single inner element with the value ELECTRIC. The #types element content should be cleared between searches
When the #search-input element contains the value 94 and the #search-button element is clicked, the values in the #pokemon-name, #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense, and #speedelements should be GENGAR, #94 or 94, Weight: 405 or 405, Height: 15 or 15, 60, 65, 60, 130, 75, and 110, respectively
When the #search-input element contains the value 94 and the #search-button element is clicked, you should add an img element with the id of sprite and the src set to the Pokémon's front_default sprite to the page
When the #search-input element contains the value 94 and the #search-button element is clicked, the #types element should contain two inner elements with the text values GHOST and POISON, respectively. The #types element content should be cleared between searches
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

Note: When running the tests there will be a slight delay. Please wait a few seconds to allow the tests to finish. Do not refresh the page before they are done.

