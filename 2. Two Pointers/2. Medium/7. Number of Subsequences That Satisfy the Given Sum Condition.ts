// You are given an array of integers nums and an integer target.

/* 
Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. 
Since the answer may be too large, return it modulo 109 + 7.
*/

// Example 1:

// Input: nums = [3,5,6,7], target = 9
// Output: 4
// Explanation: There are 4 subsequences that satisfy the condition.
// [3] -> Min value + max value <= target (3 + 3 <= 9)
// [3,5] -> (3 + 5 <= 9)
// [3,5,6] -> (3 + 6 <= 9)
// [3,6] -> (3 + 6 <= 9)
// Example 2:

// Input: nums = [3,3,6,8], target = 10
// Output: 6
// Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
// [3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
// Example 3:

// Input: nums = [2,3,3,4,6,7], target = 12
// Output: 61
// Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
// Number of valid subsequences (63 - 2 = 61).

/* 
Intuition:
*/


var numSubseq = function(nums: number[], target: number) {
    //create an empty array that will hold numbers
    let pow: number[] = [];
    //push in number 1 to start but always keep the original array empty
    pow.push(1);
    //sort the nums param array
    nums.sort((a,b) => {return a-b});
    //create a const mod 1e9+7
    const mod = 1e9+7;
    //for loop thought nums
    for ( let i = 1; i < nums.length; i ++ ) {
        //push into the empty array with the lenth -1 * 2 % mod
        pow.push((pow[pow.length-1]*2) % mod);
    };
    //create a varaible for i that will equal 0
    let i = 0;
    //create a varaible for j that will be the length of nums - 1
    let j = nums.length-1;
    //create res that will equal to 0
    let res = 0
    //create while loop where i is less than or qual to j condition of while loop
        //condition if the nums of either i or j is greater than the target we decrease j by 1
        //everything else we will reassign res
    //return res
};

console.log(numSubseq([3,5,6,7], 9)) //4
console.log(numSubseq([3,3,6,8], 10)) //6
console.log(numSubseq([2,3,3,4,6,7], 12)) //61