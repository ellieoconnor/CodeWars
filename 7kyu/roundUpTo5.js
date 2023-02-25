/**
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

EXAMPLES:
0 -> 0
2 -> 5
3 -> 5
12 -> 15
21 -> 25
30 -> 30
-5 -> -5
 */

function roundToNext5(n){
    let decValue = n / 5;
    let ceilValue = Math.ceil(decValue);
    return 5*ceilValue;
}

//Alternate answer
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}