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
    //create a set for vowels using const
    const vowels = new Set(['a','e','i','o','u','y'])
    //create a max variable 
    let max = 0; //Max number of vowels in any window
    //create current variable
    
    //create a for loop that will iterate thru i < k starting at i = 0 and incrementing one at a time
        //the condition is if the s[i] contains the vowels then we will increment max by 1
    //once the for loop is done we hit another condition outside of the for loop in the function global where if max is the same as k we will return the max that's when we know that k is the max we can go
    //if the previous condition was not fired we will set the current to max
    //this is where we use the sliding window technique
    //we create a for loop going through s.length but minus the k
        //if the vowel has s[i-1] we will decrement current by 1
        //if the vowel has s[i + k - 1] we will increment current by 1
        
        //if the current is equal to k then we will return the current
        //if the current is greater than max we will set max to current
    //return max
};

console.log(maxVowels("abciiidef", 3)) //3
console.log(maxVowels("aeiou", 2)) //2
console.log(maxVowels("leetcode", 3)) //2