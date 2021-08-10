// Your code here
function saturdayFun(toDo = "roller-skate") {
    return(`This Saturday, I want to ${toDo}!`);

}
function mondayWork(work = "go to the office") {
    return(`This Monday, I will ${work}.`);
}

function wrapAdjective(string="*"){
    return function(thing ="special"){

        return `You are ${string}${thing}${string}!`;
    }
}