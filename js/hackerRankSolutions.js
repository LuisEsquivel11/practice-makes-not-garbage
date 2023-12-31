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
        // console.log(space);
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
// console.log(miniMaxSum(array))

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


//Time Conversion
/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.*/
// let s = '1:01:00AM'
// let a = '2:01:00PM'
// // let b = '4:01:00PM'
// let c = '6:01:00PM'
// let d = '1:01:00PM'
// let e = '10:01:00PM'
// let f = '11:01:00PM'
// function timeConversion(s) {
//     let time = s.split(':')
//     let minutes = time[1]
//     let seconds = time[2].slice(0,2)
//     let hour = parseInt(s.split(":"));
//     if (s.includes("PM")) {
//        if(hour === 12) {
//            hour = "12";
//        } else {
//         hour += 12;
//        }
//     } else {
//         if (hour === 12 ) {
//             hour = "00";
//         }
//     }
//     hour = hour.toString().padStart(2, "0");
//
//     return `${hour}:${minutes}:${seconds}`;
// }
// console.log(timeConversion(s), s)
// console.log(timeConversion(a), a)
// console.log(timeConversion(b), b)
// console.log(timeConversion(c),c)
// console.log(timeConversion(d), d)
// console.log(timeConversion(e),e)
// console.log(timeConversion(f), f)

// Grading Students
let grades = [4,
    73,
    67,
    38,
    33,
]
function gradingStudents(grades) {
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38 && grades[i] % 5 === 3 ) {
            grades[i] = grades[i] + 2
            roundedGrades.push(grades[i])

        } else if (grades[i] >= 38 && grades[i] % 5 === 4) {
            grades[i] = grades[i] + 1
            roundedGrades.push(grades[i])

        } else {
            roundedGrades.push(grades[i])
        }
    }
    return roundedGrades
}

//Breaking the records

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
    let highScore = scores[0]
    let lowScore = scores[0]
    let beatScore = 0;
    let didntBeatScore = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > highScore) {
            highScore = scores[i]
            beatScore++;
        } else if (scores[i] < lowScore) {
            lowScore = scores[i]
            didntBeatScore++;
        }

    }
        return [beatScore, didntBeatScore]

    //if the next score is greater than highscore , that is now the highest score and 1 point is add to beatScore

    // if score is less than low score , that is now the low score and 1 point is added to didnt beat score

}

// Divisible sum pairs
let ar = [1, 3, 2, 6, 1, 2]
// let n = ar.length;
// let k = 3
// divisibleSumPairs(n, k, ar)
//     function divisibleSumPairs(n, k, ar) {
//         let counter = 0;
//
//         for (let i = 0; i < ar.length; i++) {
//             for (let j = i + 1; j < ar.length; j++) {
//                 if ((ar[i] + ar[j]) % k === 0) {
//                     counter++;
//                 }
//             }
//         }
//
//         return counter;
//     }
//
//    console.log(divisibleSumPairs(n, k , ar))


    // Bill Division

// const bill = [3, 10, 2,9]
// // let k = 1;
// let b = 4;
// function bonAppetit(bill, k, b) {
//     let billTotal = 0;
//     let annasActualBill = 0;
//     for (let i = 0; i < bill.length; i ++) {
//         billTotal += bill[i]
//     }
//     annasActualBill = (billTotal - bill[k]) / 2
//     console.log(billTotal, annasActualBill)
//     let difference = annasActualBill - b;
//     if (difference === 0) {
//         console.log( "Bon Appetit");
//     } else {
//        console.log( difference);
//     }
//
// }
// The Hurdle Race

// function hurdleRace(k, height) {
//     const highestHurdle = height.reduce((a, b) => Math.max(a, b), -Infinity);
//
//     if (k >= highestHurdle) {
//         return 0;
//     } else {
//         return highestHurdle - k;
//     }
// }
// Counting valleys
let steps = 8
let path = ['U','D','D','D','U','D','U','U']

function countingValleys(steps, path) {
    let valleys = 0;
    let elevation = 0;

    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'U') {
            elevation++;
            if (elevation === 0) {
                valleys++;
            }
        } else if (path[i] === 'D') {
            elevation--;
        }
    }
    return valleys;
}
// console.log(countingValleys(steps, path));

// SubArray Division

const s = [1, 2, 1, 3, 2]
// const s = [1, 1, 1, 1, 1, 1]
const d = 3
    const m = 2
function birthday(s, d , m) {
    let counter = 0;
    let sum;
    for (let i = 0; i <= s.length - m; i++) {
         sum = 0
        for(let j = i; j < i + m; j++) {
            sum += s[j]
            }
                if (sum === d) {
                    counter++
                }
    }
            return counter ;

}

// Cats and Mouse
const x = 1
const y = 2
const z = 3

function catAndMouse(x, y, z) {
    let catA = x;
    let catB = y;
    let winner = '';
    if (Math.abs(z - catA ) > Math.abs(z - catB )) {
            winner = "Cat B";
    } else if (Math.abs(z - catB) > Math.abs(z - catA)) {
            winner = "Cat A "
    } else {
        winner = "Mouse C";
    }
        return winner
}

// Designer pdf viewer

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ,5, 5, 5, 5, 7]
let word = 'abc'
function designerPdfViewer(h, word) {
    let tallestLetter
    let letterCode ;
    let heights = []
    for (let i = 0; i < word.length; i++) {
        letterCode = word.charCodeAt(i) - 97
        heights.push(h[letterCode])
    }
    for (let j = 0; j < heights.length; j++) {
        tallestLetter = heights.reduce((a, b) => Math.max(a, b), -Infinity)
    }
    return  word.length * 1 * tallestLetter
}

// Viral Advertising
//Day  Shared  Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24
// let n = 3
function viralAdvertising(n) {
    let shared = 5
    let totalLikes = 0;
    if (n > 1) {
        for (let i = 0; i < n; i++) {
            let likes = Math.floor(shared / 2)
            shared = likes * 3;
            totalLikes += likes;
        }
    } else {
        totalLikes = Math.floor(shared / 2)
    }
        return totalLikes
}

// Utopian Tree

function utopianTree(n) {
    let height = 1
    let increase = 1
    for (let i = 1; i <= n; i++)
        if (n > 0  && (i % 2 !== 0) ) {
            height *= 2;
            console.log(height, i)
        } else if (n > 1 && (i % 2 === 0)) {
            height += 1;
            console.log('hello')
        }
    return height;
}
// console.log(utopianTree(3))
// console.log(utopianTree(4))

// Angry Professor

const k = 3;
let a = [-2, -1, 0, 1, 2, -3, -4, 4]
function angryProfessor(k, a) {
    let onTime = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            onTime++
        }
    }
    if (onTime >= k) {
        return "NO"
    } else {
        return "YES"
    }
}

// Find Digits

function findDigits(n) {
    let count = 0;
    let digits = n.toString().split('')
    for (let i = 0; i < digits.length; i++) {
        if (n % parseInt(digits[i]) === 0 ) {
            count++
        }
    }
    return count;
}

// Beautiful Days at the movies

// function beautifulDays(i, j, k) {
//     let count = 0;
//    const reversed = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
//
//     for (let x = i; x <= j; x++) {
//         console.log(x - reversed(x) )
//         if (Number.isInteger(x - reversed(x) / k) || x - reversed(x) === 0 ) {
//             count++
//         }
//     }
//    // if( Number.isInteger(i - reversed(i) % k) ) {
//
//     return count;
// }
//
// console.log(beautifulDays(20, 23, 6));

// Picking Numbers


function pickingNumbers(a) {
    let count = 0
    a.forEach( num => {
        const subarray = a.filter( subNum => num - subNum === 0 || num - subNum === 1);
        if( subarray.length > count) count = subarray.length;
    });
    return count;
}

