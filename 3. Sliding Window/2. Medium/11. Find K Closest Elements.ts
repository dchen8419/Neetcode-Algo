// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. 
// The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

var findClosestElements = function(arr: number[], k: number, x: number) {
    //sort the arr and create two varaibles where a1 is the abs of a-x and b1 is the abs of b-x
    
    arr.sort((a,b) => {
        const a1 = Math.abs(a-x), b1 = Math.abs(b-x);
        //the return should be if a1 === b1 then we return a-b but if it's false we return a1-b1
        return a1 == b1 ? a-b : a1-b1;
    });
    //we then create a varaible ans to be the sorted arr but slice at 0, k
    //we then sort it again from a - b
    //finally we return the ans
};

console.log(findClosestElements([1,2,3,4,5], 4, 3))
console.log(findClosestElements([1,2,3,4,5], 4, -1))