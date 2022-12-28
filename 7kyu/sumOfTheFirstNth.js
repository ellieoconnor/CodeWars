/*INSTRUCTIONS
Your task is to write a function which returns 
the sum of the following series up to nth term (parameter).

You need to round the answer to 2 decimal places and return it as a string.

If the given value is 0, then it should return 0.00

You will only be given Natural Numbers as arguments.

EXAMPLES:
1 --> 1 ==> "1.00"
2 --> 1 + 1/4 ==> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 ==> "1.57"
*/

function seriesSum(n){
    let sum = 0; //sets the sum to 0
    for(let i = 0; i < n; i++){ //loops through the given number (n)
        sum += 1 / (3 * i + 1); //add 1 + 1 over what ever 3 * i is
    }
    return sum.toFixed(2);
}