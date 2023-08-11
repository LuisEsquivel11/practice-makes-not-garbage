"use strict"

// 2. Given an array of integers, find the sum of its elements.
function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        let num = ar[i]
        sum += num
    }
    return sum;

}

// 4. Alice and Bob compare 2 arrays and add a point to whoever has the greater value
// index for index , if they are equal neither gets a point. Return both scores.
function compareTriplets(a, b) {
    let aScore = 0;
    let bScore = 0;
    let scores = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aScore++;
        } else if (a[i] < b[i]) {
            bScore++;
        } else {

        }
    }
    scores.push(aScore);
    scores.push(bScore);
    return scores;
}

// 5. (Java)
// In this challenge, you are required to calculate and print the sum of the elements in an
// array, keeping in mind that some of those integers may be quite large.

// public static long aVeryBigSum(List<Long> ar) {
//     long total = 0;
//     for (Long num : ar) {
//         total += num;
//     }
//     return total;
//
// }