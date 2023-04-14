// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = (strs: string[]) => {
        //create new array with sorted strings
        let anagramGrouped = {};
        //loop through array
        for( let i = 0; i < strs.length; i ++ ) {
            //at teach element, we sort the string into alpabetical order
            let sortedStr = strs[i].split('').sort().join('')
            //set conditional for making cache
            if (!anagramGrouped[sortedStr]) {
                    anagramGrouped[sortedStr] = [strs[i]]
                } else {
                    //pushing in the anagrams in values of anagramGrouped
                    anagramGrouped[sortedStr].push(strs[i])
                }
            }
            //return array with anagrams in array
            return Object.values(anagramGrouped)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) //[[""]]
console.log(groupAnagrams(["a"])) //[["a"]]