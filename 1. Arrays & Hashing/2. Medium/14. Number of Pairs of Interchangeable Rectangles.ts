// You are given n rectangles represented by a 0-indexed 2D integer array rectangles, where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle.

// Two rectangles i and j (i < j) are considered interchangeable if they have the same width-to-height ratio. 
// More formally, two rectangles are interchangeable if widthi/heighti == widthj/heightj (using decimal division, not integer division).

// Return the number of pairs of interchangeable rectangles in rectangles.


// Example 1:

// Input: rectangles = [[4,8],[3,6],[10,20],[15,30]]
// Output: 6
// Explanation: The following are the interchangeable pairs of rectangles by index (0-indexed):
// - Rectangle 0 with rectangle 1: 4/8 == 3/6. 
// - Rectangle 0 with rectangle 2: 4/8 == 10/20.
// - Rectangle 0 with rectangle 3: 4/8 == 15/30.
// - Rectangle 1 with rectangle 2: 3/6 == 10/20.
// - Rectangle 1 with rectangle 3: 3/6 == 15/30.
// - Rectangle 2 with rectangle 3: 10/20 == 15/30.
// Example 2:

// Input: rectangles = [[4,5],[7,8]]
// Output: 0
// Explanation: There are no interchangeable pairs of rectangles.

var interchangeableRectangles = function(rectangles: number[][]) {
    let ratio = {} // w/h : count ===> The key of the object will be the width / height and the value will the number of times a rectangle has the key ratio of width and height
    let result = 0; // placeholder and will return

    //create a for loop that will iterate over rectangle array of array numbers
    for ( let i = 0; i < rectangles.length; i ++ ) {
        //create a const for each element of array numbers
        const rectangle = rectangles[i]
        //create the ratios 
        let r = rectangle[0] / rectangle[1]

        //if the ratio is not there we will create it and set it to 0
        if (!ratio[r]) {
            ratio[r] = 0
        }
    }
    //return result
    return result
}; 

console.log(interchangeableRectangles([[4,8],[3,6],[10,20],[15,30]])) //6
console.log(interchangeableRectangles([[4,5],[7,8]])) //0