// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

/**
 * 1. If the characters don't have a mapping, we add one in the dictionary and move on.
 * 2. The characters already ahve a mapping in the dictionary.
 * 3. The final case is when a mapping already exists for one of the characters but it doens't map to the other character at hand.
 */


var isIsomorphic = function(s: string, t: string) {
    if (s.length !== t.length) {
        return false;
    }

    let sHashMap = {};
    let tHashMap = {};
    let current = 0;

    while(current <= s.length-1) {
        if (sHashMap[s[current]] !== tHashMap[t[current]]) {
            return false;
        }
        sHashMap[s[current]] = current + 1
        tHashMap[t[current]] = current + 1
        current++
    }
    return true;
};

console.log(isIsomorphic('egg','add')) // true
console.log(isIsomorphic('foo', 'bar')) //false
console.log(isIsomorphic('paper', 'title')) //true