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
        First we create a variable to hold our common prefix strings
        We will have two loops that are nested but we will only loop thru the length of the word once
        Second, we will create our first loop finding the number of indexes of the first word in the array
        Third, the loop within the loop will be represented by each word in the array
        Fourth, we will set a conditional in the inside loop to where if the index is equal to the length of the word or the word at that index does not equal the same letter we will return the res
        Otherwise, we will keep adding letters that are the same to the result
        Finally, returning the result
*/

var longestCommonPrefix = function(strs: string[]) {
    
}


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
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
