// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

var wordPattern = function(pattern: string, str: string) {
    const words = str.split(" ");
    const map = new Map();
    
    //Check to see if the lengths are the same
    if(words.length !== pattern.length) return false;
    //Check if the set of words and set of pattern is the same
    if(new Set(words).size !== new Set(pattern).size) return false;
    //Loop through pattern and if it has the element and cannot get the same element from teh index then return false
    for(let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) {
            return false
        };
        //add or update the map with the current index with pattern and word
        map.set(pattern[i], words[i]);
    }
    //other wise when done with loop return true
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog")) // true
console.log(wordPattern("abba", "dog cat cat fish")) // false
console.log(wordPattern("aaaa", "dog cat cat dog")) // false