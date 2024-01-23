// https://leetcode.com/problems/single-number/description/


const singleNumber =(nums)=> {
    /*
    for (let idx =0; idx<nums.length; idx++){
        if(nums.indexOf(nums[idx]) === nums.lastIndexOf(nums[idx])){
            return nums[idx];
        }
    }
    Review : Above solution takes an time complexity of log(o^2) because we are using indexof and lastIndex
    Which will scan through the entry array again which increase the time complexity

     */
    // other solution

    /*

      let obj = {}
for (let i of nums) {
    if (!obj[i]) {
        obj[i] = 1
    } else
        obj[i]++
}
//console. Log (obj)
for (let i in obj) {
    if (obj[i] ==1)
        return i
}*/
    //other XOR

}

console.log(singleNumber([4,1,2,1,2]))