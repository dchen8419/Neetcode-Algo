// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.



// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
var maxSlidingWindow = function(nums: number[], k: number) {
    const queue: number[] = []; //only every be max the length of k
    const answerArray: number[] = []; //hold all our outputs
    for (let i = 0; i < nums.length; i ++) {
        // pops numbers off the queue if nums if grater than the last number
        // flush
        while (nums[i] > queue[queue.length - 1]) {
            queue.pop();
        }
        queue.push(nums[i])

        if (i >= k - 1) {
            answerArray.push(queue[0]);
            // remove maximum value when it's moving outside of the window
            if (nums[i - k + 1] === queue[0]) {
                queue.shift();
            }
        }
    }
    return answerArray;
};


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1],1)) // [1]
