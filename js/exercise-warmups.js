"use strict"

// ================================= WARM UP
// Create a function, returnProduct, that takes in an array of numbers and returns the product of all the numbers.
//     Assume all element in the input array are valid numbers. Assume all array inputs have at least 1 number.
// returnProduct([1, 2, 3]) // returns 1 * 2 * 3 = 6
// returnProduct([3, 3, 3]) // returns 3 * 3 * 3 = 27
// returnProduct([4, 1, 2]) // returns 4 * 1 * 2 = 8
// returnProduct([4, 0, 2]) // returns 4 * 0 * 2 = 0
// returnProduct([5, 3, 2]) // returns 5 * 3 * 2 = 30

function returnProduct([input1, input2, input3]) {
    return (isNaN(input1) || isNaN(input2) || isNaN(input3)) ? false : input1 * input2 * input3;
}  console.log(returnProduct([1, 2, 3])) // returns 1 * 2 * 3 = 6
console.log(returnProduct([3, 3, 3])) // returns 3 * 3 * 3 = 27
console.log(returnProduct([4, 1, 2])); // returns 4 * 1 * 2 = 8
console.log(returnProduct([4, 0, 2])); // returns 4 * 0 * 2 = 0
console.log(returnProduct([5, 3, 2])); // returns 5 * 3 * 2 = 30