// https://leetcode.com/problems/single-number/description/


const singleNumber =(nums)=> {
    for (let idx =0; idx<nums.length; idx++){
        if(nums.indexOf(nums[idx]) === nums.lastIndexOf(nums[idx])){
            return nums[idx];
        }
    }
}

console.log(singleNumber([4,1,2,1,2]))