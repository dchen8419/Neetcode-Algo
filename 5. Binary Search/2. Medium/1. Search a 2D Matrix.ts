// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.


// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false


var searchMatrix = function(matrix:number[][], target:number) {
    for(let ele of matrix){
        if(ele[0]<=target&&ele[ele.length-1]>=target){
            for(let i=0;i<ele.length;i++){
                if(ele[i]==target){
                    return true
                }
            }
        }
    }
    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) // True
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) // False