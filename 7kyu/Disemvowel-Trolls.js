/*
Trolls are attacking your comment sections!
A common way to deal with this situation is to remove all of the vowels from
the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string
with all vowels removed.

'y' is not a vowel here.
*/

function disemvowel(str){
    return str.replace(/[aeiou]/gi, '');
};