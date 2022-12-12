//CONVERT A STRING TO A NUMBER
/*
We need a function that can transform a string into a number.
What ways of achieving this do you know?
EXAMPLE
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/
//My solutons
const stringToNumber = function(str){
    return Number(str);
}

//OR
function stringToNumber(str){
    return Number(str);
}

//OR
const stringToNumber = str => Number(str);