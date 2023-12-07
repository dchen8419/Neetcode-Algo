// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


const topKFrequent = (nums: number[], k:number) => {
    //create cache {}
    const cache = {}
    // !! count things in a cache
    // for loop through our nums array
    for (let i = 0; i < nums.length; i +=1) {
        // if the number doesnt exist in our cache, create it and set it to 1
        let number = nums[i]
        if (cache[number] === undefined){
            cache[number] = 1
        } else {
        // if it does exist, take that number increment by 1
            cache[number] +=1
        }
    }
    //return an array of array of the key value pairs
    let sortedAnswer = Object.entries(cache).sort(([k1, v1]: any, [k2, v2]: any) => {
        return v2 - v1
    })
    console.log(sortedAnswer)
    //slice the array starting at 0 and then ending at the kth position
    let slicedAnswer = sortedAnswer.slice(0, k)
    //we will map through the slicedAnswer variable and pluck the numbers we need using the map method preferencing the k value
    let pluckedAnswer = slicedAnswer.map(([k]) => {
        return k
    })
    
    return pluckedAnswer
}


// var topKFrequent = function(nums, k) {
//     //create cache {}
//     const cache = {}
//     // !! count things in a cache
//     // for loop through our nums array
//     for (let i = 0; i < nums.length; i +=1) {
//         // if the number doesnt exist in our cache, create it and set it to 1
//         let number = nums[i]
//         if (cache[number] === undefined){
//             cache[number] = 1
//         } else {
//         // if it does exist, take that number increment by 1
//             cache[number] +=1
//         }
//     }
//     return Object.entries(cache).sort(([k1, v1], [k2, v2]) => {
//         return v2- v1
//     }).sortedAnswer.slice(0, k).map(([k, v]) => {
//         return k
//     })
// };


console.log(topKFrequent( [1,1,1,2,2,3], 2)) //[1,2]
console.log(topKFrequent( [1], 1)) //[1]