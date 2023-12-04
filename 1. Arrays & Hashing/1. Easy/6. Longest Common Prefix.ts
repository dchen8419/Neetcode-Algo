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
        We will first check the length of the string array to see if it contains any strings and if not we will return an empty string for edge case
        The approach will be to have the first string in the array be out reference string where we will compare all the other strings in the array to it
        When we compare the string we will remove the elements from the end until we start to have matching letters
        So, we will loop trhough the length of the string array starting at index 1 because the first word in the array will be used to match with
        We will then have a second loop inside the for loop, while loop, to cehck if the strings letter matches using the indexOf method on the current string wich is not equal to 0
        then we can remove the last character of the prefix using the substring method starting at the end.
        We will utilize two methods such as indexOf() and substring() 
*/

var longestCommonPrefix = function(strs: string[]) {
    //check edge case if the length of the string is 0
    if (strs.length === 0) {
        return '';
    }
    //create a variable to compare for the prefix

    //use a for loop to loop through the strinsg array but starting at 1
        //create an inner loop using the while loop with the condition of using the indexOf method
            //we will use the substring method on the answer to check if the letters match starting from the end
            //if the prefix is an empty string we will return an empty string
    
    //once out of the loop we will return the prefix
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
