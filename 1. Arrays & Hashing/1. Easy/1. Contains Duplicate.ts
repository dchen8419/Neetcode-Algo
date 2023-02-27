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



const containsDuplicate = (nums: number[]) => {
    //create hash
    let hash = {}
    //for loop through the nums array
    for( let i = 0; i < nums.length; i ++ ) {
        //if the hash at that key is undefined then we set it equal to 1 
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = 1
            //if the hash already contains the key then return true
        } else {
            return true
        }
    }
    //if everything is looped throug then return false
    return false
}

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