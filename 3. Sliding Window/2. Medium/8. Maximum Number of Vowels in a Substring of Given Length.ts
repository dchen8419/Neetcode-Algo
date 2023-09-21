// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

/*
Intuition:
Sets, Sliding Windows, and Early Returns.

Approach:
1. For simplicity and seed, we place the vowles in a set.
2. Using a for loop, we get the initial max number of vowels in the first window. We set the current to max befor continuing
3. From there, we us the sliding window technique to determine the number of vowels in any given window.
4. We set the max if the current number is greater.

We attempt to return at multiple points in the code if max or current have hit the k value, seeing as there's no point in continuing.
*/

var maxVowels = function(s: string, k: number) {
    //create a set for vowels
    //create a max vaariable
    //create current variable
};

console.log(maxVowels("abciiidef", 3)) //3
console.log(maxVowels("aeiou", 2)) //2
console.log(maxVowels("leetcode", 3)) //2