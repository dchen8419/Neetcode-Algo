// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


var isPalindrome = function(s:string) {
    let validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789"
    let cache = {}
    for (let char of validCharacters) {
        cache[char] = true
    }

    let filtered = s.toLowerCase().split("").filter(char => {
        if(cache[char]){
            return char
        }
    }).join("")
    // two pointers, one at the begingging and one at the end
    let i = 0;
    let j = filtered.length - 1;

    while (i <= j) {
        if (filtered[i] === filtered[j]){
            i ++
            j --
        } else {
            return false
        }
    }
    return true
    // time compelxity o(n)
    // space complexity o(1)
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) //true
console.log(isPalindrome("race a car")) //false
console.log(isPalindrome(" ")) //true