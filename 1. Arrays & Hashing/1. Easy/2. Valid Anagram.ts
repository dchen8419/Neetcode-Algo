// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/*
APPROACH: 
count the number of characters in the string and match them together in a hash map
 */

const isAnagram = (s:string, t:string) => {
    //Check if the lengths are the same and if they're not they are not anagrams
    if (s.length != t.length) {
        return false
    }
    //create two varaibles for s and t hashmaps
    let countS = {}, countT = {};
    //create a loop to populate/build the hashmap variables with the key being letters and value being the number of times it occures
    for ( let i = 0; i < s.length; i ++ ) {
        //create ternary operator populating both hashmaps in one loop
        countS[s[i]] = countS[s[i]] ? countS[s[i]] +=1 : 1
        countT[t[i]] = countT[t[i]] ? countT[t[i]] +=1 : 1
    }

    //iterate throug the hashmap to make sure count are the same
    for ( let i = 0; i < s.length; i ++ ) {
        //if the counts are not the same we can return false
    }
        
        
    //return true if all else fails because they are anagrams

}



// const isAnagram = (s:string, t:string) => {
//     //Check if length is the same
//     if (s.length !== t.length) {
//         return false
//     }
//     //create hashing
//     const sSeen = {}
//     const tSeen = {}

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i]
//         if (sSeen[char]) {
//             sSeen[char] += 1
//         } else {
//             sSeen[char] = 1
//         }
//     }

//     for (let i = 0; i < t.length; i++) {
//         const char = t[i]
//         if (tSeen[char]) {
//             tSeen[char] += 1
//         } else {
//             tSeen[char] = 1
//         }
//     }
//     console.log(sSeen)

//     const sUniqueLetters = Object.keys(sSeen)

//     for (let i = 0; i < sUniqueLetters.length; i++) {
//         const char = sUniqueLetters[i]
//         if (sSeen[char] !== tSeen[char]) {
//             return false
//         }
//     }

//     return true
// }

console.log(isAnagram("anagram","nagaram")) //true
// console.log(isAnagram("rat","car")) //false