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
    //check for zeros in nums array
    for ( let i = 0; i < nums.length; i ++ ) {
        if (nums[i] === 0) {
            return 0
        }
    }
    // turn all elements in array into string then split into individual items
    let newNums = nums.toString().split('')
    // create counter to keep up with negative numbers
    let counter = 0
    //create for loop
    for ( let i = 0; i < newNums.length; i ++ ) {
        //look for negative signs
        if (newNums[i] === '-') {
            counter++
        } 
    }   
    //check if counter is even or not
    //if counter is an even number we return 1
    if ( counter %2 === 0) {
        return 1
    //if counter is odd we return  -1
    } else {
        return -1
    }
};


// console.log(arraySign([-1,-2,-3,-4,3,2,1])) //1
// console.log(arraySign([1,5,0,2,-3])) //0
// console.log(arraySign([-1,1,-1,1,-1])) //-1
console.log(arraySign([9,72,34,29,-49,-22,-77,-17,-66,-75,-44,-30,-24])) //-1