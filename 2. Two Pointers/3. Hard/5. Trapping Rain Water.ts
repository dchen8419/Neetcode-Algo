// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// var trap = function(height: number[]) {
//         //keep track of water
//         let total = 0;
//         for (let i = 1; i < height.length - 1; i +=1){ //green
//         let leftMax = height[i];
//         for (let j = 0; j < i; j +=1) {
//             leftMax = Math.max(leftMax, height[j])
//         }
    
//         let rightMax = height[i]
//         for (let k = i; k < height.length; k +=1) {
//             rightMax = Math.max(rightMax, height[k])
//         }
//         total += Math.min(leftMax, rightMax) - height[i]
//     }
//     return total
// };

const trap = (height:number[]) => {
    if (height == null || height.length === 0) return 0;
    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let result = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        if (height[left] < leftMax) {
        result += leftMax - height[left];
    }

    rightMax = Math.max(rightMax, height[right]);
    if (height[right] < rightMax) {
        result += rightMax - height[right];
    }

    height[left] < height[right] ? left++ : right--;
    }

    return result;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) //6
console.log(trap([4,2,0,3,2,5])) //9