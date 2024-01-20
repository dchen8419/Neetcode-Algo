// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


//edge case:
    //array of strings
    //check length of array

var containsDuplicate = function(nums: number[]) {
    //create hashmap
    let hashmap = {};
    //check the length of the array
    let numbers = nums.length; 
    //create a boolean
    for (let i = 0; i <= numbers; i++) {
        if (!hashmap[nums[i]]) { 
            (hashmap[nums[i]] = 1)
        } else {
            return true
        }
    }
    //return false if no dups
    return false
};

    //hashmap[nums[i]]
    //hashmap[nums[0]]
    //hashmap[9]

// function containsDuplicate(nums: number[]) {
//     let mySet = new Set(nums) 
//     console.log(mySet)
//     console.log(mySet.size)
//     console.log(nums.length)
//     return (nums.length !== mySet.size)
// }


// console.log(containsDuplicate([9,2,3,9])) //true
console.log(containsDuplicate([9,2,3,4])) //false




// let names = {
//     'david': 35,
//     'bill': 40,
//     'brad': 30 
// }

// console.log(names['bill'])