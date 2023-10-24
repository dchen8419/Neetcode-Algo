// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
// Example 2:

// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
// Example 3:

// Input: ops = ["1","C"]
// Output: 0
// Explanation:
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.

var calPoints = function(operations: string[]) {
    //create an variable that will hold the stack array
let stack: number[] = [];

    //loop through the operations array
    for ( let i = 0; i < operations.length; i ++ ) {
        //we will set up 4 conditions
        //first condition is for the "+"
        if (operations[i] === "+") {
            //we will push the i into the stack and then add the previous two scores
            stack.push(stack[stack.length-1] + stack[stack.length-2])
        }
        //second condition is for the "D"
        else if ( operations[i] === "D") {
            //Where we push a new score but it's double of the previous score
            stack.push(2*stack[stack.length-1])
        }
        //third condition is for the "C"
        else if (operations[i] === "C") {

        }
        //fourth is everything else where we push into the stack array
        else {
            stack.push(parseInt(operations[i]))
        }
    }


    //return the sum of the stack array
    return stack.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

console.log(calPoints(["5","2","C","D","+"])) //30
console.log(calPoints(["5","-2","4","C","D","9","+","+"])) //27
console.log(calPoints(["1","C"])) //0