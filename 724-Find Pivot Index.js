/*
 * leet code  https://leetcode.com/problems/find-pivot-index/
 */

var pivotIndex = function (nums) {
  const total = nums.reduce((prev, current) => prev + current); // total sum
  let leftIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (total - leftIndex - nums[i] === leftIndex) {
      // condition check
      return i;
    }
    leftIndex += nums[i]; // incrementing  leftSum
  }

  return -1;
};

/**
 * to find the sum pivot of an  array we are first calculating the total sum
 * then  total sum - leftSum - array[idx] === leftSum if not  leftSum + array[idx]
 *
 *
 */
