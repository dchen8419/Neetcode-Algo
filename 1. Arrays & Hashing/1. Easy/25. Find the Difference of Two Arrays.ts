// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.



// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

var findDifference = function(nums1: number[], nums2: number[]) {
    let difNums1: number[] = [];
    let difNums2: number[] = [];

    for ( let i = 0; i < nums1.length; i ++ ) {
        for ( let j = 0; j < nums2.length; j ++ ) {
            if (nums1[i] !== nums2[j]) {
                difNums1.push(nums1[i])
            } else {
                break
            }
        }
    }

    return [[...new Set(difNums1)], [...new Set(difNums2)]]


};

console.log(findDifference([1,2,3],[2,4,6])) //[[1,3],[4,6]] first array will only return what is different of the first array, second array will return what is different of that array
// console.log(findDifference([1,2,3,3],[1,1,2,2])) //[[3],[]]