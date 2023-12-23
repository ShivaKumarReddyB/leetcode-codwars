

const merge =(nums1, m, nums2, n) => {
    nums1.concat(nums2).filter(val => val !==0 ).sort();
    console.log(nums1)

}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6],3))
console.log(merge([0], 3, [1],3))