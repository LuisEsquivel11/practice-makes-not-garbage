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

// 6. Plus minus

const arr = [1,1,0,-1,-1]

function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) === -1) {
            negatives += 1;
        } else if (Math.sign(arr[i]) === 1 ) {
            positives += 1;
        } else {
            zeros += 1;
        }
    }
    let zeroRatio = zeros / arr.length.toFixed(6);
    let positiveRatio = positives / arr.length.toFixed(6);
    let negativeRatio = negatives / arr.length.toFixed(6)
}
plusMinus(arr)


// Staircase

function staircase(n) {
    let space = "     "
    let sign = "#"
    for (let i = 0; i < n; i++) {

        space += sign;
        console.log(space);
    }

}
staircase(6)

// Mini-Max Sum
const array = [1, 2, 3, 4, 5]
function miniMaxSum(arr) {
    let total = 0;
    let sums = []
    for (let i = 0; i < arr.length; i++ ) {
        total += arr[i];
    }
    for (let i = 0; i < 5; i++) {
        sums.push(total - arr[i])
    }
    const max = sums.reduce((a, b)=> Math.max(a, b), -Infinity)
    const min = sums.reduce((a, b)=> Math.min(a, b))
    return console.log('%s, %s', min, max)
}
console.log(miniMaxSum(array))

// birthdayCakeCandles
/* You are in charge of the cake for a child's birthday. You have decided
the cake will have one candle for each year of their total age.
They will only be able to blow out the tallest of the candles.
Count how many candles are tallest.*/
const candles = [3, 2, 1, 3];

function birthdayCakeCandles(arr) {
    let tallCandles = 0;
    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    for (let num of arr) {
        if(num === max) {
            tallCandles++
        }
         }
         return tallCandles;
}
console.log(birthdayCakeCandles(candles))









