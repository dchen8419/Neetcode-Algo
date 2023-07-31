// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Intuition:
// The problem requires us to find the maximum area between two lines on the x-axis given the height of the lines as an array. Since the area of a rectangle is determined by the minimum of the heights of the two lines and the distance between them, we can use a two-pointer approach to optimize the solution. We can initialize the left and right pointers to the beginning and end of the array, respectively, and then move the pointer with the smaller height towards the center while updating the maximum area.

// Approach:
// 1. Initialize the left and right pointers to the beginning and end of the array, respectively.
// 2. Initialize the max_area variable to 0.
//     While left < right:
//     a. Calculate the area between the lines at height[left] and height[right] using min(height[left], height[right]) * (right - left).
//     b. Update the max_area variable with the maximum of max_area and area.
//     c. If height[left] < height[right], increment the left pointer.
// 3. Otherwise, decrement the right pointer.
// 4. Return the max_area variable.

var maxArea = function(height: number[]) {
    //create a varaible that will hold the number of items in the array using .length method
    let n = height.length ;
    //create left pointer starting at 0
    let left = 0;
    //create right pointer starting at n - 1
    let right = n - 1;
    //create max_area variable with initial value of 0
    let max_area = 0;
    //create while loop where left is less than right
        while (left < right) {
        //create a variable that has the min area using Math.min
        let area = Math.min(height[left], height[right]) * (right - left);
        //update max_area to Math.max where the previous max_area is comapred to the area variable
        max_area = Math.max(max_area, area);
        //create a conditional if the height of the left is < height on right we increase left by 1
        if (height[left] < height[right]) {
            left++;
            //everything else we decrease right by 1
        }

        }
    //return max_area
    return max_area;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) //49
// console.log(maxArea([1,1])) //1