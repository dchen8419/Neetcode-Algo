// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]


var dailyTemperatures = function(temperatures: number[]) {
    // Create an array to store the number of days until the next warmer temperature
    const result: number[] = new Array(temperatures.length).fill(0);
    
    // Create a stack to store the indices of the temperatures
    const stack:number[] = [];
    
    // Iterate through the temperatures array
    for (let i = 0; i < temperatures.length; i++) {
        // Pop the indices off the stack while the temperature at the current index is greater than the temperature at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            // Get the index at the top of the stack
            const idx: number | undefined = stack.pop();
            // Set the result at the index to the number of days until the next warmer temperature
            if (idx !== undefined) {
                result[idx] = i - idx;
            }
        }
        
        // Push the current index onto the stack
        stack.push(i);
    }
    
    return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])) //[1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])) //[1,1,1,0]
console.log(dailyTemperatures([30,60,90])) //[1,1,0]