// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.



// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

var minWindow = function(s:string, t:string) {
    // coutn all the letters in our t string
    let cache = new Map();
    for (let char of t) {
        cache.set(char, (cache.get(char) || 0) + 1)
    }
    // couont how many letters are remaining in our t string
    let remainingCount = t.length;
    // length of our minimum answer
    let answerLength = Infinity;
    //left pointer
    let leftPointer = 0;
    //right pointer 
    let rightPointer = 0;
    //answer poitner left
    let rightAnswerPointer
    //answer poitner right
    let leftAnswerPointer
    // loop through with our right pointer
    while(rightPointer < s.length) {
        let rightLetter = s[rightPointer]
        // if the cache has that letter and the count of that letter is greater than 0, 
        if (cache.has(rightLetter)){
        // we need to decrement the coutn of that letter
            cache.set(rightLetter, cache.get(rightLetter) - 1);
            // obj[rightLetter] = obj[rightLetter] - 1
            // and we need to decrement the remanining count
            if (cache.get(rightLetter) === 0) remainingCount --;
        }
        // increment our right pointer
        rightPointer ++;
        //if my remaning count is 0, I need to do soemthign with theleft poitner
        // this means i foudn adesirable window
        while (remainingCount === 0) {

            // if my desirable window length is leess than my answer length, i need to update it
            if (rightPointer - leftPointer < answerLength) {

                answerLength = rightPointer - leftPointer
                rightAnswerPointer = rightPointer
                leftAnswerPointer = leftPointer
            }
            //increment my left pointer
            let leftLetter = s[leftPointer];
            // if this character is part of my bank, I need to udpat eit by putting it back in
            if (cache.has(leftLetter)) {
                cache.set(leftLetter, cache.get(leftLetter) + 1);
                // obj[leftLetter] = obj[leftLetter] + 1
                if(cache.get(leftLetter) > 0) remainingCount ++
            }
            // increment left pointer
            leftPointer ++;
        }
        // end of while loop
    }
    return rightAnswerPointer > 0 ? s.slice(leftAnswerPointer,rightAnswerPointer) : ""
};

console.log(minWindow("ADOBECODEBANC","ABC")) //"BANC"
console.log(minWindow("a","a")) //"a"
console.log(minWindow("a","aa")) //""