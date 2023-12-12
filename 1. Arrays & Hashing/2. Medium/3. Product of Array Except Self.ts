// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


var productExceptSelf = function(nums: number[]) {
    //create left array and fill it to the same number, but fill with 0, as the nums length and set index 0 to the left array to 1
    const leftArray = new Array(nums.length).fill(0);
    leftArray[0] = 1
    //create a right array and fill it to the same number, but fill with 0,  as the nums length but turn the last number of the array to 1
    const rightArray = new Array(nums.length).fill(0);
    rightArray[rightArray.length-1]= 1;
    
    
    //loop through to populate left array
    for ( let i = 1; i < nums.length; i++ ) {
        leftArray[i] = nums[i-1] * leftArray[i - 1]
    }
    //leftArray = [1,1,2,6]
    
    //loop through to populate right array
    for ( let i = rightArray.length-2; i>=0; i--) {
        rightArray[i] = nums[i+1] * rightArray[i+1]
    }
    //rightArray = [24,12,4,1]
    
    //combine left and right array to nums
    for ( let i = 0; i < nums.length; i ++ ) {
        nums[i] = leftArray[i] * rightArray[i]
    }
    //return nums 
    return nums;
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))