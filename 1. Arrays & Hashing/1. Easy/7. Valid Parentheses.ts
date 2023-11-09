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
     // Initialize stack to store the closing brackets expected...
    let stack: string[] = [];
     // Traverse each charater in input string...
    for (let i = 0; i < s.length; i++) {
         // If open parentheses are present, push it to stack...
        if (s[i] == '{') {
            //if the brace is open then we will push the closing brace into the stack
            stack.push('}');
            //else if the square brace is opening we will push the closing brace into the stack
        } else if (s[i] == '[') {
            stack.push(']');
        } else if (s[i] == '(') {
            stack.push(')');
        }
         // If a close bracket is found, check that it matches the last stored open bracket
        else if (stack.pop() !== s[i]) {
            return false;
        }
    }
    return !stack.length;
};

console.log(isValid("()")) //true
console.log(isValid("()[]{}")) //true
console.log(isValid("(]")) //false