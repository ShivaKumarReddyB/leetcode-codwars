/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

const maxProfit = (price) => {
  let maxReturns = 0;
  let left = 0;
  let right = 1;
  while (right < price.length) {
    if (price[left] < price[right]) {
      let profit = price[right] - price[left];
      maxReturns = Math.max(profit, maxReturns);
    } else {
      left = right;
    }
    right += 1;
  }

  return maxReturns;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
