// Given a string s, find two disjoint palindromic subsequences of s such that the product of their lengths is maximized. The two subsequences are disjoint if they do not both pick a character at the same index.

// Return the maximum possible product of the lengths of the two palindromic subsequences.

// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters. A string is palindromic if it reads the same forward and backward.


// Example 1:

// example-1
// Input: s = "leetcodecom"
// Output: 9
// Explanation: An optimal solution is to choose "ete" for the 1st subsequence and "cdc" for the 2nd subsequence.
// The product of their lengths is: 3 * 3 = 9.
// Example 2:

// Input: s = "bb"
// Output: 1
// Explanation: An optimal solution is to choose "b" (the first character) for the 1st subsequence and "b" (the second character) for the 2nd subsequence.
// The product of their lengths is: 1 * 1 = 1.
// Example 3:

// Input: s = "accbcaxxcxx"
// Output: 25
// Explanation: An optimal solution is to choose "accca" for the 1st subsequence and "xxcxx" for the 2nd subsequence.
// The product of their lengths is: 5 * 5 = 25.

//Create a helper function to find plaindrome
const isPalin = (str: string) => {
    //two pointers where i starts at the beginning of the string and j starts at the end
    //the two pointers will move to the middle through each iteration
    for ( let i = 0, j = str.length - 1; i < j; i++, j--) {
        //if the index of that character does not match we will return false because it is not a palindrome
        if (str[i] !== str[j]) {
            return false;
        }
    }
    //short circuit out for true.
    return true;
}


var maxProduct = function(s: string) {
    //create a callback function
    function cb(letterIndex: number, word1: string, word2: string) {
        //isPalin only returns boolean values so if both isPalin(wordi) are true then we will return the word1 and word2 length but if not then we return zero
        if (letterIndex > s.length) {
            return isPalin(word1) && isPalin(word2) ? word1.length * word2.length : 0;
        }
        // we create a constant character for the letterIndex where it starts with 0 
        const char = s[letterIndex];
        // we then create another constant where the letterIndex is renamed to newIndex with an inremented number
        const newIndex = letterIndex + 1;
        //returns a number value from cb where it takes the max numbers of the three parameters
        return Math.max(
            cb(newIndex, word1, word2),
            cb(newIndex, `${word1}${char}`, word2),
            cb(newIndex, word1, `${word2}${char}`)
        );
    }
    //will return a number from cb of Math.max
    return cb(0, '', '');
};

console.log(maxProduct("leetcodecom")) //9
console.log(maxProduct("bb")) //1
console.log(maxProduct("accbcaxxcxx")) //25