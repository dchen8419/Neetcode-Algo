// Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

// Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

// A palindrome is a string that reads the same forwards and backwards.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".

// Example 1:

// Input: s = "aabca"
// Output: 3
// Explanation: The 3 palindromic subsequences of length 3 are:
// - "aba" (subsequence of "aabca")
// - "aaa" (subsequence of "aabca")
// - "aca" (subsequence of "aabca")
// Example 2:

// Input: s = "adc"
// Output: 0
// Explanation: There are no palindromic subsequences of length 3 in "adc".
// Example 3:

// Input: s = "bbcbaba"
// Output: 4
// Explanation: The 4 palindromic subsequences of length 3 are:
// - "bbb" (subsequence of "bbcbaba")
// - "bcb" (subsequence of "bbcbaba")
// - "bab" (subsequence of "bbcbaba")
// - "aba" (subsequence of "bbcbaba")

var countPalindromicSubsequence = function(s: string) {
    //Keeps track of the initial starting index of each unique character from the input string
    var l={}
	//Keeps track of the last index of each unique character from the input string
    var r={}
	//Counter for unique length-3 palindrome
    var res=0
	//Stores unique length-3 palindrome and checks for duplicates
    var marked= new Set();
    for (let i=0; i<s.length; i++){
        if (l[s[i]]==undefined)l[s[i]]=i
        r[s[i]]=i
    }
    
    for (let key in l){
	/*
            Since in a length 3 palindrome string, our first and last character must be the same,
            so we will need the first and last index of each unique character that occurs in the input string.
            
            For each unique character found in the input, or 'key' in this case, loop from the (firstOccurringIndex,lastOccurringIndex) of the character 
            and check for unique middle character.
            
            so if we have 'aabbbccda', and our current 'key' is the letter 'a',
            we will loop from the starting index (0) all the way to the last index (8) of 'a' 
            (excluding both starting and ending index, since we will be checking for middle
            character and form a length 3 palindrome with (key+middleCharacter+key))
            
            So if key is currently the letter 'a', the loop below will check for:
            'aaa',  'aba', 'aba', 'aba', 'aca', 'aca', 'ada'.  Here there are 4 unique palindromes.
            
            We move to the next key, 'b', so we check:
            'bbb' (note that there is only one middle character between the first and last index of 'b'). Here there is one unique palindrome.
            
            Then we will check the remaining unique keys, 'c' and 'd' following the same process as above. 
            There is no middle character for these two keys so we do not have a unique length 3 palindrome. 
            
            Therefore, the solution to the input string 'aabbbccda' will be 4+1+0+0 = 5.
	*/
        for (let i=l[key]+1; i<r[key]; i++){
            if (!marked.has(key+s[i]+key)){
                marked.add(key+s[i]+key);
                res++;
            }
        }
    }
    return res;
};

console.log(countPalindromicSubsequence("aabca")) //3
console.log(countPalindromicSubsequence("adc")) //0
console.log(countPalindromicSubsequence("bbcbaba")) //4