//Complete the function that takes two integers (a, b, where a < b) and 
//returns an array of all integers between the input parameters, including them.
//EXAMPLE
/*
a = 1
b = 4
--> [1, 2, 3, 4]
*/

//My solution
function between(a, b){
    let nums = [];
    while(a <= b){
        nums.push(a);
        a++;
    }
    return nums;
}
//OR
function between(a, b){
    let arr = []
    for(i = a; i <= b; i++){
        arr.push(i)
    }
    return arr;
}
