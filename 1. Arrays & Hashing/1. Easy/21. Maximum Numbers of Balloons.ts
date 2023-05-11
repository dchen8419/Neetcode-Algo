// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0

var maxNumberOfBalloons = function(text: string) {
     //create a map of balloon
    const map = {
        'b': 0,
        'a': 0,
        'l': 0,
        'o': 0,
        'n': 0,
    }
    //loop through text: string and increment values of map
    for ( const l of text ) {
        map[l]++
    }
    //find the minimum number of the values
    //l and o repeat so we need to divide by 2
    //if a letter value is 0, it will return a 0
    // will return the mininum number
    return Math.floor(Math.min(map.b, map.a, map.l / 2, map.o/ 2,map.n))
};


console.log(maxNumberOfBalloons("nlaebolko")) //1
console.log(maxNumberOfBalloons("loonbalxballpoon")) //2
console.log(maxNumberOfBalloons("leetcode")) //0