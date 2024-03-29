// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, 
// and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.



// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

var canPlaceFlowers = function(flowerbed: number[], n: number) {
	//set current variable to zero
    let current = 0; 
	//create a variable that holds the number of items in flowerbed
    const size = flowerbed.length;
	//create a for loop starting at zero and moving up the size variable number
	for(var i = 0; i <= size; i++) {
		//if condition to cehck if the index is less than the flowerbed length and the element at that index is equal to zero
		if (i < size && flowerbed[i] == 0) {
			current++;
			if (i == 0) current++;
			if (i == size - 1) current++;
		} else {
			n -= Math.trunc((current - 1) / 2);
			if (n <= 0) return true;
			current = 0;
		}
	}
	return false;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)) // false