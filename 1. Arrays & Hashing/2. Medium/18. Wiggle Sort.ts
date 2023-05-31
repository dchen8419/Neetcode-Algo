// Given an integer array nums, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

// You may assume the input array always has a valid answer.



// Example 1:

// Input: nums = [3,5,2,1,6,4]
// Output: [3,5,1,6,2,4]
// Explanation: [1,6,2,5,3,4] is also accepted.
// Example 2:

// Input: nums = [6,6,5,6,3,8]
// Output: [6,6,5,6,3,8]

var wiggleSort = function(nums: number[]) {
    // if num array is of length 0 or of length 2 
    if(!nums.length || nums.length < 2) {
        return nums;
    }

};

console.log(wiggleSort([3,5,2,1,6,4])) // [3,5,1,6,2,4]
console.log(wiggleSort([6,6,5,6,3,8])) // [6,6,5,6,3,8]