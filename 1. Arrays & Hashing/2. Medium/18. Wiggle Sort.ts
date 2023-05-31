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
    // the idea of having a less than instead of <= in the for loop is because , we will encounter cases like "nums[i] > nums[i+1]", this condition will fail and give inconsistent results, Hence we make sure, we follow a strict less than.
	
	// the idea basically is to sort your array in a wave format. (Crest should have the higher value and trough should have the lower value. crests are the even indices and troughs are the odd ones. All we need to make sure, is we will make a swap if the value of trough is greater than the value of crest.
	
    for(let i = 0; i < nums.length-1; i++) {
    }
};

console.log(wiggleSort([3,5,2,1,6,4])) // [3,5,1,6,2,4]
console.log(wiggleSort([6,6,5,6,3,8])) // [6,6,5,6,3,8]