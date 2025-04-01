class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let numsMap = {};
    for (let i = 0; i < nums.length; i++) {
      numsMap[nums[i]] = (numsMap[nums[i]] || 0) + 1;
    }
    let freqArray = Object.entries(numsMap);
    freqArray.sort((a, b) => b[1] - a[1]);
    let output = [];
    for (let i = 0; i < k; i++) {
      output.push(parseInt(freqArray[i][0]));
    }

    return output;
  }
}

const solution = new Solution();
console.log(solution.topKFrequent([1, 1, 1, 2, 2, 3], 2));
