//WHO LIKES IT?
/*
Function takes an array containing the names of people that like an item.
It must return the display text as shown in the examples.
EXAMPLES:
[] --> "no one likes this"
["Peter"] --> "Peter likes this"
["Jacob", "Alex"]  --> "Jacob and Alex like this"
["Alex", "Jacob", "Mark", "Max"]  --> "Alex, Jacob and 2 others like this"
*/

function likes(name){
    let numLeft = name.length - 2;
    if (name === undefined || name.length == 0) {
        return `no one likes this`
    }else if(name.length == 1){
        return `${name[0]} likes this`
    }else if(name.length == 2){
        return `${name[0]} and ${name[1]} like this`
    }else if(name.length == 3){
        return `${name[0]}, ${name[1]} and ${name[2]} like this`
    }else{
        return `${name[0]}, ${name[1]} and ${numLeft} like this`
    }
}

//Alternative answers
function likes(names){
    names = names || [];
    switch(names.length){
        case 0: return `no one likes this`; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}