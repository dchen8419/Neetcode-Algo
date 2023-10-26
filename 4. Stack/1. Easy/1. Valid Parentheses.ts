// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/*
Approach: 
We will use a stack and a hashmap to hold and compare the elements.
Utilizing a for loop we can loop through the string and break up each element to compare if it's either closing or opening.
The idea is that if they're all matching the stack will be empty at the end and we can return true but if it's still holding an item we will return false.
*/

var isValid = function(s: string) {
    //we create a stack to hold our elements
    let stack: string[] = []
    //we create a hashmap to hold our references

    //use a loop to go through string
        //if the element matches the opening we will push it to the stack
        //else if the element is a closing and it matches the hashmap we will pop it off

    //return true if the stack is empty and false if the stack still have elements after loop
}

console.log(isValid("()")) //true
console.log(isValid("()[]{}")) //true
console.log(isValid("(]")) //false