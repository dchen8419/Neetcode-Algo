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
    //create a varaible that will hold the final return string
    let result = "";

    //loop through the string array and return the index of each letter in the string of the array
    for ( let i = 0; i < strs[0].length; i ++ ) {
        // i represent the index number of the string in the array
        // strs[0].length represent the first strings index max number but would need to subtract 1 to start at 0
            //inside loop will loop through the array and comparing to each string of the array
            for ( let j = 0; j < strs.length; j ++ ) {
                //the first condition is that if the index is equal to the length of the first word of the array or the first letter does not match the strs at that point we will return the result
                if ( i === strs[j].length || j[i] != strs[0][i]) {
                    return result
                }
                //otherwise we will set the result to the strs at that point because they are matching
                result += strs[0][i]
            }
    }
    //finally we return our result variable
    return result
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
// console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
