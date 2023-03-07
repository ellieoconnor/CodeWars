//FINE THE MIDDLE ELEMENT
/*
You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between
the other two elements.

The input to the function will be an array of three distinct numbers.

EXAMPLE:
[2,3,1] => 0 
2 is the number that fits between 1 & 3. the index of 2 is 0.
*/

function gimme(triplet){
    return triplet.indexOf([...triplet].sort((x, y) => x > y)[1]);
}