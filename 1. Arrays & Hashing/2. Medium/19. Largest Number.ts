// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.



// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

var largestNumber = function(nums: number[]) {
    // check if nums contains numbers and if not then return string 0
    if (!nums || nums.length === 0) {
        return '0'
    }
    //sort array from largest to smallest 
    nums.sort((a,b) => `${b}${a}` - `${a}${b}`);
    //check if the first number in the array is 0 and if it is 0 then we will return 0
    if (nums[0] === 0) {
        return '0'
    }
    //join all the numbers in the array into a string and return it
    return nums.join('')
};

console.log(largestNumber([10,2])) //'210'
console.log(largestNumber([3,30,34,5,9])) //"9534330"