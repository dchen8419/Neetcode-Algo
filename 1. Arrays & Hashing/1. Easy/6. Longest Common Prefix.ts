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
        Check if the vector strs is empty. If it is, there are no strings to compare, so we return an empty string.
        Initialize a string variable ans with the first string in strs. This will be our initial common prefix.
        Iterate through the remaining strings starting from the second string.
        Inside the loop, use a while loop to check if the current string does not start with the current ans.
        If the current string does not start with ans, remove the last character from ans by using the substr function and updating it to ans.substr(0, ans.length() - 1).
        Check if ans becomes empty after removing the character. If it does, it means there is no common prefix among the strings, so we return an empty string.
        Repeat steps 4-6 until the current string starts with ans.
        After the loop ends, the value of ans will be the longest common prefix among all the strings. Return ans.
*/

var longestCommonPrefix = function(strs: string[]) {
    //check edge case if the length of the string is 0
    if (strs.length === 0) {
        return '';
    }
    //create a variable to compare for the prefix
    let ans = strs[0]
    //use a for loop to loop through the strinsg array but starting at 1
    for( let i = 1; i < strs.length; i ++ ) {
        //create an inner loop using the while loop with the condition of using the indexOf method
        while (strs[i].indexOf(ans) !== 0) {
            //we will use the substring method on the answer to check if the letters match starting from the end
            ans = ans.substring(0, ans.length - 1);
            //if the prefix is an empty string we will return an empty string
            if (ans === '') {
                return '';
            }
        }
    }
    //once out of the loop we will return the prefix
    return ans;
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