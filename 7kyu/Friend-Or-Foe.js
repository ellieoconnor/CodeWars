//FRIEND OR FOE?
/*
Make a program that filters a list of strings and 
returns a list with only your friends name on it.

If a name has exactly 4 letters in it, you can be
sure that it has to be a friend of yours! Otherwise, 
you can be sure he's not...
*/

//MY SOLUTIONS
function friend(friends){
    let friendList = [];
    friends.forEach((x, i)=>{
      if(x.length === 4){
        friendList.push(x);
      }
    });
    return friendList;
  }