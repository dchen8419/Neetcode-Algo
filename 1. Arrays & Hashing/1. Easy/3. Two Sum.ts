// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


let twoSum = (nums: number[], target: number) => {
            //Store all the previous values encountered
            const previousValues = {};
            //for loop through the number
            for (let i = 0; i < nums.length; i ++) {
                //set variable for each element 
                const currentNumber = nums[i]
                // Target minus the values of the numbers[]: 9 - 2 = 7, 9 - 7 = 2, 9 - 11 = -2, 9 - 15 = -6
                const neededValue = target - currentNumber;
                //Check if we've encountered the previous value before and if we have we will get an index
                const index2 = previousValues[neededValue];  
                //If the index exist we know we have both index we need to solve the problem and return both indexs
                // if the object value is not absent. Null represents the intentional absence of any object value
                    if(index2 != null) {
                        return [index2, i]
                    } else {
                //If that index does not already exist we will store that number as the key of the hash and the index as the value of where that number took place.
                    previousValues[currentNumber] = i
                }
            }
        }

console.log(twoSum( [2,7,11,15],9)) //[0,1]
console.log(twoSum([3,2,4], 6)) //[1,2]
console.log(twoSum([3,3],6)) //[0,1]