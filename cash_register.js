const money = [
  {name: 'ONE HUNDRED', value: 100.00},
  {name: 'TWENTY', value: 20.00},
  {name: 'TEN', value: 10.00},
  {name: 'FIVE', value: 5.00},
  {name: 'ONE', value: 1.00},
  {name: 'QUARTER', value: 0.25},
  {name: 'DIME', value: 0.10},
  {name: 'NICKEL', value: 0.05},
  {name: 'PENNY', value: 0.01}
];

const REGISTER_STATUS = {
  closed: 'CLOSED',
  insufficientFunds: 'INSUFFICIENT_FUNDS',
  open: 'OPEN'
}

/**
 * 
 * @param {Number} price 
 * @param {Number} cash 
 * @param {Array} cid 
 */
function checkCashRegister(price, cash, cid) {

  let change = cash - price;

  let totalFunds = cid.reduce( (total, next) => {
    return total + next[1];
  }, 0.0);

  if (totalFunds < change) {
    return {
      status: REGISTER_STATUS.insufficientFunds, 
      change: []
    };
  } else if (totalFunds === change) {
    return {
      status: REGISTER_STATUS.closed, 
      change: cid
    };
  }

  cid = cid.reverse();

  let result = money.reduce( (total, next, index) => {
    if (change >= next.value) {
      let currentValue = 0.0;
      while (change >= next.value && cid[index][1] >= next.value) {
        currentValue += next.value;
        change -= next.value;
        change = Math.round(change * 100) / 100;
        cid[index][1] -= next.value;
      }
      total.push([next.name, currentValue])
      return total;
    } else {
      return total;
    }
  }, []);

  if (result.length > 0 && change === 0) {
    return {
      status: REGISTER_STATUS.open,
      change: result
    }
  } else {
    return {
      status: REGISTER_STATUS.insufficientFunds, 
      change: []
    };
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));