// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function(s: string[]) {
    //create an new varaible that's an empty string array type
    let result: string[] = []
    //loop through s backwards
    for ( let i = s.length-1; i >= 0; i -- ) {
        //push the letters from the end first
        result.push(s[i])
    }
    //return the varaible holding the empty string array
    return result
};

console.log(reverseString(["h","e","l","l","o"])) //["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])) //["h","a","n","n","a","H"]