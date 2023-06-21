// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.

// Example 1:

// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.
// Example 2:

// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

var minimumDifference = function(nums: number[], k: number) {
    //first sort the array from smallest to largest and this will modify original array
    nums.sort((a,b) => a-b);
    //this is an edge case where if the k value is equal to 1 we will always return 0
    if ( k === 1) {
        return 0;
    }
    //declare a variable that will hold the length of the array
    let n = nums.length;
    //declare a variable for infinity
    let res = Infinity;
    //for loop through the length but subtract the k number and increment by 1
    for ( let i = 0; i <= n - k; i ++ ) {
        //reassign res to the mininum of the res and nums of nums[i + k -1] - nums[i]
        res = Math.min(res, nums[i+k-1] - nums[i])
    }
    // return the res
    return res
};

console.log(minimumDifference([90], 1)) //0
console.log(minimumDifference([9,4,1,7], 2)) // 2