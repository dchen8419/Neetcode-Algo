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
    //edge case to check length of string and if it's not the same length we will return false
    if (s.length !== t.length) {
        return false;
    }
    //create hashmap for s string
    let sHashMap = {};
    //create hashmap for t string
    let tHashMap = {};
    //create a variable that will hold number type
    let current = 0;
    //create a while loop 
    while(current <= s.length-1) {
        //if the hashmap of the current s does not match that of the hashmap of current t we will return false
        if (sHashMap[s[current]] !== tHashMap[t[current]]) {
            return false;
        }
        //we will incrmenet the current by 1 to each hashmap
        sHashMap[s[current]] = current + 1
        tHashMap[t[current]] = current + 1
        //increment current by 1
        current++
    }
    return true;
};

console.log(isIsomorphic('egg','add')) // true
console.log(isIsomorphic('foo', 'bar')) //false
console.log(isIsomorphic('paper', 'title')) //true