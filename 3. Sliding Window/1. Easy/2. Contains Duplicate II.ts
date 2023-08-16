/*
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array 
such that nums[i] == nums[j] and abs(i - j) <= k.
*/

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

var containsNearbyDuplicate = function(nums: number[], k: number) {
    //create a hasmap with the new keyword
    let hashmap = new Map();
    //create a for loop that loops through nums at each index
    for ( let i = 0; i < nums.length; i ++ ) {
        //create an if condition that if the index minus the hashmap at the nums index is less than or equal to k we will return true
        if ( i - hashmap.get(nums[i] <= k) ) {
            //return true if the condition is true
            return true;
        }
        //for each loop we will setup the Map object as key being nums[i] and the value as i
    }
    //return false
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3)) //true
console.log(containsNearbyDuplicate([1,0,1,1], 1)) //true
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2 )) //false