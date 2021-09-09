/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    var newNums = nums.sort((a,b)=>{
        return b-a;
    })
    return newNums[k-1];
};
var result = findKthLargest([5,8,4,9,7,3],3);
// [9, 8, 7, 5, 4, 3]
console.log(result);// 7