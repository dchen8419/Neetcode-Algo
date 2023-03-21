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

var isValid = function(s: string) {
    const obj = {
        ")": "(",
        "]": "[",
        "}": "{"  
    }

    const stack: string[] = [];
    for (let char of s) {
        //if the char is a left parens (, [, { ... we want to push it into our stack
        if (char === '(' || char === "[" || char === "{") {
            stack.push(char)
        } else {
            //check to see if the expected correspoing left parentehes is at the top of our stack
            const topElementFromStack = stack[stack.length - 1]
            if (obj[char] === topElementFromStack) {
                // if it is, we pop it off
                stack.pop()
            } else {
                // if it isnt, return false
                return false
            }
        }
    }
    if (stack.length > 0) {
        return false
    } else {
        return true;
    }
};

console.log(isValid("()")) //true
console.log(isValid("()[]{}")) //true
console.log(isValid("(]")) //false