// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


function lengthOfLastWord(s: string) {
    //create a new varaible for the modified argument by turning the string to lowercase and remove the space in front of the string and after
    let newS = s.toLowerCase().trim();
    console.log(newS)
    //create an edge case if it's only one letter in the string we return one
    if (newS.length === 1) {
        return 1
    };
    //create a counter to keep track of the last word starting at 0
    let counter = 0;
    //create a for loop starting from the end and decrementing back to 0th index
    for ( let i = newS.length-1; i >= 0; i-- ) {
        //once we hit a space in the string we will return the count
        if (newS[i] === ' ') {
            return counter
        }
        //but if we don't hit a space we will increase count
    }
    //we can return the count if we finish if needed
}



// function lengthOfLastWord(s: string) {
//     let newS: string = s.toLowerCase().trim()
//     console.log(newS)
//     if (newS.length === 1) {
//         return 1
//     }
//     console.log(newS)

//     let count: number = 0;
//     for ( let i: number = newS.length-1; i >= 0; i--) {
//         console.log(newS[i])
//         if (newS[i] === ' ') {
//             return count
//         } else {
//             count+=1
//         }
//     }
//     return count
// }

// console.log(lengthOfLastWord("Hello World")) //5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) //4
// console.log(lengthOfLastWord("luffy is still joyboy")) //6
// console.log(lengthOfLastWord("a")) //1
// console.log(lengthOfLastWord(" a")) // 1
// console.log(lengthOfLastWord("    day")) // 3
console.log(lengthOfLastWord("word")) //4
