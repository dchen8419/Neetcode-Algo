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
    if (needle === '' || needle === haystack) return 0;
    //if the haystack length is less than needle length then return -1 
    if (haystack.length < needle.length) return -1;
};

console.log(strStr( "sadbutsad","sad")) //0
console.log(strStr("leetcode", "leeto")) //-1