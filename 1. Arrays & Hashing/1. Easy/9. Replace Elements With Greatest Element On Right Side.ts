// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.


// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation: 
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.
// Example 2: 

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.


var replaceElements = function(arr: number[]) {
    //create a new array name result that is the same length as the arguments array length
    const result: number[] = new Array(arr.length);
    //set the last element of result array to -1
    result[arr.length - 1] = -1;
    
    //create a for loop that will start at teh end
    for (let i: number = arr.length - 1; i > 0; i -= 1) {
        //we will add to the result where the index of the element being added is subtracted by 1 and we take the max of the current arr[i] vs the current result[i]
        result[i - 1] = Math.max(arr[i], result[i]);
    }
    //return the result after the loop
    return result;
};

console.log(replaceElements([17,18,5,4,6,1])) // [18,6,6,6,1,-1]
console.log(replaceElements([400])) // [-1]