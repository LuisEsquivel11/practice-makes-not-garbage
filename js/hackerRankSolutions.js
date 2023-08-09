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

// 3. Alice and Bob compare 2 arrays and add a point to whoever has the greater value
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