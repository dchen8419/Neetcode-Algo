// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. 
// You may return the answer in any order.

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

var findRepeatedDnaSequences = function(s: string) {
    let curr = s.slice(0, 10);
    const seen = new Set([curr]);
    const res = new Set();

    for(let i = 10; i < s.length; i++) {
        curr = curr.slice(1) + s[i];
        if(seen.has(curr)) res.add(curr);
        seen.add(curr);
    }
    return [...res]
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")) // ["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences( "AAAAAAAAAAAAA")) // ["AAAAAAAAAA"]

