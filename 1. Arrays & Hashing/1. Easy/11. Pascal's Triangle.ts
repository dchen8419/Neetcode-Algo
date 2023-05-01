// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]


var generate = function(numRows: number) {
    let i: number = 0;
    let j: number = 0;
    //Create an array list to store the output result...
    let result: number[][] = [];
    //For generating each row of triangle...
    for ( i = 0; i < numRows; i ++) {
        result.push(Array(i + 1));      //Initialize the first row of the pascal triange as {1}...
        for ( j = 0; j <= i; j++) {
            //Primary...
            if (j === 0 || j === i) {
                result[i][j] = 1
            } else {
                //Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
            }
        }
    }
    return result // Return the output list of pascal values...
};

console.log(generate(5))
console.log(generate(1))