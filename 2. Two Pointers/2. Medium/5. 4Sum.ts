// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

//Approach:
// 1. Sort the input array in non-decreasing order.
// 2. Traverse the array from 0 to n-3 and use a variable i to keep track of the first element in the quadruplet.
// 3. If the current element is the same as the previous element, skip it to avoid duplicates.
// 4. Traverse the array from i+1 to n-2 and use a variable j to keep track of the second element in the quadruplet.
// 5. If the current element is the same as the previous element, skip it to avoid duplicates.
// 6. Use two pointers, left = j+1 and right = n-1, to find the other two elements in the quadruplet whose sum equals the target value.
// 7. If the sum of the four elements is less than the target value, increment left pointer.
// 8. If the sum of the four elements is greater than the target value, decrement right pointer.
// 9. If the sum of the four elements is equal to the target value, add the quadruplet to the result and increment left and decrement right pointers.
// 10. Skip duplicate values of left and right pointers to avoid duplicate quadruplets.
// 11. Return the result.
var fourSum = function(nums: number[], target: number) {
    //sort nums
    nums.sort((a, b) => a-b);
    //create varaible to hold nums.length
    const n = nums.length;
    //loop through nums but end three items before and increment by 1
    for ( let i = 0; i < n - 3; i ++) {
        //conditional to check if i is less than zero and if the numbers are equal
    }
         
};

console.log(fourSum([1,0,-1,0,-2,2], 0)) //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)) //[[2,2,2,2]]