// Given a string s, find the length of the longest 
// substring
// without repeating characters.


// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(s: string) {
    // way to keep track of our idnexes of our letters {}
    const indexCache = {};
    // keep track of our starting poitner (red)
    let startingPointer = 0;
    // keep track of our longest length
    let longestLength = 0;

    // keep track of our current pointer
    for (let i = 0; i < s.length; i ++) {
        let currentLetter = s[i]
        // if the current letter already exists inside of our cache (aka it is not undefined), we want to 
        // update that starting pointer to prev index + 1
        if (indexCache[currentLetter] !== undefined) {
            startingPointer = Math.max(indexCache[currentLetter] + 1, startingPointer)
        }
        // set the key (our current letter) to be equal to the current index
        indexCache[currentLetter] = i;
        //update the length if the (black pointer - red pointer) is greater than the longest length
        if (i - startingPointer + 1 > longestLength) {
            longestLength = i - startingPointer + 1
        }
    }
    // return longest length
    return longestLength
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3