// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].

var totalFruit = function(fruits: number[]) {
    //create a new map
    const map = new Map();
    //create a variable that will hold the ans which will be a number
    let ans = 0;
    //add variable function add that will map over a set get the param or 0 then add to the set
    const add = (e: number) => {
        map.set(e, (map.get(e) || 0) + 1);
    }
    //add a varaible function remove that will remove the number in the set
    const remove = (e: number) => {
        if (map.get(e) == 1) map.delete(e);
        else map.set(e, map.get(e) - 1);
    }
    //create a varaible r that will equal 0
    let r = 0;
    //create a variable l that will equal 0
    let l = 0;
    //create a while loop where the condition is r is less than the fruits array length
    while ( r < fruits.length ) {
        //first condition is if the map size is less than or equal to 1 or the map size is equal to 2 and the map have the fruits at [r] 
        if (map.size <=1 || (map.size === 2 && map.has(fruits[r]))) {
            //then we can add the fruit[r] and r++
            add(fruits[r]);
            r++
        //everything else we will remove the fruits[l] and then increment the l
        }

    };
    //return ans varaible
    return ans;
};

console.log(totalFruit([1,2,1])) //3
console.log(totalFruit([0,1,2,2])) //3
console.log(totalFruit([1,2,3,2,2])) //4