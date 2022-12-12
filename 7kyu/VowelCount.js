//VOWEL COUNT
/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this but not y.
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str){
    //split string to array
    let countArr = str.split('');
    //set a counter
    let counter = 0;
    countArr.forEach((letter, idx) =>{
        if(countArr[idx] == 'a' ||
        countArr[idx] == 'e' ||
        countArr[idx] == 'i' ||
        countArr[idx] == 'o' ||
        countArr[idx] == 'u'){
            counter += 1;
        }
    })
    return counter;
}

//OR
function getCount(str){
    return (str.match(/[aeiou]/ig)||[]).length;
}