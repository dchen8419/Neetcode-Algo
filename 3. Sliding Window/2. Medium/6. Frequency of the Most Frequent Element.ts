/*
The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.
*/

// Example 1:

// Input: nums = [1,2,4], k = 5
// Output: 3
// Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
// 4 has a frequency of 3.
// Example 2:

// Input: nums = [1,4,8,13], k = 5
// Output: 2
// Explanation: There are multiple optimal solutions:
// - Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
// - Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
// - Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
// Example 3:

// Input: nums = [3,9,6], k = 2
// Output: 1

/*
Approach:
    Sort input array then use sliding window
Look at left values after sorting to find the values closes to the largest will be incremented first
We will have two pointers with left and right
The right value is going to be the most "frequent" element which all other numbers will need to match for the amount repeated
We will keep expanding our window to the right while our "budget", aka k, will allow for us to grow

How it works:
Left and right pointer will start the frist value
Total will be a varaible that holds the sum of all the numbers in the sliding window
The equation that is needed will be (num[right]*windowLength <= total + K) becuaes it helps us if we need to expand the window or not
If the condition is true above we continue and increase right
but if it's not we will increment the left poitner by 1 to shorten the window length
*/

var maxFrequency = function(nums: number[], k: number) {
    //sort array
    nums.sort((a,b) => a-b);
    //create left pointer varaible starting at 0
    let left = 0;
    //create right pointer variable starting at 0
    let right = 0;
    //create result variable starting at 0
    let result = 0;
    //create total variable starting at 0
    let total = 0;
    //create a while loop where the condition is right is less than the length of the array we will continue to iterate through
    while ( right < nums.length ) {
        //set total variable to the nums[right] adding to the total variable
        total += nums[right]
        //create another while loop that has condtions of nums[right]*(right - left + 1) > total+k
        while ( nums[right]*(right - left + 1) > total + k ) {        
            //under these conditions we subtract the total from nums[left]
            total -= nums[left]
            //add 1 to left variable
            left+=1
        }
        //reassign result to math.max to find the max of res and right-left+1
        result = Math.max(result, right-left+1)
        //add one to right
    }
    //return result variable
    return result
};

console.log(maxFrequency([1,2,4], 5)) //3
console.log(maxFrequency([1,4,8,13], 5)) //2
console.log(maxFrequency([3,9,6], 2)) //1