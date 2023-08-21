/*
Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and 
average greater than or equal to threshold.
*/


// Example 1:

// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
// Example 2:

// Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// Output: 6
// Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

var numOfSubarrays = function(arr: number[], k: number, threshold: number) {
    //create a variable for count;
    let count = 0;
    //create variable for windowSize;
    let windowSize = 0;
    //create variable for windowSum;
    //create a for loop starting at 0 and increment one at a time from the nums.length;
        //if the windowSize variable is equal to the k number we will do another conditional
            //if the windowSize divided by k is less than the threshold we will increment count++, set windowSum -= to nums[i-k], and decrement windowSize--
        //other than that we will incremnet windowSum += to nums[i]
        //then we will increase windowSize++
    //return count variable;
    
};

console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4)) //3
console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5)) //6
