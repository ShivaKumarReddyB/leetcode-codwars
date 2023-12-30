/*
*
* https://leetcode.com/problems/contains-duplicate/*/


const containsDuplicate=(nums) => {
    /*  this solution run time is high for larger inputs
    let bol=false

    for (let idx =0; idx<nums.length; idx++){
         if(nums.indexOf(nums[idx]) !== nums.lastIndexOf(nums[idx])){
             bol=true
         };

    }
    return bol;*/

    let set = new Set(nums);
    return set.size !== nums.length;
}

console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([0,4,5,0,3,6]))
console.log(containsDuplicate([2,14,18,22,22]))