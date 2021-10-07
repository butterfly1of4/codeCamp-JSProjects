//N- 353: {status: "OPEN", change: [["QUARTER", 0.5]]},
//N- 367: {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]},
//N- 395: {status: "INSUFFICIENT_FUNDS", change: []}

//Y- 380: {status: "INSUFFICIENT_FUNDS", change: []}
//Y- 408: {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
function checkCashRegister(price, cash, cid) {
  var finalChange = {
    status: "",
    change: [],
  };

  var cid;
  var cash;
  var price;
  var changeAmounts = [];
  var drawerCoinTotal;
  var diff = Math.abs(price - cash);
  var register = 0;
  var coinValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  //REGISTER TOTAL
  for (var i in cid) {
    register += cid[i][1];
  }
  register = register.toFixed(2);
  console.log(register, cash, diff, "register cash diff");
  coinValues.forEach((x) => {
    changeAmounts.push(x);
    return changeAmounts;
  });

  //PURCHASE
  function Purchase() {
    (this.price = price),
      (this.cash = cash),
      (this.cid = cid),
      (this.diff = diff);
  }

  var purchase = new Purchase();
  purchase.price = price;
  purchase.cash = cash;
  purchase.cid = cid;
  purchase.diff = diff;
  console.log(purchase, "purchase");
  // console.log(
  //   purchase.price,
  //   purchase.cash,
  //   purchase.cid,
  //   purchase.diff,
  //   "price cash cid diff"
  // );

  //STATUS & CHANGE
  if (register < diff) {
    finalChange.status = "INSUFFICIENT_FUNDS";
    finalChange.change = [];
    return finalChange;
  }
  if (register == diff) {
    finalChange.status = "CLOSED";
    finalChange.change = cid;
    return finalChange;
    // console.log(status)
  }
  if (register > diff) {
    finalChange.status = "OPEN";
    finalChange.change = findCoinNumber(purchase.price);
    // console.log(finalChange);
    return finalChange;
  }
  console.log(Drawer);
  //TALLY DRAWER
  // function checkCashRegister(price, cash, cid) {
  //TALLY DRAWER
  function findCoinNumber(price) {
    //use price to determine how many of each coin value are in the drawer and add a label to each
    function Drawer() {
      // coinName, totalAfterLeftover
      (this.coinName = ""), (this.totalAfterLeftover = 0);
    }
    var drawerArr = [];
    var totalAfterLeftover = null;
    var leftover = null;
    var price;
    var newPrice;
    // = price - this.totalAfterLeftover;

    console.log(price, "14");

    //HUNDRED
    if ((leftover = Math.round((price % 100) * 100) / 100)) {
      //remainder
      // console.log(leftover, price);
      var hundred = new Drawer();
      // if (price > 100) {
      if (leftover != 0 && leftover < 100) {
        totalAfterLeftover =
          Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
        newPrice =
          Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
        hundred.coinName = "HUNDRED"; //coin name
        hundred.totalAfterLeftover = totalAfterLeftover; //total in coin value
        // console.log(hundred);
        totalAfterLeftover = hundred.totalAfterLeftover;
        price = newPrice;
        // console.log(price, "28");
      }
      drawerArr.push(hundred);
    }
    // console.log(drawerArr)

    //TWENTY
    if ((leftover = Math.round((price % 20) * 100) / 100)) {
      //remainder
      console.log(leftover, price);
      var twenty = new Drawer();
      if (price < 100 && price > 20) {
        // console.log(leftover)
        if (leftover != 0) {
          totalAfterLeftover =
            Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
          newPrice =
            Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) /
            100; //price minus remainder
          twenty.coinName = "TWENTY"; //coin name
          twenty.totalAfterLeftover = totalAfterLeftover; // total in coin value
          price = newPrice;
          totalAfterLeftover = twenty.totalAfterLeftover;
          // console.log(twenty,price, "not less");
          // console.log(price, "55");
        }
      } else {
        twenty.coinName = "TWENTY"; //coin name
        twenty.totalAfterLeftover = 0; // total in coin value
        price = newPrice;
      }
      drawerArr.push(twenty);
    }
    // console.log(drawerArr)
    // //TEN
    if ((leftover = Math.round((price % 10) * 100) / 100)) {
      // console.log(price, leftover);
      var ten = new Drawer();
      if (price < 20 && price > 10) {
        if (leftover != 0) {
          // console.log(leftover, "ten newprice");
          totalAfterLeftover =
            Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
          newPrice =
            Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) /
            100; //price minus remainder
          ten.coinName = "TEN"; //coin name
          ten.totalAfterLeftover = totalAfterLeftover; // total in coin value
          totalAfterLeftover = ten.totalAfterLeftover;
          price = newPrice;
        }
      } else {
        ten.coinName = "TEN";
        ten.totalAfterLeftover = 0;
        price = newPrice;
      }
      drawerArr.push(ten);
    }
    // console.log(drawerArr);

    // //FIVE
    if ((leftover = Math.round((price % 5) * 100 + Number.EPSILON) / 100)) {
      // console.log(leftover, price);
      var five = new Drawer();
      if (price < 10 && price > 5) {
        if (leftover != 0) {
          totalAfterLeftover =
            Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
          newPrice =
            Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) /
            100; //price minus remainder
          // console.log(newPrice);
          five.coinName = "FIVE"; //coin name
          five.totalAfterLeftover = totalAfterLeftover; //total coin value
          // console.log(five);
          totalAfterLeftover = five.totalAfterLeftover;
          price = newPrice;
          // console.log(price, totalAfterLeftover, "107");
        }
      } else {
        five.coinName = "FIVE";
        five.totalAfterLeftover = 0;
        price = newPrice;
        // console.log(price, "113");
      }
      drawerArr.push(five);
    }
    // console.log("after five", price);

    // //ONE
    if ((leftover = Math.round((price % 1) * 100 + Number.EPSILON) / 100)) {
      // console.log(price, leftover, "120");
      var one = new Drawer();
      // if (price == 0){
      //   one.coinName = "ONE";
      //   one.totalAfterLeftover = 0;
      //   price = newPrice;
      //   console.log(price, leftover, "140");
      // }
      if (price < 5 && price > 1) {
        // console.log(price, "125");
        if (leftover != 0) {
          totalAfterLeftover =
            Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
          newPrice =
            Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) /
            100; //price minus remainder
          one.coinName = "ONE"; // coin name
          one.totalAfterLeftover = totalAfterLeftover; //coin total
          totalAfterLeftover = one.totalAfterLeftover;
          price = newPrice;
          // console.log(price, leftover, "price,leftover");
        }
      } else {
        one.coinName = "ONE";
        one.totalAfterLeftover = 0;
        price = newPrice;
        // console.log(price, leftover, "146");
      }

      drawerArr.push(one);
    }
    // console.log(drawerArr);
    // console.log("after one");

    // //QUARTER
    if ((leftover = Math.round((price % 0.25) * 100 + Number.EPSILON) / 100)) {
      // console.log(price, leftover, "160");
      var quarter = new Drawer();
      if (price < 1 && price > 0.25) {
        if (leftover != 0) {
          totalAfterLeftover =
            Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
          newPrice =
            Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) /
            100; //price minus remainder
          quarter.coinName = "QUARTER"; //coin name
          quarter.totalAfterLeftover = totalAfterLeftover; //coin total
          totalAfterLeftover = quarter.totalAfterLeftover;
          price = newPrice;
          // console.log(newPrice, leftover, "155");
        }
      } else {
        quarter.coinName = "QUARTER";
        quarter.totalAfterLeftover = 0;
        price = newPrice;
        // console.log(newPrice, leftover, "162");
      }

      drawerArr.push(quarter);
    }
    // console.log(drawerArr);

    // //DIME
    if ((leftover = Math.round((price % 0.1) * 100 + Number.EPSILON) / 100)) {
      var dime = new Drawer();
      if (price < 0.25 && price > 0.1) {
        if (leftover != 0) {
          totalAfterLeftover =
            Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
          newPrice =
            Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) /
            100; //price minus remainder
          dime.coinName = "DIME"; // coin name
          dime.totalAfterLeftover = totalAfterLeftover; //coin total
          // console.log(dime);
          totalAfterLeftover = dime.totalAfterLeftover;
          price = newPrice;
          // console.log(price, leftover, "price,leftover");
        }
      } else {
        dime.coinName = "DIME";
        dime.totalAfterLeftover = 0;
        price = newPrice;
        // console.log(newPrice, leftover, "162");
      }
      drawerArr.push(dime);
    }
    // //NICKEL
    if ((leftover = Math.round((price % 0.05) * 100 + Number.EPSILON) / 100)) {
      // console.log(price);
      var nickel = new Drawer();
      if (price < 0.1 && price > 0.05) {
        if (leftover != 0) {
          totalAfterLeftover =
            Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
          newPrice =
            Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) /
            100; //price minus remainder
          nickel.coinName = "NICKEL"; //coin name
          nickel.totalAfterLeftover = totalAfterLeftover; //coin total

          totalAfterLeftover = nickel.totalAfterLeftover;
          price = newPrice;
        }
      } else {
        nickel.coinName = "NICKEL";
        nickel.totalAfterLeftover = 0;
        price = newPrice;
        // console.log(newPrice, leftover, "230");
      }
      drawerArr.push(nickel);
    }
    // //PENNY
    if ((leftover = price)) {
      var penny = new Drawer();
      if (price < 0.05) {
        if (leftover != 0) {
          // totalAfterLeftover =
          //   Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //÷total in coin
          penny.coinName = "PENNY"; //coin name
          penny.totalAfterLeftover = leftover; //coin total
        }
      } else {
        penny.coinName = "PENNY";
        penny.totalAfterLeftover = 0;
      }
      drawerArr.push(penny);
    }

    // console.log(drawerArr, "drawerarrg");

    return drawerArr;
    // return finalChange.change;
  }
  return finalChange;
}

//**current working 2/5 */
//function checkCashRegister(price, cash, cid) {
//   var finalChange = {
//     status: "",
//     change: [],
//   };
//   // var drawerChange = {
//   //   coinName: "",
//   //   drawerCoinTotal: null,
//   //   changeAmounts: null,
//   //   // totalCoinsInDrawer: drawerCoinTotal/changeAmounts
//   // }
//   var cid;
//   var cash;
//   var price;
//   var changeAmounts = [];
//   var drawerCoinTotal;
//   var diff = Math.abs(price - cash);
//   var register = 0;
//   var coinValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

//   // for(var x in coinValues){
//   //   changeAmounts = coinValues[x]
//   // }
//   //   console.log(changeAmounts)
//   // console.log(coinValues)
//   //REGISTER TOTAL
//   for (var i in cid) {
//     register += cid[i][1];
//   }
//   register = register.toFixed(2);
//   console.log(register, cash, diff, "register cash diff");
//   coinValues.forEach((x) => {
//     changeAmounts.push(x);
//     return changeAmounts;
//   });
//   // console.log(changeAmounts, "change amounts");
//   // cid.forEach((element) => {
//   //   drawerChange.coinName = element[0]
//   //   drawerChange.drawerCoinTotal = element[1]
//   //   drawerChange.changeAmounts = changeAmounts
//   //   // console.log(drawerChange)
//   //   return drawerChange
//   // });

//   //   console.log(cid)

//   //PURCHASE
//   function Purchase() {
//     (this.price = price), (this.cash = cash), (this.cid = cid);
//   }
//   //   class Purchase {
//   //   constructor(price, cash, cid) {
//   //     this.price = price;
//   //     this.cash = cash;
//   //     this.cid = cid;
//   //     this.diff = diff;
//   //     this.status = status
//   //     }
//   //   }
//   var purchase = new Purchase();
//   purchase.price = price;
//   purchase.cash = cash;
//   purchase.cid = cid;
//   console.log(purchase, "purchase");
//   console.log(purchase.price, purchase.cash, purchase.cid, "price cash cid");

//   //STATUS & CHANGE
//   if (register < diff) {
//     finalChange.status = "INSUFFICIENT_FUNDS";
//     finalChange.change = [];
//     return finalChange;
//   }
//   if (register == diff) {
//     finalChange.status = "CLOSED";
//     finalChange.change = cid;
//     return finalChange;
//     // console.log(status)
//   }
//   if (register > diff) {
//     finalChange.status = "OPEN";
//     finalChange.change = findCoinNumber(purchase.price);
//     console.log(finalChange);
//     return finalChange;
//   }

//   //TALLY DRAWER
//   function findCoinNumber(price) {
//     //use price to determine how many of each coin value are in the drawer and add a label to each
//     function Drawer() {
//       // coinName, totalAfterLeftover
//       (this.coinName = ""), (this.totalAfterLeftover = 0);
//     }
//     var drawerArr = [];
//     var totalAfterLeftover;
//     var leftover = 0;
//     var price = Math.round(price * 100 + Number.EPSILON) / 100;
//     var newPrice = price - this.totalAfterLeftover;

//     //HUNDRED
//     if (price > 100) {
//       leftover = price % 100; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//       newPrice =
//         Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//       var hundred = new Drawer();
//       hundred.coinName = "HUNDRED"; //coin name
//       hundred.totalAfterLeftover = totalAfterLeftover; //total in coin value
//       console.log(hundred);
//       price = newPrice;
//       totalAfterLeftover = hundred.totalAfterLeftover;
//       // console.log(price, totalAfterLeftover, "price,leftover");
//       drawerArr.push(hundred);
//     }

//     //TWENTY
//     if (price < 100 && price > 20) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 20) * 100) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var twenty = new Drawer();
//         twenty.coinName = "TWENTY"; //coin name
//         twenty.totalAfterLeftover = totalAfterLeftover; // total in coin value
//         console.log(twenty);
//         price = newPrice;
//         totalAfterLeftover = twenty.totalAfterLeftover;
//         // console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(twenty);
//     }

//     //TEN
//     if (price < 20 && price > 10) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 10) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var ten = new Drawer();
//         ten.coinName = "TEN"; //coin name
//         ten.totalAfterLeftover = totalAfterLeftover; // total in coin value
//         console.log(ten);
//         totalAfterLeftover = ten.totalAfterLeftover;
//         price = newPrice;
//         // console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(ten);
//     }

//     //FIVE
//     if (price < 10 && price > 5) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 5) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var five = new Drawer();
//         five.coinName = "FIVE"; //coin name
//         five.totalAfterLeftover = totalAfterLeftover; //total coin value
//         console.log(five);
//         totalAfterLeftover = five.totalAfterLeftover;
//         price = newPrice;
//         // console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(five);
//     }

//     //ONE
//     if (price < 5 && price > 1) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 1) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var one = new Drawer();
//         one.coinName = "ONE"; // coin name
//         one.totalAfterLeftover = totalAfterLeftover; //coin total
//         console.log(one);
//         totalAfterLeftover = one.totalAfterLeftover;
//         price = newPrice;
//         // console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(one);
//     }

//     //QUARTER
//     if (price < 1 && price > 0.25) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 0.25) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var quarter = new Drawer();
//         quarter.coinName = "QUARTER"; //coin name
//         quarter.totalAfterLeftover = totalAfterLeftover; //coin total
//         console.log(quarter);
//         totalAfterLeftover = quarter.totalAfterLeftover;
//         price = newPrice;
//         // console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(quarter);
//     }

//     //DIME
//     if (price < 0.25 && price > 0.1) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 0.1) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var dime = new Drawer();
//         dime.coinName = "DIME"; // coin name
//         dime.totalAfterLeftover = totalAfterLeftover; //coin total
//         console.log(dime);
//         totalAfterLeftover = dime.totalAfterLeftover;
//         price = newPrice;
//         // console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(dime);
//     }

//     //NICKEL
//     if (price < 0.1 && price > 0.05) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 0.05) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var nickel = new Drawer();
//         nickel.coinName = "NICKEL"; //coin name
//         nickel.totalAfterLeftover = totalAfterLeftover; //coin total
//         console.log(nickel);
//         totalAfterLeftover = nickel.totalAfterLeftover;
//         price = newPrice;
//         // console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(nickel);
//     }
//     //PENNY
//     if (price < 0.05) {
//       if (newPrice != 0) {
//         leftover = price; //remainder
//         // totalAfterLeftover =
//         //   Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //÷total in coin
//         var penny = new Drawer();
//         penny.coinName = "PENNY"; //coin name
//         penny.totalAfterLeftover = leftover; //coin total
//         console.log(penny);
//         console.log(price, "price,leftover");
//       }
//       drawerArr.push(penny);
//     }

//     console.log(drawerArr, "drawerarr");
//     return drawerArr;
//   }
//   return finalChange;
// }
// findCoinNumber(59.77);
///**end previous- 2/5  */
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
); //return object

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
);
//{status: "INSUFFICIENT_FUNDS", change: []}

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

//yes
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
);
//{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

//WORKING FUNCTIONS
// function findCoinNumber(price) {
//   //use price to determine how many of each coin value are in the drawer and add a label to each
//   function Drawer() {
//     // coinName, totalAfterLeftover
//     (this.coinName = ""), (this.totalAfterLeftover = 0);
//   }
//   var drawerArr = [];
//   var totalAfterLeftover;
//   var leftover = 0;
//   var price = Math.round(price * 100 + Number.EPSILON) / 100;
//   var newPrice = price - this.totalAfterLeftover;

//   //HUNDRED
//   if (price > 100) {
//     leftover = price % 100; //remainder
//     totalAfterLeftover =
//       Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//     newPrice =
//       Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//     var hundred = new Drawer();
//     hundred.coinName = "HUNDRED"; //coin name
//     hundred.totalAfterLeftover = totalAfterLeftover; //total in coin value
//     console.log(hundred);
//     price = newPrice;
//     totalAfterLeftover = hundred.totalAfterLeftover;
//     console.log(price, totalAfterLeftover, "price,leftover");
//     drawerArr.push(hundred);
//   }

//   //TWENTY
//   if (price < 100 && price > 20) {
//     if (newPrice != 0) {
//       leftover = Math.round((price % 20) * 100) / 100; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//       newPrice =
//         Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//       var twenty = new Drawer();
//       twenty.coinName = "TWENTY"; //coin name
//       twenty.totalAfterLeftover = totalAfterLeftover; // total in coin value
//       console.log(twenty);
//       price = newPrice;
//       totalAfterLeftover = twenty.totalAfterLeftover;
//       console.log(price, totalAfterLeftover, "price,leftover");
//     }
//     drawerArr.push(twenty);
//   }
//   //TEN
//   if (price < 20 && price > 10) {
//     if (newPrice != 0) {
//       leftover = Math.round((price % 10) * 100 + Number.EPSILON) / 100; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//       newPrice =
//         Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//       var ten = new Drawer();
//       ten.coinName = "TEN"; //coin name
//       ten.totalAfterLeftover = totalAfterLeftover; // total in coin value
//       console.log(ten);
//       totalAfterLeftover = ten.totalAfterLeftover;
//       price = newPrice;
//       console.log(price, totalAfterLeftover, "price,leftover");
//     }
//     drawerArr.push(ten);
//   }

//   //FIVE
//   if (price < 10 && price > 5) {
//     if (newPrice != 0) {
//       leftover = Math.round((price % 5) * 100 + Number.EPSILON) / 100; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//       newPrice =
//         Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//       var five = new Drawer();
//       five.coinName = "FIVE"; //coin name
//       five.totalAfterLeftover = totalAfterLeftover; //total coin value
//       console.log(five);
//       totalAfterLeftover = five.totalAfterLeftover;
//       price = newPrice;
//       console.log(price, totalAfterLeftover, "price,leftover");
//     }
//     drawerArr.push(five);
//   }

//   //ONE
//   if (price < 5 && price > 1) {
//     if (newPrice != 0) {
//       leftover = Math.round((price % 1) * 100 + Number.EPSILON) / 100; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//       newPrice =
//         Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//       var one = new Drawer();
//       one.coinName = "ONE"; // coin name
//       one.totalAfterLeftover = totalAfterLeftover; //coin total
//       console.log(one);
//       totalAfterLeftover = one.totalAfterLeftover;
//       price = newPrice;
//       console.log(price, totalAfterLeftover, "price,leftover");
//     }
//     drawerArr.push(one);
//   }

//   //QUARTER
//   if (price < 1 && price > 0.25) {
//     if (newPrice != 0) {
//       leftover = Math.round((price % 0.25) * 100 + Number.EPSILON) / 100; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//       newPrice =
//         Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//       var quarter = new Drawer();
//       quarter.coinName = "QUARTER"; //coin name
//       quarter.totalAfterLeftover = totalAfterLeftover; //coin total
//       console.log(quarter);
//       totalAfterLeftover = quarter.totalAfterLeftover;
//       price = newPrice;
//       console.log(price, totalAfterLeftover, "price,leftover");
//     }
//     drawerArr.push(quarter);
//   }

//   //DIME
//   if (price < 0.25 && price > 0.1) {
//     if (newPrice != 0) {
//       leftover = Math.round((price % 0.1) * 100 + Number.EPSILON) / 100; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//       newPrice =
//         Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//       var dime = new Drawer();
//       dime.coinName = "DIME"; // coin name
//       dime.totalAfterLeftover = totalAfterLeftover; //coin total
//       console.log(dime);
//       totalAfterLeftover = dime.totalAfterLeftover;
//       price = newPrice;
//       console.log(price, totalAfterLeftover, "price,leftover");
//     }
//     drawerArr.push(dime);
//   }

//   //NICKEL
//   if (price < 0.1 && price > 0.05) {
//     if (newPrice != 0) {
//       leftover = Math.round((price % 0.05) * 100 + Number.EPSILON) / 100; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//       newPrice =
//         Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//       var nickel = new Drawer();
//       nickel.coinName = "NICKEL"; //coin name
//       nickel.totalAfterLeftover = totalAfterLeftover; //coin total
//       console.log(nickel);
//       totalAfterLeftover = nickel.totalAfterLeftover;
//       price = newPrice;
//       console.log(price, totalAfterLeftover, "price,leftover");
//     }
//     drawerArr.push(nickel);
//   }
//   //PENNY
//   if (price < 0.05) {
//     if (newPrice != 0) {
//       leftover = price; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //÷total in coin
//       var penny = new Drawer();
//       penny.coinName = "PENNY"; //coin name
//       penny.totalAfterLeftover = leftover; //coi total
//       console.log(penny);
//       console.log(price, totalAfterLeftover, "price,leftover");
//     }
//     drawerArr.push(penny);
//   }
//   console.log(drawerArr);
//   return drawerArr;
// }
// //Previous***
// function checkCashRegister(price, cash, cid) {
//   var finalChange = {
//     status: "",
//     change: []
// }
// var drawerChange = {
//   coinName: "",
//   drawerCoinTotal: null,
//   changeAmounts: null,
//   // totalCoinsInDrawer: drawerCoinTotal/changeAmounts
// }
// var status
// var change = []
// var coinName
// var changeAmounts =[]
// var drawerCoinTotal
// var diff = Math.abs(price-cash);
// var register = 0;
// var coinValues = [.01, .05, .1, .25, 1, 5, 10, 20, 100 ]

// // for(var x in coinValues){
// //   changeAmounts = coinValues[x]
// // }
// //   console.log(changeAmounts)
// // console.log(coinValues)
// //REGISTER TOTAL
// for (var i in cid){
//     register += cid[i][1]
// }
// register = register.toFixed(2)
//   console.log(register, cash, diff)
// coinValues.forEach((x) => {
//   changeAmounts.push(x)
//   return changeAmounts
// })
// console.log(changeAmounts)
// // cid.forEach((element) => {
// //   drawerChange.coinName = element[0]
// //   drawerChange.drawerCoinTotal = element[1]
// //   drawerChange.changeAmounts = changeAmounts
// //   // console.log(drawerChange)
// //   return drawerChange
// // });

// //   console.log(cid)
// //STATUS & CHANGE
//   if(register < diff ){
//    finalChange.status = "INSUFFICIENT_FUNDS"
//    finalChange.change= []
//    return finalChange

//   }
//   if(register == diff){
//     finalChange.status = "CLOSED"
//     finalChange.change = cid
//     return finalChange
//     // console.log(status)
//   } if(register > diff){
//     finalChange.status = "OPEN";
//     finalChange.change = findCoinNumber(price)
//     return finalChange
//   }
// //PURCHASE
//     class Purchase {
//     constructor(price, cash, cid) {
//       this.price = price;
//       this.cash = cash;
//       this.cid = cid;
//       this.diff = diff;
//       this.status = status
//       }
//     }
//   var purchase = new Purchase(price, cash, cid,status);
//   console.log(purchase)

//   //TALLY DRAWER
//   function findCoinNumber(price) {
//     //use price to determine how many of each coin value are in the drawer and add a label to each
//     function Drawer() {
//       // coinName, totalAfterLeftover
//       (this.coinName = ""), (this.totalAfterLeftover = 0);
//     }
//     var drawerArr = [];
//     var totalAfterLeftover;
//     var leftover = 0;
//     var price = Math.round(price * 100 + Number.EPSILON) / 100;
//     var newPrice = price - this.totalAfterLeftover;

//     //HUNDRED
//     if (price > 100) {
//       leftover = price % 100; //remainder
//       totalAfterLeftover =
//         Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//       newPrice =
//         Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//       var hundred = new Drawer();
//       hundred.coinName = "HUNDRED"; //coin name
//       hundred.totalAfterLeftover = totalAfterLeftover; //total in coin value
//       console.log(hundred);
//       price = newPrice;
//       totalAfterLeftover = hundred.totalAfterLeftover;
//       console.log(price, totalAfterLeftover, "price,leftover");
//       drawerArr.push(hundred);
//     }

//     //TWENTY
//     if (price < 100 && price > 20) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 20) * 100) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var twenty = new Drawer();
//         twenty.coinName = "TWENTY"; //coin name
//         twenty.totalAfterLeftover = totalAfterLeftover; // total in coin value
//         console.log(twenty);
//         price = newPrice;
//         totalAfterLeftover = twenty.totalAfterLeftover;
//         console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(twenty);
//     }
//     //TEN
//     if (price < 20 && price > 10) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 10) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var ten = new Drawer();
//         ten.coinName = "TEN"; //coin name
//         ten.totalAfterLeftover = totalAfterLeftover; // total in coin value
//         console.log(ten);
//         totalAfterLeftover = ten.totalAfterLeftover;
//         price = newPrice;
//         console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(ten);
//     }

//     //FIVE
//     if (price < 10 && price > 5) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 5) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var five = new Drawer();
//         five.coinName = "FIVE"; //coin name
//         five.totalAfterLeftover = totalAfterLeftover; //total coin value
//         console.log(five);
//         totalAfterLeftover = five.totalAfterLeftover;
//         price = newPrice;
//         console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(five);
//     }

//     //ONE
//     if (price < 5 && price > 1) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 1) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var one = new Drawer();
//         one.coinName = "ONE"; // coin name
//         one.totalAfterLeftover = totalAfterLeftover; //coin total
//         console.log(one);
//         totalAfterLeftover = one.totalAfterLeftover;
//         price = newPrice;
//         console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(one);
//     }

//     //QUARTER
//     if (price < 1 && price > 0.25) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 0.25) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var quarter = new Drawer();
//         quarter.coinName = "QUARTER"; //coin name
//         quarter.totalAfterLeftover = totalAfterLeftover; //coin total
//         console.log(quarter);
//         totalAfterLeftover = quarter.totalAfterLeftover;
//         price = newPrice;
//         console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(quarter);
//     }

//     //DIME
//     if (price < 0.25 && price > 0.1) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 0.1) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var dime = new Drawer();
//         dime.coinName = "DIME"; // coin name
//         dime.totalAfterLeftover = totalAfterLeftover; //coin total
//         console.log(dime);
//         totalAfterLeftover = dime.totalAfterLeftover;
//         price = newPrice;
//         console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(dime);
//     }

//     //NICKEL
//     if (price < 0.1 && price > 0.05) {
//       if (newPrice != 0) {
//         leftover = Math.round((price % 0.05) * 100 + Number.EPSILON) / 100; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //total in coin value
//         newPrice =
//           Math.round((price - totalAfterLeftover) * 100 + Number.EPSILON) / 100; //price minus remainder
//         var nickel = new Drawer();
//         nickel.coinName = "NICKEL"; //coin name
//         nickel.totalAfterLeftover = totalAfterLeftover; //coin total
//         console.log(nickel);
//         totalAfterLeftover = nickel.totalAfterLeftover;
//         price = newPrice;
//         console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(nickel);
//     }
//     //PENNY
//     if (price < 0.05) {
//       if (newPrice != 0) {
//         leftover = price; //remainder
//         totalAfterLeftover =
//           Math.round((price - leftover) * 100 + Number.EPSILON) / 100; //÷total in coin
//         var penny = new Drawer();
//         penny.coinName = "PENNY"; //coin name
//         penny.totalAfterLeftover = leftover; //coi total
//         console.log(penny);
//         console.log(price, totalAfterLeftover, "price,leftover");
//       }
//       drawerArr.push(penny);
//     }
//     console.log(drawerArr);
//     return drawerArr;
//   }
//   return finalChange;
// }

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// ); //return object

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// ); //{status: "OPEN", change: [["QUARTER", 0.5]]}

// console.log(
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// ); //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); //{status: "INSUFFICIENT_FUNDS", change: []}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); //{status: "INSUFFICIENT_FUNDS", change: []}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
