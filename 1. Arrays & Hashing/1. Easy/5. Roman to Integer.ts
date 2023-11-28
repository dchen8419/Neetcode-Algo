// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


function romanToInt(s: string) {
    //create a hashmap of the roman numerals
    //create a variable for the result
    //for loop through the string starting at the beginning
        //create varaiable for current
        //create varaible for next
        
}

// var romanToInt = function(s: string) {
//     //create a hashmap of the roman integers and their values
//     const sym = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }
//     //create a result varaible where it will hold the number
//     let result: number = 0;
//     //create a for loop to loop through the string
//     for (let i = 0; i < s.length; i++) {
//         //create a variable called cur for the current key in the sym hashamp
//         const cur = sym[s[i]];
//         //create a variable for the next element after current
//         const next = sym[s[i + 1]];
//         //first condition if the cur is less than the next we will add to the result with the next subtracting the cur then incrementing i by one skipping the next number that was already in place
//         if (cur < next) {
//             result += next - cur;
//             i++;
//         //everything else we will set the result to the cur variable number
//         } else {
//             result += cur;
//         }
//     }
//     //finally return the result
//     return result;
// };

console.log(romanToInt("III")) // 3
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994