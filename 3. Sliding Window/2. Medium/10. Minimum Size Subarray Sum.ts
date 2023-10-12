// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

/*
Explanation
From the problem we need to acheive.,
to find : " a subarray length from the given nums must be as minimum as possible "
condition : " sum of the elements of subarray is greater than or equal to given target "

Sliding window approach best suits the scenario, as we just need to find the minimal arbitrary length of a subarray that satisfies the given condition.

Why specifically window sliding technique?
Naive Approach => (Brute Force Approach)

We start with the first index and sum till the kth element where the condition is satisfied. Need to be done for all possible consecutive blocks or groups of k elements. 
This method requires a inner loop, the outer loop starts with the starting element of the block of k elements, and the inner or the nested will add up till the kth element
*/

var minSubArrayLen = function(target: number, nums: number[]) {
    
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3])) //2
console.log(minSubArrayLen(4, [1,4,4])) //1
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])) //0
