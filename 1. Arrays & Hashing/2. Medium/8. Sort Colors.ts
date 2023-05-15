// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.



// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function(nums: number[]) {
    if (nums.length < 2) return nums;
    let mid = Math.floor(nums.length/2);
    let left: number[] = nums.slice(0, mid);
    let right: number[] = nums.slice(mid);

    function merging(left: number[], right: number[]) {
        let result: number[] = [];
        let lLen = left.length;
        let rLen = right.length;
        let l: number = 0;
        let r: number = 0;
        while(l < lLen && r < rLen){
            if(left[l] < right[r]){
                result.push(left[l++]);
            }
            else{
                result.push(right[r++]);
            }
        }  
        return result.concat(left.slice(l)).concat(right.slice(r));
    }

    return merging(sortColors(left),sortColors(right));
};

console.log(sortColors([2,0,2,1,1,0])) // [0,0,1,1,2,2]
console.log(sortColors([2,0,1])) // [0,1,2]