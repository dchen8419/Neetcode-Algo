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

Window Sliding Technique =>

It is a computational technique that aims to reduce the use of nested loops and replace it with a single loop, thereby reducing the time complexity.

This approach can be done in a very specific scenario, where the 'size of the window' for computation merely depends on the target, so it is fixed on the target value, which results in a subarray of arbitrary length.

How to use a sliding window technique in general?
(1) Find the size of the window required (depends on target value)

(2) Compute the result for 1st window, from the start of the data structure

(3) Then use a loop to slide the window by 1, and keep computing the result window by window

*/

var minSubArrayLen = function(target: number, nums: number[]) {
    // initialize the start and end of the window from starting point
    let start = 0;
    let end = 0;
    // consider the minValue to be infinity,
    // just to define the variable 
    let minValue = Infinity;
    // sum of subarray initialized to initial array value
    let subarraySum = nums[0];

    // slide the window upto array length
    // start of the window always be less than or may be equal to end
    while (start <= end && end < nums.length) {
        // if sum satisfies the condition
        if (subarraySum >= target) {
        // extract the minimum subarray length
        // end-start+1 => end >= start (always greater or equal)
        // when end === start, then end - start === 0
        // but window stays atleast on one element (+1) of array 
            minValue = Math.min(minValue, end-start+1);
        // move the start of window by one element
        // and remove last start element from sub array sum
            subarraySum -= nums[start]
            start++;
        } else {
    // if sum didn't satisfies the condition, drag the window end
    // till the sum >= target
        }
    }
    // return 0, as no subarray satisfies the given condition
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3])) //2
console.log(minSubArrayLen(4, [1,4,4])) //1
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])) //0
