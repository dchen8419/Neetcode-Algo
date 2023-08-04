// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

var rotate = function(nums: number[], k: number) {
    //create an array that will hold the new return array
    let newNums: number[] = [];
    //create a for loop that will start at the k index and push into new array
    for ( let i = k; i < nums.length; i ++ ) {
        
    }
    //create a second for loop that will push the rest into the array
    //return the new array of the modified old array
};

// console.log(rotate([1,2,3,4,5,6,7], 3)) //[5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)) //[3,99,-1,-100]