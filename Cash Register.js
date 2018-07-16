function checkCashRegister(price, cash, cid) {
  var changeObj = {status: 'TBD', change: []};
  let totalCid = Math.round(cid.map(deno => deno[1]).reduce((firstDeno, secondDeno) => firstDeno + secondDeno)*100)/100;
  let changeDue = cash - price;
  if (changeDue > totalCid) {
    changeObj.status = 'INSUFFICIENT_FUNDS';
    changeObj.change = [];
  }
  else if (changeDue == totalCid) {
    changeObj.status = 'CLOSED';
    changeObj.change = cid;
  }
  else {
    changeObj.status = 'OPEN';
    let changeArray = cid.slice(0).reverse();
    let finalChangeArray = [[ 'ONE HUNDRED', 0 ],
    [ 'TWENTY', 0 ],
    [ 'TEN', 0 ],
    [ 'FIVE', 0 ],
    [ 'ONE', 0 ],
    [ 'QUARTER', 0 ],
    [ 'DIME', 0 ],
    [ 'NICKEL', 0 ],
    [ 'PENNY', 0 ]];
    while (changeDue >= 100 && changeArray[0][1] >= 100) {
      changeDue = changeDue - 100;
      changeArray[0][1] = changeArray[0][1] - 100;
      finalChangeArray[0][1] = finalChangeArray[0][1] + 100;
    }
    while (changeDue >= 20 && changeArray[1][1] >= 20) {
      changeDue = changeDue - 20;
      changeArray[1][1] = changeArray[1][1] - 20;
      finalChangeArray[1][1] = finalChangeArray[1][1] + 20;
    }
    while (changeDue >= 10 && changeArray[2][1] >= 10) {
      changeDue = changeDue - 10;
      changeArray[2][1] = changeArray[2][1] - 10;
      finalChangeArray[2][1] = finalChangeArray[2][1] + 10;
    }
    while (changeDue >= 5 && changeArray[3][1] >= 5) {
      changeDue = changeDue - 5;
      changeArray[3][1] = changeArray[3][1] - 5;
      finalChangeArray[3][1] = finalChangeArray[3][1] + 5;
    }
    while (changeDue >= 1 && changeArray[4][1] >= 1) {
      changeDue = changeDue - 1;
      changeArray[4][1] = changeArray[4][1] - 1;
      finalChangeArray[4][1] = finalChangeArray[4][1] + 1;
    }
    while (changeDue >= .25 && changeArray[5][1] >= .25) {
      changeDue = changeDue - .25;
      changeArray[5][1] = changeArray[5][1] - .25;
      finalChangeArray[5][1] = finalChangeArray[5][1] + .25;
    }
    while (changeDue >= .1 && changeArray[6][1] >= .1) {
      changeDue = changeDue - .1;
      changeArray[6][1] = changeArray[6][1] - .1;
      finalChangeArray[6][1] = finalChangeArray[6][1] + .1;
    }
    while (changeDue >= .05 && changeArray[7][1] >= .05) {
      changeDue = changeDue - .05;
      changeArray[7][1] = changeArray[7][1] - .05;
      finalChangeArray[7][1] = finalChangeArray[7][1] + .05;
    }
    while (changeDue >= .01 && changeArray[8][1] >= .01) {
      changeDue = changeDue - .01;
      changeArray[8][1] = changeArray[8][1] - .01;
      finalChangeArray[8][1] = finalChangeArray[8][1] + .01;
      changeDue = Math.round(changeDue * 100) / 100; // why do I need to do this! it is off by  like 1/10000
    }
    if (changeDue > 0) {
      console.log("insufficient_details", finalChangeArray.filter(deno => deno[1] > 0), "badChangeDue", changeDue);
      changeObj.status = 'INSUFFICIENT_FUNDS';
      changeObj.change = [];
    }
    else {
      changeObj.change = finalChangeArray.filter(deno => deno[1] > 0);
    }
  };
  return changeObj;
}

console.log('answer', checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);