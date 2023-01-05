//INSTRUCTIONS
/*
In this kata you will create a function that takes a list of non-negative integers and string and returns a new list with the string
filtered out.
EXAMPLE
filter_list([1,2,'a','b']) == [1,2] */

function filter_list(l){
    return l.filter((x) => typeof x === "number");
}