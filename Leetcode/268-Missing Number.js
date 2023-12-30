/*
* https://leetcode.com/problems/missing-number/description
* */

const missingNumber =(nums)=>{
    let set = new Set(nums);
    let missingNum = []
    for(let idx =1; idx<=nums.length; idx++){
        if(!set.has(idx)){
             missingNum.push(idx);
        }
    }
    return missingNum

}

console.log(missingNumber([4,3,2,7,8,2,3,1]))
//case 2
console.log(missingNumber([0,1]))
// case 3
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

