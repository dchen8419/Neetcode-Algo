// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

var longestConsecutive = function(nums: number[]) {
    let cache = {}
    for (let num of nums) {
        if (!cache[num]) {
            cache[num] = true
        }
    }
    let max = 0
    for (let num of nums) {
        let count = 0
        // find the lowest start point
        if (cache[num - 1]) {
            continue
        }
        // keep incrementing our num until we dont hit a consecutive anymore
        while(cache[num]) {
            count ++
            if (count > max) {
                max = count
            }
            num++
        }
    }
    return max
};


console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))