let age = +prompt(`To enter this site you should be 18+, ENTER YOUR AGE:`);

if(age >= 100) {
    alert(`You are TOO OLD to enter the site!`);
} else if(age >= 18) {
    alert(`You are welcome to enter this site!`);
} else {
    alert(`You are TOO YOUNG to enter this site!`);
}

/*
let message = (age >= 100) ? `You are TOO OLD to enter this site!`:
        (age >= 18) ? `You are welcome to enter this site!`:
        (0 < age < 18) ? `You are TOO YOUNG to enter this site!`: `false`
alert(message);*/


let trueNameOfJs = prompt(`Enter official name of JavaScript:`);

if(trueNameOfJs === `ECMAScript`){
    alert(`All right!`);
} else {
    alert(`Don't you know? It is ECMAScript!`)
}

let a = prompt(`Enter your number "a":`);
let b = prompt(`Enter your number "b":`);
let result = (a + b < 4) ? `Too low` : "Too much"

