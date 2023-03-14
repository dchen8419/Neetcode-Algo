// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.



// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.


var characterReplacement = function(s: string, k: number) {
    let windowStart = 0;
    let maxLength = 0;
    let mostCommon = 0;
    let hash = {};

    for ( let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        if (!hash[s[windowEnd]]) { //If we have never seen that element before
            hash[s[windowEnd]] = 0; // we will set it to zero
        } hash[s[windowEnd]]++; //but if we have we will increment the value of that letter in the hash

        mostCommon = Math.max(mostCommon,hash[s[windowEnd]]);

        //temp length = windowEnd - windowStart + 1

        if (windowEnd - windowStart + 1 - mostCommon > k) {
            hash[s[windowStart]]--;
            windowStart++
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength
};

console.log(characterReplacement("ABAB", 2)) //4
console.log(characterReplacement("AABABBA", 1)) //4

//Time: O(n) Linear
//Space: O(n) Linear
