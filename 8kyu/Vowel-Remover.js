//VOWEL REMOVER
/**
Create a function called shortcut to remove the lowercase vowels (a,e,i,o,u) in a given string
EXAMPLES:
"hello"  --> "hll"
"codewars"  --> 'cdwrs'
"HELLO"  --> "HELLO"
**/

function shortcut(string){
    return string.replace(/[aeiou]/gi, "");
}