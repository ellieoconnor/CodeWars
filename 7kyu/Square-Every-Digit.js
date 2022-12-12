//7KYU
//SQUARE EVERY DIGIT
/*****
Welcome. In this kata, you are asked to square every digit of a number
and concatenate them.
For Example, if we run 9119 through the function, 811181 will come out,
because 9-squared is 81 and 1-squared is 1. 
********/

//MY SOLUTION

function squareDigits(num){
    let numStr = num.toString(); //first convert the number to a string
    numStr = numStr.split(''); //Split the string into an array
    let numArray = numStr.map(x=> Number(x)); //Convert the string elements into numnbers
    numArray.forEach((x, i)=> numArray[i] = Math.pow(x, 2)); //square each number in the array.
    n = Number(numArray.join('')); //join the numbers back together and convert them from string to number
    return n; //return the number
};