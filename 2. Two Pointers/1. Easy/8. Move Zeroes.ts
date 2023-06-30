// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums: number[]) {
    //create a new variable that can hold whole numbers and a new varabile to hold zeros
    let wholeNum: number[] = [];
    let zeroNum: number[] = [];
    //loop through array
        //check if nums[i] is a number
        //check if nums[i] is a zero
    //return concatted of both arrays
};

console.log(moveZeroes([0,1,0,3,12])) //[1,3,12,0,0]
console.log(moveZeroes([0])) //[0]