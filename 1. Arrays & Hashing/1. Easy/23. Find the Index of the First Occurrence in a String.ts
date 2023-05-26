// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

var strStr = function(haystack: string, needle: string) {
    //if needle is an empty string or needle is the same as haystack then return 0
    //the only mandatory check here is ( needle === '')
    if (needle === '' || needle === haystack) return 0;
    //if the haystack length is less than needle length then return -1 
    // the other ones are for efficiency
    if (haystack.length < needle.length) return -1;
    //start looping through haystack until the remaining substrain is shorter
    for ( let i = 0; i < haystack.length - needle.length + 1; i ++ ) {
        // as soon as we see a character that matches the first character of the needle.
        if (haystack[i] === needle[0]) {
            //we start looping through both needle and haystack
            for ( let j = 0; j < needle.length; j ++ ) {
                //as soon as the characters don't match
                if (needle[j] !== haystack[i+j]) {
                    //break out of the loop and return to looping through haystack
                    break;
                }
            }
        }
    }
};

console.log(strStr( "sadbutsad","sad")) //0
console.log(strStr("leetcode", "leeto")) //-1