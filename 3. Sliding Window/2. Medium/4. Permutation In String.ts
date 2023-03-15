// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.



// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

var checkInclusion = function(s1: string, s2: string) {
     //s1 abc
    // s2 ab
    // edge case:
    // check to see if s1 length is less than s2, becus eif it greater, we cant do anything
    // if this is true, return false
    if (s1.length > s2.length){
        return false
    }

    // create object (cache) to hold all our letters and how many times they occured based on s1
    const cache = {}
    s1.split("").forEach(letter => {
        //if our letter exists in cache, we increase by1
        if (cache[letter] !== undefined) {
            cache[letter]++
        } else {
            cache[letter] = 1
        }
    })
    // 2 pointers!
    // left pointer
    let leftPointer = 0;
    //right pointer
    let rightPointer = 0;
    // requried length will keep track of the nubmer of remaining items we need in our cache
    // we do this so we dont loop through our cache every time and do a count.
    let requiredLength = s1.length
    while (rightPointer < s2.length) {
        // If we found s2 character in s1 i.e in neededChar then we decrease requiredLength
        if (cache[s2[rightPointer]] > 0) {
            requiredLength--;
        }
        // Since we have encountered new char i.e s2[right] we decrease it's 
        // count in neededChar even if it is not present in neededChar because we only care about neededChars
        cache[s2[rightPointer]]--;
        rightPointer++ //window is incremented by 1 step

        // Now if our requiredLength becomes 0 it means we have found a match of the s2 substring
        // So we return true
        if (requiredLength === 0) return true;

        // If our window length is equal to s1 length (length of string to search in s2)
        // then we have to remove left element of window i.e left++ and add new element from right 
        // will be added in next iteration

if (rightPointer - leftPointer === s1.length) {
            // if the left element we are removing was a required character then we increase requiredLength
            // because that element will no longer be the part of sliding window
            if (cache[s2[leftPointer]] >= 0) {
                requiredLength++;
            }
            // We will also increase the count of left element removed from window
            cache[s2[leftPointer]]++;
            // And finally we will decrease the window size by 1 from left i.e left++
            leftPointer++
        }
    }
    return false
};

console.log(checkInclusion("ab","eidbaooo")) // true
console.log(checkInclusion("ab","eidboaoo")) // false