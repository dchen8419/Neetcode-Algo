// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting 
// some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

var isSubsequence = function(s:string, t:string) {
    //create a new variable, newS, that will split the s string into individual characters
    let newS: string [] = s.split('')
    //create a new variable, newT, that will also split the t string into individual characters
    let newT: string [] = t.split('')
    //create an empty array that will hold the letters
    let newStack: string[] = []
    //create a variable that will keep count
    let count: number = 0
    //create a for loop starting at 0 and the length of newT but it doesn't matter if it's newT or newS
    for( let i: number = 0; i < newT.length; i ++ ) {
        //if the newS index element is the same as the newT index element we will push the newT element into the newStack and then increment the counter by 1
        if (newT[i] === newS[count]) {
            newStack.push(newT[i])
            count = count + 1
            
        } else if (newS[count] !== newT[i]) {
            continue
        } 
    }
    if (newStack.toString() == newS.toString()) {
        return true
    } else {
        return false
    }
};


console.log(isSubsequence("abc","ahbgdc")) //true
console.log(isSubsequence("axc","ahbgdc")) //false