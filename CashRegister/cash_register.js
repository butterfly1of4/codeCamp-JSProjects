function checkCashRegister(price, cash, cid) {
  //OBJECT TO BE RETURNED
  let finalChange = {
    status: "",
    change: [],
  };
  //COIN VALUES
  let coinValues = [100, 20, 10, 5, 1, .25, .10, .05, .01];

  let changeDue = 0.0;
  changeDue.toFixed(2)
  //CHANGE DUE
  let diff = Math.abs(price - cash);
  //TOTAL IN EACH COIN VALUE
  let drawerCoins = [];

  for (let i in cid) {
    let y = 1
    drawerCoins.push(cid[i][y])
    drawerCoins[i].toFixed(2)
  }



  //TOTAL AMOUNT IN REGISTER
  let registerTotal = 0;
  for (let i in cid) {
    registerTotal += cid[i][1];
  }
  //CURRENT AMOUNT IN EACH VAULE
  registerTotal = registerTotal.toFixed(2);

  //COMPUTE REGISTER CHANGE
  const compute = () => {
    let x;
    //REVERSE THE CID & DRAWER
    let reverseCid = cid.reverse()


    drawerCoins.reverse()

    //COMPUTE IF CHANGE IS POSSIBLE
    for (x in reverseCid) {
      let modulus = Math.round((diff % coinValues[x]) * 100) / 100
      let runningTotal;
      let findWhole = Math.abs((diff - modulus) / coinValues[x]).toFixed(2)

      let findCoinValue = findWhole * coinValues[x]
      let coinInDrawer = reverseCid[x][1]

      let cidName = reverseCid[x][0].toString()
      let remainderEntry = [cidName, findCoinValue]


      if (findWhole != 0) {
        if (findCoinValue > coinInDrawer) {

          runningTotal = Math.abs(diff - coinInDrawer).toFixed(2)
          diff = runningTotal

          remainderEntry = [cidName, coinInDrawer]

          if (remainderEntry[1] == 0) {
            registerTotal > diff
            finalChange.change
            finalChange.status = "INSUFFICIENT_FUNDS"
            break
          }
        }
        else {
          runningTotal = Math.abs(diff - findCoinValue).toFixed(2)
          diff = runningTotal
        }
        finalChange.change.push(remainderEntry)
      }

    }
    return finalChange.change
  }

  //COMPUTE CHANGE NECESSARY. RETURN OBJECT {'OPEN', CHANGE[DENOMINATIONS GIVEN]}
  const computeStatus = () => {
    //IF REGISTERTOTAL < CHANGE
    if (registerTotal < diff) {
      //RETURN {'INSUFFICIENT FUNDS', CHANGE []}

      finalChange.status = "INSUFFICIENT_FUNDS";
      finalChange.change = [];
      // return finalChange;
    }
    //IF REGISTERTOTAL == CHANGE
    if (registerTotal == diff) {
      //RETURN ['CLOSED', CID]
      finalChange.status = "CLOSED";
      finalChange.change = cid;

      // return finalChange;
    }
    //IF REGISTERTOTAL > CHANGE// 
    if (registerTotal > diff) {
      finalChange.status = "OPEN";
      finalChange.change = compute()
      console.log(finalChange, "open")
      // return finalChange;
    }
  }

  computeStatus();
  return finalChange;
}



// console.log(
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// )

// console.log(
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// );

// console.log(
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// )

// console.log(
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// )

// console.log(
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// )

