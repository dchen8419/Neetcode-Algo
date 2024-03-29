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
    let current = 0; //Number of vowels in the current window
    //create a for loop that will iterate thru i < k starting at i = 0 and incrementing one at a time
    //Count the total number of vowels from the frist window
    for (let i = 0; i < k; i++) {
        //the condition is if the s[i] contains the vowels then we will increment max by 1
        if (vowels.has(s[i])) max++
    } 
    //once the for loop is done we hit another condition outside of the for loop in the function global where if max is the same as k we will return the max that's when we know that k is the max we can go
    if (max === k) return max //Return if 'k' is hit
    //if the previous condition was not fired we will set the current to max
    current = max; // Set the current to the max
    //this is where we use the sliding window technique
    //we create a for loop going through s.length but minus the k
    for ( let i = 1; i <=s.length - k; i++) {
        //if the vowel has s[i-1] we will decrement current by 1
        if (vowels.has(s[i-1])) current-- //Remove the left most vowel
        //if the vowel has s[i + k - 1] we will increment current by 1
        if (vowels.has(s[i + k -1])) current++ //Add the right-most vowel
        
        //if the current is equal to k then we will return the current
        if (current === k) return current // Return if the 'k' is hit
        //if the current is greater than max we will set max to current
        if (current > max) max = current //Set 'max' to the 'current' value, if greater
    }
    //return max
    return max
};

console.log(maxVowels("abciiidef", 3)) //3
console.log(maxVowels("aeiou", 2)) //2
console.log(maxVowels("leetcode", 3)) //2