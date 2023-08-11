/*
 * leet code  https://leetcode.com/problems/running-sum-of-1d-array/
 */

var runningSum = function (nums) {
  let sum = 0;
  return nums.map((val) => {
    return (sum = sum + val);
  });
};
