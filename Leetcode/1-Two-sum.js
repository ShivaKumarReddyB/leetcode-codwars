// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {

    //Brute Force
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i+1; j < nums.length; j++) {
  //      if( nums[i] + nums[j]  === target) {
  //        return [i, j]
  //      }
  //   }
  // }

    /* Two pointer this will only if the data is sorted */

    // let p1 = 0;
    // let p2  = nums.length-1
    //
    // while (p1<p2){
    //     if(nums[p1]+nums[p2] === target){
    //         return[ p1, p2]
    //     } else if(nums[p1]+nums[p2]<target){
    //         p1++
    //     } else {
    //         p2--
    //     }
    // }

    /* hash map */

    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }

        numIndices[nums[i]] = i;
    }





};

console.log(twoSum([3,2,4], 6));
