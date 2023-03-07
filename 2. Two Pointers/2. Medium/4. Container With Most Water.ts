// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

const maxArea = (height: number[]) => {
        // pointer a - starts from the left side
        let pointerA = 0;
        // pointer b - starts from the rightside
        let pointerB = height.length - 1;
        // max area
        let maxArea = 0;
        // way to loop through the pointers so that they don't touch
        while(pointerA < pointerB){
            // pick the shorter wall between the two pointers
            let shorterWall = Math.min(height[pointerA], height[pointerB]);
            // calculate distance between the two walls
            let distance = pointerB - pointerA;
            // calculate area
            let area = shorterWall * distance;
            // conidtional if the calcuated area is greater than max area, reassign
            if (area > maxArea){
                maxArea = area;
            }
            // if pointer a is shorter than pointer b, increment poitner a
            if (height[pointerA] < height[pointerB]) {
                pointerA ++;
            } else {
                pointerB --;
            }
            // other wise decrement pointer b
        }
        // return max area
        return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])) //49
console.log(maxArea([1,1])) //1
