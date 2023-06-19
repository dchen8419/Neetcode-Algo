// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

// Solution:

// 1. Use two pointers, one initialised to 0 and the other initialised to end of string. Check if characters at each index
// are the same. If they are the same, shrink both pointers. Else, we have two possibilities: one that neglects character
// at left pointer and the other that neglects character at right pointer. Hence, we check if s[low+1...right] is a palindrome
// or s[low...right-1] is a palindrome. If one of them is a palindrome, we know that we can form a palindrome with one deletion and return true. Else, we require more than one deletion, and hence we return false.

var validPalindrome = function(s: string) {
    let low = 0, high = s.length-1;
    while (low < high) {
        if (s[low] !== s[high]) {
            return isPalendrome(s, low+1, high) || isPalendrome(s, low, high-1);
        }
        low++,high--;
    }
    return true;
};

function isPalendrome(str: string, low:number, high:number) {
    while (low < high) {
        if (str[low] !== str[high]) return false;
        low++, high--;
    }
    return true;
}

console.log(validPalindrome("aba")) //true
console.log(validPalindrome("abca")) //true
console.log(validPalindrome("abc")) //false


