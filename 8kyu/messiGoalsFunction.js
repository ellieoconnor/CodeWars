//INSTRUCTIONS
/*
Messi is a soccer player with goals in three leagues:
1. LaLiga
2. Copa Del Rey
3. Champions
Complete the function to return his total number of goals in all three leagues.
Note: the input will always be valid.
EXAMPLE:
5, 10, 2 ==> 17*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals){
    return (laLigaGoals + copaDelReyGoals + championsLeagueGoals);
};

//ALTERNATIVES
const goals = (a, b, c) => a + b + c;