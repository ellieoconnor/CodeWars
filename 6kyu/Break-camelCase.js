//INSTRUCTIONS
/*Complete the solution so that the function will break up
a camel casing, using a space between words. 
EXAMPLE
"camelCasing => "camel Casing"
"identifier" => "identifier"
"" => ""*/

function solution(string){
    return (string.replace(/[A-Z]/g, ' $1'));
}
//ALTERNATE
function breakCamel(str){
    return str.split(/(?=[A-Z])/).join(" ");
}