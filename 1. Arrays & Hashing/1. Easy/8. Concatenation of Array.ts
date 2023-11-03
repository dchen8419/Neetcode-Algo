// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

var getConcatenation = function(nums: number[]) {
    //create a varaible that will hold the length of the original nums
    let numsLength = nums.length;
    //create a variable for i
    let i = 0
    //create a variable that will hold the number
    let dupN = 0
    //use a while loop to go through nums and append the holding variable to the end of array
    while (i < numsLength) {
        //set dupN to the current element
        dupN = nums[i];
        nums.push(dupN);
        dupN = 0;
        i++
    }
    return nums
    //return original argument nums
}

// var getConcatenation = function(nums: number[]) {
//     let newArray: number[] = []
//     for( let i = 0; i < nums.length; i ++ ) {
//         newArray.push(nums[i])
//     }
//     return nums.concat(newArray)
// };

// console.log(getConcatenation([1,2,1])) //[1,2,1,1,2,1]
console.log(getConcatenation([1,3,2,1])) //[1,3,2,1,1,3,2,1]