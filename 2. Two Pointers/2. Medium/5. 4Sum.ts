// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

//Approach:
// 1. Sort the input array in non-decreasing order.
// 2. Traverse the array from 0 to n-3 and use a variable i to keep track of the first element in the quadruplet.
// 3. If the current element is the same as the previous element, skip it to avoid duplicates.
// 4. Traverse the array from i+1 to n-2 and use a variable j to keep track of the second element in the quadruplet.
// 5. If the current element is the same as the previous element, skip it to avoid duplicates.
// 6. Use two pointers, left = j+1 and right = n-1, to find the other two elements in the quadruplet whose sum equals the target value.
// 7. If the sum of the four elements is less than the target value, increment left pointer.
// 8. If the sum of the four elements is greater than the target value, decrement right pointer.
// 9. If the sum of the four elements is equal to the target value, add the quadruplet to the result and increment left and decrement right pointers.
// 10. Skip duplicate values of left and right pointers to avoid duplicate quadruplets.
// 11. Return the result.
var fourSum = function(nums: number[], target: number) {
    //sort nums
    nums.sort((a, b) => a-b);
    //create a variable that will hold a numbers array
    const quadruplets: number[][] = [];
    //create varaible to hold nums.length
    const n = nums.length;
    //loop through nums but end three items before and increment by 1
    for ( let i = 0; i < n - 3; i ++) {
        //conditional to check if i is less than zero and if the numbers are equal to continue
        if ( i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        //create another for loop that will start at i + 1 and when i + 1 is less than the length - 2 but increment by 1
        for ( let j = i + 1; j < n - 2; j ++ ) {
            //create a condition where i + 1 is less than j and if num[j] is equal to the previous number then continue
            if ( j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            //create left pointer
            let left = j + 1;
            //create right pointer
            let right = n - 1;
            //creat a while loop with conditoinals of left being less than right
            while ( left < right) {
                //create a sum variable that adds all the numbers of nums[i] nums[j] nums[left] nums[right]
                const sum = BigInt(nums[i]) + BigInt(nums[j]) + BigInt(nums[left]) + BigInt(nums[right])
                //creat a conditional where if the sum is less than the target we will increase the left by 1
                if ( sum < target ) {
                    left++;
                    //create a conditoinal if sum is greater than target we move right pointer down
                } else if (sum > target) {
                    right--
                    //everything else we're going to push the numbers into a holding array and loop through to move left pointer up and another while loop for right pointer down
                } else {
                    quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
                    //if it doesn't match we will increment left by 1 and decrement right by 1 using a while loop
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    left++ ;
                    right-- ;
                }   
            }
        }
    }
         //return the numbers array
        return quadruplets
};

console.log(fourSum([1,0,-1,0,-2,2], 0)) //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)) //[[2,2,2,2]]