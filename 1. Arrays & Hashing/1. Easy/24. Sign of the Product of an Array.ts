// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Example 1:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1
// Example 2:

// Input: nums = [1,5,0,2,-3]
// Output: 0
// Explanation: The product of all values in the array is 0, and signFunc(0) = 0
// Example 3:

// Input: nums = [-1,1,-1,1,-1]
// Output: -1
// Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

var arraySign = function(nums: number[]) {
    // turn all elements in array into string then split into individual items
    let newNums = nums.toString().split('')
    // create counter to keep up with negative numbers
    let counter = 0
    //create for loop
    for ( let i = 0; i < newNums.length; i ++ ) {

    }

};


console.log(arraySign([-1,-2,-3,-4,3,2,1])) //1
console.log(arraySign([1,5,0,2,-3])) //0
console.log(arraySign([-1,1,-1,1,-1])) //-1