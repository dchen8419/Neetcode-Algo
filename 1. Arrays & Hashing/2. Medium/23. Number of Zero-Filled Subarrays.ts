// Given an integer array nums, return the number of subarrays filled with 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Explanation: 
// There are 4 occurrences of [0] as a subarray.
// There are 2 occurrences of [0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
// Example 2:

// Input: nums = [0,0,0,2,0,0]
// Output: 9
// Explanation:
// There are 5 occurrences of [0] as a subarray.
// There are 3 occurrences of [0,0] as a subarray.
// There is 1 occurrence of [0,0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.
// Example 3:

// Input: nums = [2,10,2019]
// Output: 0
// Explanation: There is no subarray filled with 0. Therefore, we return 0.

var zeroFilledSubarray = function(nums: number[]) {
    //Intuition
    //The contribution of a single zero to the total sum is directly proportional to its index in teh subsequences of zeros
    //Approach
    //For every num if it's equal to zero we need to increase the length of the current subsequence of zero by 1
    // and add this length to each iteration of the final sum.
    //Otherwise, set the length of the current subsequnce to 0


    // create two variables where one is count and the other is the length
    let count = 0;
    let length = 0;
    //Create a for loop
    for ( let i = 0; i < nums.length; i ++ ) {
        //if the element is zero
        if ( nums[i] === 0) {
            
        }
    }
};

console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4])) // 6
console.log(zeroFilledSubarray([0,0,0,2,0,0])) // 9
console.log(zeroFilledSubarray([2,10,2019])) // 0


