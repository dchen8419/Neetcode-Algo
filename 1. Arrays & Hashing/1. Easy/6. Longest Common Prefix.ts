// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/*
    Approach:

*/

var longestCommonPrefix = function(strs: string[]) {
    
}
//testing

// var longestCommonPrefix = function(strs: string[]) {
//     if ( strs.length === 0 ) {
//         return '';
//     }

//     return strs.reduce((prev, next) => {
//         let i: number = 0
//         while (prev[i] && next[i] && prev[i] === next[i]) i++;
//         return prev.slice(0,i)
//     })
// };

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
