function checkCashRegister(price, cash, cid) {
  var finalChange = {
    status: "",
    change: [],
  };
  var num;
  var cid;
  var cash;
  var price;
  var tray = []; //the amount in each coin
  var register = 0; //the total amount in the register
  var diff = Math.abs(price - cash);
  var values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  // console.log(diff)
  var slot = [];
  // console.log(cid, "cid");

  //VALUES FOR EACH COIN TYPE
  for (var i in cid) {
    var x = cid[i][1];
    // console.log(x);
    tray.push(x);
    // return tray;
  }
  //ALTERATE VALUES/COIN TYPE
  // cid.forEach((x) => {
  //   tray.push([x]);
  //   return tray;
  // });
  console.log(tray, "tray");

  //HOW MANY OF EACH VALUE
  // for (let i = 0; i < tray.length; i++) {
  //   console.log(tray[i], values[i]);
  //   var num = Math.abs(tray[i] / values[i]);
  //   num = Math.round(num * 100 + Number.EPSILON) / 100;
  //   slot == slot.push(num);
  //   // return slot
  // }
  // console.log(slot, "slot: tray, values");

  //REGISTER TOTAL
  tray.forEach((y) => {
    register += y;
    return register;
  });
  register = Math.round(register * 100 + Number.EPSILON) / 100;
  console.log(register, tray, diff, "register tray diff");
  // console.log(register, diff, "register, diff")

  //PURCHASE
  function Purchase() {
    //create a new purchase
    (this.price = price),
      (this.cash = cash),
      (this.cid = cid),
      (this.diff = diff);
  }
  var purchase = new Purchase(); //new purchase instance
  purchase.price = price;
  purchase.cash = cash;
  purchase.cid = cid;
  purchase.diff = diff;
  console.log(purchase, "purchase");
  console.log(price, cash, diff, "price, cash, diff");

  //***DRAWER TALLY */
  //TALLY DRAWER
  function findCoinNumber(price) {
    //use diff to determine how many of each coin value are in the drawer and add a label to each
    function Drawer() {
      // coinName, totalAfterLeftover
      (this.coinName = ""), (this.totalAfterLeftover = 0);
    }
    var drawerArr = [];
    var totalAfterLeftover = null;
    var leftover = 0;
    var price;
    var newPrice;
    console.log(tray);
    var canSplit = true;

    //HUNDRED
    if ((leftover = Math.round((diff % 100) * 100) / 100)) {
      console.log(leftover, diff);
      //   var hundred = new Drawer();
      if (leftover == diff) {
        drawerArr = [];
      }
    }
    // console.log(drawerArr);

    //TWENTY
    var twenty = new Drawer();
    if ((leftover = Math.round((diff % 20) * 100) / 100)) {
      console.log(leftover, diff);
      if (leftover == diff) {
        drawerArr = [];
        canSplit = false;
      }
      if (leftover != diff && leftover != 0) {
        totalAfterLeftover =
          Math.round((diff - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
        newPrice =
          Math.round((diff - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //diff minus remainder
        if (totalAfterLeftover > tray[7]) {
          diff = totalAfterLeftover - tray[7];
          totalAfterLeftover = tray[7];
        }
        // console.log(totalAfterLeftover, diff,  tray[7], "left, 20")
        twenty.coinName = "TWENTY"; //coin name
        twenty.totalAfterLeftover = totalAfterLeftover; // total in coin value
        diff = Math.round((diff + newPrice) * 100 + Number.EPSILON) / 100; //diff minus remainder
        console.log(diff, newPrice);
        totalAfterLeftover = twenty.totalAfterLeftover;
        drawerArr.push(twenty);
        // console.log(leftover, totalAfterLeftover, "ttwenty");
        // console.log(tray[7])
        // console.log(twenty, diff, "new twentyt");
      }
    }
    console.log(diff);
    console.log(drawerArr);
    //TEN
    var ten = new Drawer();
    if ((leftover = Math.round((diff % 10) * 100) / 100)) {
      console.log(leftover, diff);
      if (leftover == diff) {
        drawerArr = [];
        canSplit = false;
      }
      if (leftover != diff && leftover != 0) {
        totalAfterLeftover =
          Math.round((diff - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
        newPrice =
          Math.round((diff - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //diff minus remainder
        if (totalAfterLeftover > tray[6]) {
          diff = totalAfterLeftover - tray[6];
          totalAfterLeftover = tray[6];
        }
        //       // console.log(totalAfterLeftover, diff,  tray[6], "left, 10")

        ten.coinName = "TEN"; //coin name
        ten.totalAfterLeftover = totalAfterLeftover; // total in coin value
        totalAfterLeftover = ten.totalAfterLeftover;
        diff = Math.round((diff + newPrice) * 100 + Number.EPSILON) / 100; //diff minus remainder
        drawerArr.push(ten);
        // console.log(leftover, totalAfterLeftover, "ten");
        // console.log(ten, diff, "new ten");
      }
    }
    console.log(diff);
    console.log(drawerArr);
    //FIVE
    if ((leftover = Math.round((diff % 5) * 100 + Number.EPSILON) / 100)) {
      console.log(leftover, diff);
      if (leftover == diff) {
        drawerArr = [];
        canSplit = false;
      }
      if (leftover != diff && leftover != 0) {
        var five = new Drawer();

        totalAfterLeftover =
          Math.round((diff - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
        newPrice =
          Math.round((diff - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //diff minus remainder
        if (totalAfterLeftover > tray[5]) {
          console.log(true);
          diff = Math.abs(totalAfterLeftover - tray[5]);
          console.log(diff);
          totalAfterLeftover = tray[5];
        }
        console.log(totalAfterLeftover, diff, tray[5], "left, 5");
        five.coinName = "FIVE"; //coin name
        five.totalAfterLeftover = totalAfterLeftover; //total coin value

        totalAfterLeftover = five.totalAfterLeftover;
        diff = newPrice;
        // newPrice = Math.round((diff + newPrice) * 100 + Number.EPSILON) / 100; //diff minus remainder
        console.log(diff, newPrice);
        drawerArr.push(five);
        // console.log(leftover, totalAfterLeftover, "FIVE");
        // console.log(five, diff, "new five");
      }
    }
    console.log(diff);
    console.log(drawerArr);
    //ONE
    if ((leftover = Math.round((diff % 1) * 100 + Number.EPSILON) / 100)) {
      console.log(leftover, diff);
      if (leftover == diff) {
        drawerArr = [];
        canSplit = false;
      }
      if (leftover != diff && leftover != 0) {
        var one = new Drawer();

        totalAfterLeftover =
          Math.round((diff - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
        newPrice =
          Math.round((diff - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //diff minus remainder
        // if()
        one.coinName = "ONE"; // coin name
        one.totalAfterLeftover = totalAfterLeftover; //coin total
        totalAfterLeftover = one.totalAfterLeftover;
        diff = newPrice;
        drawerArr.push(one);
        console.log(leftover, totalAfterLeftover, "ONE");
        // console.log(one, diff, "new one");
      }
    }
    // console.log(diff);
    // console.log(drawerArr);

    //QUARTER
    var quarter = new Drawer();
    if (diff != 0) {
      leftover = Math.round((diff % 0.25) * 100 + Number.EPSILON) / 100;

      if (tray[3] == 0) {
        drawerArr = [];
        console.log("tray = 0");
        console.log(tray[3]);
        if (tray[4] == 1) {
          drawerArr = [];
          console.log("tray4 = 1");
        }
      } else if (leftover == 0) {
        totalAfterLeftover =
          Math.round((diff - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
        newPrice =
          Math.round((diff - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //diff minus remainder
        quarter.coinName = "QUARTER"; //coin name
        quarter.totalAfterLeftover = totalAfterLeftover; //coin total
        totalAfterLeftover = quarter.totalAfterLeftover;
        diff = newPrice;
        console.log(leftover, totalAfterLeftover, "quarter");

        drawerArr.push(quarter);
      } else {
        totalAfterLeftover =
          Math.round((diff - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
        newPrice =
          Math.round((diff - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //diff minus remainder
        quarter.coinName = "QUARTER"; //coin name
        quarter.totalAfterLeftover = totalAfterLeftover; //coin total
        totalAfterLeftover = quarter.totalAfterLeftover;
        diff = newPrice;
        console.log(leftover, totalAfterLeftover, "quarter");

        drawerArr.push(quarter);
      }
    }
    // console.log(diff);
    // console.log(drawerArr);
    // console.log(leftover, diff, "quarter");

    //DIME
    var dime = new Drawer();
    if (diff != 0) {
      if (diff == 0) {
        drawerArr = [];

        console.log("dime diff 0");
      }
      if (tray[2] < diff) {
        drawerArr = [];
        console.log("dime tray 0");
      } else if (
        (leftover = Math.round((diff % 0.1) * 100 + Number.EPSILON) / 100)
      ) {
        console.log(leftover, diff);
        totalAfterLeftover =
          Math.round((diff - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
        newPrice =
          Math.round((diff - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //diff minus remainder
        console.log(diff, leftover);
        dime.coinName = "DIME"; // coin name
        dime.totalAfterLeftover = totalAfterLeftover; //coin total
        diff = newPrice;

        totalAfterLeftover = dime.totalAfterLeftover;
        drawerArr.push(dime);
      }
    }

    // console.log(diff);
    // console.log(drawerArr);
    // console.log(leftover, diff, "dime");

    //NICKEL
    var nickel = new Drawer();
    if (diff != 0) {
      console.log(diff);
      if (diff == 0) {
        drawerArr = [];
        console.log("nickel diff 0");
      }
      if (tray[1] < diff) {
        drawerArr = [];
        [console.log("nickel tray 0")];
      }
    }
    // console.log(diff);
    // console.log(drawerArr);
    // console.log(leftover, diff, "nickel");

    //PENNY
    var penny = new Drawer();
    if (diff != 0) {
      if(tray[0]< diff){
        drawerArr =[]
      }
      else {penny.coinName = "PENNY"; //coin name
      penny.totalAfterLeftover = diff; //coin total
      drawerArr.push(penny);}
    }
    // console.log(diff);
    // console.log(drawerArr);
    // console.log(leftover, diff, "penny");


    // finalChange.change = drawerArr;
    return drawerArr;
    // return finalChange.change;
  }
  //**STATUS & CHANGE */
  //STATUS & CHANGE
  if (register < diff) {
    //if register is less than difference
    console.log(findCoinNumber(purchase.price));
    finalChange.status = "INSUFFICIENT_FUNDS";
    finalChange.change = [];
    return finalChange;
  }
  if (register == diff) {
    //if register is equal to the difference
    finalChange.status = "CLOSED";
    finalChange.change = cid;
    return finalChange;
    // console.log(status)
  }
  if (register > diff) {
    //if register is greater than difference
    finalChange.status = "OPEN";
    finalChange.change = findCoinNumber(purchase.price);
    // console.log(finalChange);
    return finalChange;
  }

  // console.log(drawerArr, finalChange.status);
  // console.log(findCoinNumber(purchase.price));
  // console.log(purchase.diff);

  return finalChange;
}//END

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

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); //{status: "INSUFFICIENT_FUNDS", change: []}

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

