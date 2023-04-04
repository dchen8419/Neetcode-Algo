// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.


// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

var minEatingSpeed = function(piles: number[], h:number) {
     // Start at an eating speed of 1.
    let speed = 1;

    while (true) {
         // hourSpent stands for the total hour Koko spends with 
         // the given eating speed.
        let hourSpent = 0;

         // Iterate over the piles and calculate hourSpent.
         // We increase the hourSpent by ceil(pile / speed)
        for (const pile of piles) {
            hourSpent += Math.ceil(pile / speed);
        }        
        
         // Check if Koko can finish all the piles within h hours,
         // If so, return speed. Otherwise, let speed increment by
         // 1 and repeat the previous iteration.
        if (hourSpent <= h) {
            return speed;
        } else {
            speed += 1;
        }
    }
};

console.log(minEatingSpeed([3,6,7,11], 8)) //4
console.log(minEatingSpeed([30,11,23,4,20], 5)) //30
console.log(minEatingSpeed([30,11,23,4,20], 6)) //23