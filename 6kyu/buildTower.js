//INSTRUCTIONS
/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
A tower block is represented with "*" character.
EXAMPLE
3 ==>
"   *   "
"  ***  "
" ***** " */
function towerBuild(n){
    return Array.from({length: n}, function(v, k) {
        const spaces = " ".repeat(n-k-1);
        return spaces + "*".repeat(k+k+1) + spaces;
    });
}