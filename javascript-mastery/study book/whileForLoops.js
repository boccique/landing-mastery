// while and for loops

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