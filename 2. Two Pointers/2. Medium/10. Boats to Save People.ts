// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. 
// Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
// Return the minimum number of boats to carry every given person.

// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)
// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
// Example 3:

// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

/*
Approach:
1. Sort the people array in non-decreasing order.

2. Initialize the left pointer to the first element of the array, and the right pointer to the last element of the array.

3. Initialize a counter variable boats to 0.

4. While the left pointer is less than or equal to the right pointer, do the following:
a. Check if the sum of the weights of the people at the left and right pointers is less than
or equal to the limit.
b. If the sum is less than or equal to the limit, move the left pointer one step to the
right to include the next lightest person.
c. Move the right pointer one step to the left to include the next heaviest person,
regardless of whether or not they can fit on the current boat.
d. Increment the boats counter by 1.

5. Return the boats counter, which represents the total number of boats used.
*/

var numRescueBoats = function(people: number[], limit: number) {
    //sort people param from small to large
    people.sort((a,b) => a -b);
    //create left variable starting at 0
    let left = 0;
    //create right varaible starting at the end of number array
    let right = people.length-1;
    //create a varable boats that will hold a number starting at 0
    let boats = 0;
    //create a while loop where left is less than or equal to right
    while ( left <= right ) {
        // if people at left index  and people at right index is less than or equal to the limit we will increase left by 1
        if (people[left] + people[right] <= limit) {
            left++
        };
        //other than that we will always decrease right by one
        right--;
        //and increase boats by 1
    }
    //return boats
};

console.log(numRescueBoats([1,2], 3)) //1
console.log(numRescueBoats([3,2,2,1], 3)) //3
console.log(numRescueBoats([3,5,3,4], 5)) //4