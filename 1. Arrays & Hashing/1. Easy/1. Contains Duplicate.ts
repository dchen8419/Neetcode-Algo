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

/*
APPROACH:
We will create a hash table that will keep up with the numbers in the array
A hash table or hash map is an object with key value pairs that we can use to look things up or keep track of for a quick look up
WE will use a for loop and loop through the nums array pairing it with a value of 1
If the key already exists in the hash map we will return true
but if we loop though the whole array and we finish the loop we will return false because there wouldn't be a repeat becuase every value is paired with the number 1

*/

const containsDuplicate = (nums: number[]) => {
    //create an empty hash map
    let hashMap = {

    }
    //for loop through the nums array
        //if the number does not exsist in the array we will create it
        //else we will return true because it already exsist in the hash map
    //if we loop through and whole thing and exit out of the for loop we will return false because every number is only placed in the hash map once
}















// const containsDuplicate = (nums: number[]) => {
//     //create hash
//     let hash = {}
//     //for loop through the nums array
//     for( let i = 0; i < nums.length; i ++ ) {
//         //if the hash at that key is undefined then we set it equal to 1 
//         if (hash[nums[i]] === undefined) {
//             hash[nums[i]] = 1
//             //if the hash already contains the key then return true
//         } else {
//             return true
//         }
//     }
//     //if everything is looped throug then return false
//     return false
// }

console.log(containsDuplicate([1,2,3,1])) //true
console.log(containsDuplicate([1,2,3,4])) //false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) //true



const containsDuplicateTwo = (nums: number[]) => {
        let mySet = new Set(nums)
    return (nums.length !== mySet.size)
}

console.log(containsDuplicateTwo([1,2,3,1]))
console.log(containsDuplicateTwo([1,2,3,4]))
console.log(containsDuplicateTwo([1,1,1,3,3,4,3,2,4,2]))