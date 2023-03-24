// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]


var generateParenthesis = function(n: number) {
    const arr:string[] = [];

    const compose = (left = n, right = n, str = "") => {
      // base case
        if (!left && !right && str.length) return arr.push(str);
        if (left) compose(left - 1, right, str + '(');
        if (right > left) compose(left, right - 1, str + ')');
    }
    compose();
    return arr;
};

console.log(generateParenthesis(3)) //["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)) //["()"]