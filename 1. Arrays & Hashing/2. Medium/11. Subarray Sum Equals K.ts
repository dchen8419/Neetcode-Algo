// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.


// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

/*Brute Foce*/
var subarraySum = function(nums: number[], k: number) {
    let counter = 0;
    for (let i=0;i<nums.length;i++) {
        let base = 0;
        for (let j=i;j<nums.length;j++) {
            base+=nums[j];
            if (base == k) counter++;
        }
    }
    return counter;
};

/*Hash Map*/
var subarraySumHashMap = function(nums: number[], k: number) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);
    }
    return count;
}

console.log(subarraySum([1,1,1], 2))
console.log(subarraySum([1,2,3], 3))