// You are given a binary string s. You are allowed to perform two types of operations on the string in any sequence:

// Type-1: Remove the character at the start of the string s and append it to the end of the string.
// Type-2: Pick any character in s and flip its value, i.e., if its value is '0' it becomes '1' and vice-versa.
// Return the minimum number of type-2 operations you need to perform such that s becomes alternating.

// The string is called alternating if no two adjacent characters are equal.

// For example, the strings "010" and "1010" are alternating, while the string "0100" is not.

// Example 1:

// Input: s = "111000"
// Output: 2
// Explanation: Use the first operation two times to make s = "100011".
// Then, use the second operation on the third and sixth elements to make s = "101010".
// Example 2:

// Input: s = "010"
// Output: 0
// Explanation: The string is already alternating.
// Example 3:

// Input: s = "1110"
// Output: 1
// Explanation: Use the second operation on the second element to make s = "1010".

/*
Intuition - Approach
It seems a lot more complicated in the beginning, than what it actually is.
You just have to realize that for any string there are only 2 scenarios you have to compare with, only 2 binary strings to compare with.
One that starts with a zero and alternating bits are folowing, and another that starts with 1 and alternating bits are folowing. Both have to be of same length as the input string.

The Type-2 operation:
We are talking for a binary input, let's consider this one 10111010 (this is of length 8).
So, we need to have an alternating string of zeros and ones. As we already said, this means that our string will ether start with 0 or 1 and the rest of the bits will alternate.
So we have only two strings to compare our input with.

We will compare every bit of our input with the corresponding bit of 01010101(this is even cause it starts with 0) and 10101010 (this is odd cause it starts with 1).
These, are both of length 8 of course, like our input.

We can construct our even and odd strings like this:

let evenOfSameLength = "";
let oddOfSameLength = "";

//'^' represents the XOR operation
for (let i = 0; i < s.length; i++) {
    evenOfSameLength += i % 2; // "01..."
    oddOfSameLength += i % 2 ^ 1; // "10..."
}
So, according to the type-2 operation, we have to count how many flips we need to make to our input so to be identical to our even or odd alternating strings. We check bit by bit and keep track of these flips and return the result.
Sounds easier now, but there is one more thing to bear in mind, the type-1 operation...

The Type-1 operation:
We might need less flips for a given string if we move it's first bit to the end and compare every bit of our new string with our even and odd strings.

Let's consider an input 1101. Moving it's first bit to the end will be like 1011(1st time we used the type-1 op), let's repeat that procedure 0111(2), 1110 (3), 1101 (4). Ok, let's stop right here.
So, after running our first operation for sting.length times, we ended up in the same string.
There is no reason to continue using this procedure any more.

If we just double our string (so 1101 will become 11011101), and compare an input.length window (so our first window would be [1101]1101) with our even and odd alternating strings, then we would have "mocked" the type-1 operation.
And this is where the Sliding Window approach comes handy.

Finally:
1) We have to double our string and to compare each bit inside of a window of constant length (length of input) with our even and odd strings of same length.
2) Our window will slide towards the end of our doubled string until we reach the last bit.
3) We keep track of the needed flips for every window, and return the min number of flips.

Enhancement:
There is no need to use the Type-1 operation on inputs of even length (if the length of the binary number is even, not the binary number itself).

We could do something like this:
if (s.length % 2 === 1) s += s;
We double the s only if it's of odd length.

More about this:
Let's consider an even length alternating binary num 101010.
Now let's apply the type-1 operation 010101 (1st time), 101010 (2)...its the same already...
Every time it's the same as one of our even and odd alternating strings.

For even-length alternating bin number we just have 2 alternatives, one that starts with 0 (even binary) and one that starts with 1 (odd binary).

For an odd length alternating binary num 1010101, apply type-1 op 0101011 (1st time), 1010110 (2), 0101101(3), 1011010(4), 0110101(5), 1101010(6), 1010101(7) ...now it's the same!
We had to apply the procedure string.length times to get the same binary number.
This would be the case for both an odd-length even-binary alternating number like 0101010(starting with zero), and also for an odd-length odd-binary alternating number like 1010101 (starting with 1)

For odd-length bin number we ended up with 7 alternatives (string.length alternatives)!

Complexity
Time complexity:
O(n)

Space complexity:
O(1)
*/


var minFlips = function(s:string) {
    //edge case if there is no 's' or the s.length is less than 1 we will return 0

    //create a const where initalLen is equal to the initial s.length
    //create a condition if the initialLen is % 2 then we will make a copy of s and then attach it ot the end

    //create evenCmp variable set to 0
    //create oddCmp set to 0
    //create minFlips and set to Infinity
    //create end and set to 0
    //create start and set to 0

    //create a while loop where end is less than s.length
        //if the end is not even and is equal to Number(s[end]) we will increment evenCmp++
};

console.log(minFlips("111000")) //2
console.log(minFlips("010")) //0
console.log(minFlips("1110")) //1