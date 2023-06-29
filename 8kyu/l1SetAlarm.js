//L1 SET ALARM
/*
Write a function named setAlarm which recieved two parameters. the first parameter, employed, is true whenever you are employed
and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need
    to set an alarm). It should return false otherwise.

Examples:
employed | vacation
true     | true     => false
true     | false    => true

*/

function setAlarm(employed, vacation){
    if(employed === true && vacation === false){
        return true;
    }else{
        return false;
    }
}

//alternative solutions
function setAlarm(employed, vacation){
    return (employed === true && vacation === false ? true : false);
}