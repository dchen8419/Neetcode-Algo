// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums: number[]) {
    let cache = {}
    for ( let i = 0; i < nums.length; i ++ ) {
        if (cache[nums[i]] === undefined) {
            cache[nums[i]] = 1
        } else {
            cache[nums[i]]++
        }
    }
    return Object.keys(cache).reduce((a, b) => cache[a] > cache[b] ? a : b);
};

console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2,2,1,1,1,2,2])) // 2
