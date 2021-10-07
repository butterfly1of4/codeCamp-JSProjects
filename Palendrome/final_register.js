function checkCashRegister(price, cash, cid) {
  //VARIABLES
  var finalChange = {
    status: "",
    change: [],
  };
  function Purchase() {
    (this.price = price),
      (this.cash = cash),
      (this.cid = cid)
    //   (this.diff = diff);
  }
  var cid;
  var cash;
  var price;
  var tray = [];
  var register = 0;
  var diff = Math.abs(price - cash);
console.log(diff)
  var purchase = new Purchase();
  purchase.price = price;
  purchase.cash = cash;
  purchase.cid = cid;
//   purchase.diff = diff;
  console.log(purchase, "purchase");

  console.log(price, cash, diff, "price, cash, diff");
  console.log(cid, "cid");

  //VALUES FOR EACH COIN TYPE
  cid.forEach((x) => {
    tray.push(x[1]);
    return tray;
  });

  //REGISTER TOTAL
  tray.forEach((y) => {
    register += y;
    // register = Math.round(register * 100 + Number.EPSILON) / 100;
    // console.log(register)
    return register;
  });
  register = Math.round(register * 100 + Number.EPSILON) / 100

  console.log(register, diff)


  //STATUS & CHANGE
  if (register < diff) {
      console.log(register, diff)
    finalChange.status = "INSUFFICIENT_FUNDS";
    finalChange.change = `[]`;
    // console.log(finalChange.status, finalChange.cid)
    return finalChange;
  }
  if (register == diff) {
    finalChange.status = "CLOSED";
    finalChange.change = cid;
    return finalChange;
  }
  if (register > diff) {
    finalChange.status = "OPEN";
    // finalChange.change = findCoinNumber(purchase.price);
    // console.log(finalChange);
    return finalChange;
  }
  
  return finalChange;
} //end checkRegister

//TESTS

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); //{status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); //{status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) //{status: "INSUFFICIENT_FUNDS", change: []}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
