/*INSTRUCTIONS
Write a function that takes an array of numbers and returns 
the sum of the numbers. The numbers can be negative or non-integer.
If the array does not contains any numbers, then you should return 0.

EXAMPLE
Input: [1, 5.2, 4, 0, -1]
Output: 9.23
*/

function sum(numbers){
    if(numbers.length === 0){
        return 0
    }else{
        return numbers.reduce((acc, c) => acc + c, 0);
    }
}

//another solution
function sum(numbers){
    return numbers.reduce((a, b) => a + b, 0);
}