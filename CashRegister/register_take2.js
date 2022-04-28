function checkCashRegister(price, cash, cid) {
  var finalChange = {
    status: "",
    change: [],
  };

  var cid;
  var cash;
  var price;
  var registerChange
  var tray = [];
  var register = 0;
  var diff = Math.abs(price - cash);

  console.log(cid);
  //REGISTER TOTAL
  function totalRegister() {
    cid.forEach((y) => {
      tray.push(y[1]);
      return tray;
    });
    tray.forEach((x) => {
      register += x;
      register = Math.round(register * 100 + Number.EPSILON) / 100;
      return register;
    });
  }
  totalRegister();
  console.log(tray);
  console.log(price, cash, diff);
  console.log(register);



  //what is still left to divide out
  var distanceBetween;
  //remainder after modulus
  var leftover;
  //amount still left after change taken out
  var runningTotal;
  //DETERMINE CHANGE FROM REGISTER
  function computeChange() {
    runningTotal = Math.round(diff * 100 + Number.EPSILON) / 100;
    if (diff == 0 || runningTotal == 0) {
      return finalChange;
    }
    //100
    if (diff > 100) {
      console.log("over 100");
      leftover = Math.round((diff % 100) * 100) / 100;
      distanceBetween = diff - leftover;
      distanceBetween =
        Math.round(distanceBetween * 100 + Number.EPSILON) / 100;
      if (distanceBetween != 0) {
        cid[8][1] = tray[8] - distanceBetween;
        finalChange.change.push(cid[8]);
      }
      console.log(distanceBetween, runningTotal, leftover);
      runningTotal = Math.round(leftover * 100 + Number.EPSILON) / 100;
    }
    console.log(runningTotal);
    //20
    if (diff > 20 || runningTotal > 20) {
      console.log("over 20");
      leftover = Math.round((runningTotal % 20) * 100) / 100;
      distanceBetween = runningTotal - leftover;
      distanceBetween =
        Math.round(distanceBetween * 100 + Number.EPSILON) / 100;
      console.log(distanceBetween, runningTotal, leftover);
      if (distanceBetween != 0) {
        if (distanceBetween > tray[7]) {
          distanceBetween -= tray[7];
          cid[7][1] = tray[7];
          leftover += distanceBetween;
        } else {
          cid[7][1] = distanceBetween;
        }
        finalChange.change.push(cid[7]);
      }
      runningTotal = Math.round(leftover * 100 + Number.EPSILON) / 100;
    }
    console.log(runningTotal);
    //10
    if (diff > 10 || runningTotal > 10) {
      console.log("over 10");
      leftover = Math.round((runningTotal % 10) * 100) / 100;
      distanceBetween = runningTotal - leftover;
      distanceBetween =
        Math.round(distanceBetween * 100 + Number.EPSILON) / 100;
      console.log(distanceBetween, runningTotal, leftover);
      if (distanceBetween != 0) {
        if (distanceBetween > tray[6]) {
          cid[6][1] = tray[6];
          distanceBetween -= tray[6];
          leftover += distanceBetween;
        } else {
          cid[6][1] = distanceBetween;
        }
        finalChange.change.push(cid[6]);
      }
      runningTotal = Math.round(leftover * 100 + Number.EPSILON) / 100;
    }
    console.log(runningTotal);
    //5
    if (diff > 5 || runningTotal > 5) {
      console.log("over 5");
      leftover = Math.round((runningTotal % 5) * 100) / 100;
      distanceBetween = runningTotal - leftover;
      distanceBetween =
        Math.round(distanceBetween * 100 + Number.EPSILON) / 100;
      console.log(distanceBetween, runningTotal, leftover);
      if (distanceBetween != 0) {
        if (distanceBetween > tray[5]) {
          distanceBetween -= tray[5];
          cid[5][1] = tray[5];
          leftover += distanceBetween;
        } else {
          cid[5][1] = distanceBetween;
        }
        finalChange.change.push(cid[5]);
      }
      runningTotal = Math.round(leftover * 100 + Number.EPSILON) / 100;
    }
    console.log(runningTotal);

    //1
    if (diff > 1 || runningTotal > 1) {
      console.log("over 1");
      leftover = Math.round((runningTotal % 1) * 100) / 100;
      if(leftover = 0 && tray[3] <= .75){
        console.log("Nope")
      }
      distanceBetween = runningTotal - leftover;
      distanceBetween =
        Math.round(distanceBetween * 100 + Number.EPSILON) / 100;
      console.log(
        distanceBetween,
        runningTotal,
        leftover,
        tray[4] - distanceBetween
      );
      if (distanceBetween != 0) {
        if (distanceBetween > tray[4]) {
          distanceBetween -= tray[4];
          cid[4][1] = tray[4];
          leftover += distanceBetween;
        } else {
          cid[4][1] = distanceBetween;
        }
        finalChange.change.push(cid[4]);
      }
      runningTotal = Math.round(leftover * 100 + Number.EPSILON) / 100;
    }
    console.log(runningTotal);

    if(diff >= .5 || runningTotal >= .5){
      console.log("fifty cents")
      if(tray[3] < .5){
        console.log("no 3")
        finalChange.status = "INSUFFICIENT_FUNDS";
        finalChange.change = [];
      }
    }
    //.25
    if (diff > 0.25 || runningTotal > 0.25) {
      console.log("over .25");
      leftover = Math.round((runningTotal % 0.25) * 100) / 100;
      
      distanceBetween = runningTotal - leftover;
      distanceBetween =
        Math.round(distanceBetween * 100 + Number.EPSILON) / 100;
      console.log(distanceBetween, runningTotal, leftover);
      if (distanceBetween != 0) {
        if (distanceBetween > tray[3]) {
          distanceBetween -= tray[3];
          cid[3][1] = tray[3];
          leftover += distanceBetween;
        } else {
          cid[3][1] = distanceBetween;
        }
        finalChange.change.push(cid[3]);
      }
      runningTotal = Math.round(leftover * 100 + Number.EPSILON) / 100;
    }
    console.log(runningTotal);

    //.10
    if (diff > 0.1 || runningTotal > 0.1) {
      console.log("over .10");
      leftover = Math.round((runningTotal % 0.1) * 100) / 100;
      distanceBetween = runningTotal - leftover;
      distanceBetween =
        Math.round(distanceBetween * 100 + Number.EPSILON) / 100;
      console.log(distanceBetween, runningTotal, leftover);
      if (distanceBetween != 0) {
        if (distanceBetween > tray[2]) {
          distanceBetween -= tray[2];
          console.log(distanceBetween);
          cid[2][1] = tray[2];
          leftover += distanceBetween;
        } else {
          cid[2][1] = distanceBetween;
        }
        finalChange.change.push(cid[2]);
      }
      runningTotal = Math.round(leftover * 100 + Number.EPSILON) / 100;
    }
    console.log(runningTotal);

    //.05
    if (runningTotal > 0.05) {
      console.log("over .05");
      leftover = Math.round((runningTotal % 0.05) * 100) / 100;
      console.log(leftover);
      distanceBetween = runningTotal - leftover;
      finalChange.change.push(cid[1]);
      runningTotal = Math.round(leftover * 100 + Number.EPSILON) / 100;
    }
    console.log(runningTotal);
    if (runningTotal <= 0.04) {
      if (runningTotal == 0) {
        finalChange.change;
      } else {
        cid[0][1] = runningTotal;
        finalChange.change.push(cid[0]);
      }
    }
    return finalChange.change;
  }
  computeChange();

  function changeCheck(){
    for(let i = 4; i >0; i--){
        registerChange+=tray[i]
        console.log(registerChange)
    }
  }
changeCheck()
  //STATUS & CHANGE
  function findStatus() {
    if (register < diff) {
      console.log(register, diff);
      finalChange.status = "INSUFFICIENT_FUNDS";
      finalChange.change = [];
      return finalChange;
    }
    if (register == diff) {
      finalChange.status = "CLOSED";
      finalChange.change = cid;
      return finalChange;
    }
    if (register > diff) {
      finalChange.status = "OPEN";
      // computeChange();
      // finalChange.change = [];
      return finalChange;
    }
  }

  findStatus();


  console.log(finalChange);
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
  checkCashRegister(3.26, 200, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 200],
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
