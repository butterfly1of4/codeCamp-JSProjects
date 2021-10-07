Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars  $100 (ONE HUNDRED)

Ex:
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]


status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]

Steps:

1: Establish variables for each denmoination of currency. 
2: Assign each variable w/ a value (NUMBER)
3: Create an array for the Cash in Drawer (CiD)
    - one side for the naming of denomination
    - how much money in that denomination there is ( use % )
4: Create a variable & function for price of item
5: Create a true/false for 'open' & 'closed'
6: Create a variable for payment - and in what denominations
    - upadte total drawer and 
7: Check payment w/ the CiD to see if:
    - T/F on the change
    if FALSE: done- close drawer - 
    - cancel purchase - no change in drawer amount
    - return open/closed & current balance
    if TRUE:
    - difference in the paid vs. price to determine 
    - how many of what are needed to make change
    - Is there enough of each to give change
    - Subract change from drawer amount
    - update total drawer amt. and # of each amt
    - return open/closed & current balance
    


cash has to be checked by all values to make change
