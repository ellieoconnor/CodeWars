//GRASSHOPPER - BASIC FUNCTION FIXER
/*
I created this function to add five to any number that was passed in to it and return the new value.
It doesn't throw any errors but it returns the wrong number
*/

function addFive(num){
    var total = num +5;
    return num;
}

//fixed
function addFive(num){
    let total = num + 5;
    return total; //fixed line
}

//alternate
function addFive(num){
    return num + 5;
}