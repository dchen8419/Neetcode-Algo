// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

let MyStack = function() {
    //create a new stack with am empty array and using this keyword
    this.stack = [];
};

MyStack.prototype.push = function(x: number) {
    //push the arg to the top of the stack
    this.stack.push(x);
};

MyStack.prototype.pop = function() {
    //pop off the last element in the stack which is using pop method but we need to check if the stack contains any elements
    if (this.stack.length === 0) {
        return null; //we can also throw an error because popping from an empty stack is undefined behavior
    }
    return this.stack.pop();
};

MyStack.prototype.top = function() {
    //return the first element added to the stack but we need to check if there are any elements in the stack
    if (this.stack.length === 0) {
        return null;
    }
    return this.stack[this.stack.length-1];
};

MyStack.prototype.empty = function() {
    //return the stack if the stack is empty 
    return this.stack.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */