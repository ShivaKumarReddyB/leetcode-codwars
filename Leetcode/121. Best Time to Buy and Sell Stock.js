// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

const maxProfit =(prices)=> {
//     let lowestPrice = prices[0];
//     let lowestPriceIdx = 0;
//     let highestPrice = lowestPrice;
//
//     for (let i =1; i<prices.length; i++) {
//        if(lowestPrice > prices[i]){
//            lowestPrice = prices[i];
//            highestPrice = prices[i];
//            lowestPriceIdx = i;
//        }
//     }
//     for (let i =lowestPriceIdx; i<prices.length; i++) {
//         if(highestPrice < prices[i]){
//             highestPrice = prices[i];
//             // lowestPriceIdx = i;
//         }
//     }
// return  highestPrice - lowestPrice
    // this is not working because they are asking th profit not highest number
let  lowestPrice = prices[0];
let highestPrice = 0;

for (let i=0; i<prices.length; i++){
    lowestPrice = Math.min(prices[i], lowestPrice);
    highestPrice = Math.max(highestPrice, prices[i]-lowestPrice)

}
return highestPrice

}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))