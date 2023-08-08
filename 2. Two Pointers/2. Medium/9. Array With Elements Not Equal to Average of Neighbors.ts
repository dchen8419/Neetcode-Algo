// You are given a 0-indexed array nums of distinct integers. You want to rearrange the elements in the array such that every element in the rearranged array is not equal to the average of its neighbors.

// More formally, the rearranged array should have the property such that for every i in the range 1 <= i < nums.length - 1, (nums[i-1] + nums[i+1]) / 2 is not equal to nums[i].

// Return any rearrangement of nums that meets the requirements.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: [1,2,4,5,3]
// Explanation:
// When i=1, nums[i] = 2, and the average of its neighbors is (1+4) / 2 = 2.5.
// When i=2, nums[i] = 4, and the average of its neighbors is (2+5) / 2 = 3.5.
// When i=3, nums[i] = 5, and the average of its neighbors is (4+3) / 2 = 3.5.
// Example 2:

// Input: nums = [6,2,0,9,7]
// Output: [9,7,6,2,0]
// Explanation:
// When i=1, nums[i] = 7, and the average of its neighbors is (9+6) / 2 = 7.5.
// When i=2, nums[i] = 6, and the average of its neighbors is (7+2) / 2 = 4.5.
// When i=3, nums[i] = 2, and the average of its neighbors is (6+0) / 2 = 3.

/*
    Intuition:
    The idea behind this solution is to use a combination of small-big-small and big-small-big to ensure the middle number can never be the average of its neighbours.
    Think: In (a, b, c) tuple, 'b' can be average of 'a' and 'c' only if 'b' lies in-between 'a' and 'c' in the number line.

    We sort the array in ascending order. We take 2 pointers left and right and alternately insert numbers from left end and right end of the sorted array to create our output array.

    Our output array will have the form of : small, big, small, big, small, big, small, big, small...
    So that upon selecting any 3 consecutive numbers, the middle can never be the average of other 2.
*/

var rearrangeArray = function(nums: number[]) {
    //sort array in ascending order
    nums.sort((a,b) => a-b);
    //create an empty array to hold values for return
    //create left pointer at 0
    //create right poitner at the end of array
    //create a while loop where the left is less than right
    //incase the array length is odd we only need to insert the middle element once
    //return result array
};

console.log(rearrangeArray([1,2,3,4,5])) //[1,2,4,5,3]
console.log(rearrangeArray([6,2,0,9,7])) //[9,7,6,2,0]