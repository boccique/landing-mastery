// while and for loops
/*

let name = false;
let counter = 0;
let age = 0;
let index = 1;

while (age < 18 || age >= 100){
   age = prompt(`To enter your age must be 18+. Enter your age:`);
   counter++;
}

while(index < 101) {
    console.log(index);
    index++;
}

do{
    name = prompt(`Enter your name:`);
} while (name === false);
console.log(`User name is ${name}`);


if(counter <= 3){
    for (counter; counter < 3; counter++) {
        alert(`${counter}`);
    }
} else {
    console.log(`User made it through ${counter} attempts.`);
}

let X;
let Y = 0;
for (X = 0; X < 11; X++){
    console.log(X);
}

do {
    console.log(++Y);
} while (Y < 11)

for (X = 0; X < 50; X++){
    if(X === 13){
        continue;
    }
    else {
        console.log(X);
    }
}
*/

let guessTheNumber = +prompt(`Enter your number to guess which one is the lucky one for today:`);
switch (guessTheNumber) {
    case 25:
        alert(`All right! You are good at peaking! It is lucky number and you found it.`);
        break;
    case 0:
        alert(`Too less, peak a bit above.`);
        break;
    case 100:
        alert(`This is too much to peak. Peak lower.`);
        break;
    default:
        alert(`Your number out of the range at all. Try one more time.`);
}





