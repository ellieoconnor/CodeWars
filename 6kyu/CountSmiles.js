//INSTRUCTIONS
/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either : or D
-No additional characters are allowed for those mentioned */

function countSmileys(arr){
    let justSmiles = arr.filter((x) => (x == ':-)') ||
        (x == ':~)') ||
        (x == ';-)') ||
        (x == ';~)') ||
        (x == ':-D') ||
        (x == ';-D') ||
        (x == ':~D') ||
        (x == ';~D') ||
        (x == ':)') ||
        (x == ';)') ||
        (x == ':D') ||
        (x == ';D'))
    return justSmiles.length;
}

//ALTERNATIVE SOLUTIONS
function countSmileys(arr){
    return arr.filter(x => /^][:;][-~]?[)D]$/.test(x)).length;
}