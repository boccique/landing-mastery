// functions

function greetingMessage() {
    console.log(`Hey there, ${name} you are entered our platform!`);
}

let name = `Troi Beaker`;

if (name === 'Troi Parker' || name === null) {
    greetingMessage();
} else {
    name = 'Amongus';
    greetingMessage();
}

let userName = `Peak a Boo`;
function sayHello() {
    console.log(`Hey there, ${userName}!`);
}

sayHello();

function createHelloWorld (userNameGreeting, text = ` expresses nothing.`) {
    text = `, nice to meet you!`;
    userNameGreeting += text;
        console.log(userNameGreeting);
}

createHelloWorld('Yuri');

function helloEveryOne (One = `mate`) {
    console.log(`Hello there, ${One}!`);
}
helloEveryOne(`Vladimir`);

function difficultCalc(x, y, z){
    return x + 1353 - y/x - z**4 + y;
}
let result = difficultCalc(12, 34, 1);
console.log(result);

function checkAge(age){
    if (age > 18) {
        return true;
    } else {
        return confirm(`Are your parents known of this?`);
    }
}

checkAge(28);

function checkAgeQue(age) {
    return (age > 18) ? true : confirm(`Are your parents aware of this?`);
}

checkAgeQue(29);

function checkAgeOr(age) {
    return (age > 28) || confirm(`Are your parents aware of this?`)
}

checkAgeOr(29);

function checkName(name) {
    if(name === 'Pavel'){
        return true;
    } else {
        return name = prompt(`What is your name?`);
    }
}

let resultOfName = checkName('');
console.log(resultOfName);

function nameChecker(name){
    return name === "Anatoly" ? true : prompt(`What is your actual name?`);
}

let actualName = nameChecker(`Arcadii`);
console.log(actualName);


function nameCheckerOr(name) {
    return name === "Sunny" || confirm(`Is it you, Sunny?`);
}
let actualNameOr = nameCheckerOr(``);
console.log(actualNameOr);


function getTernal(ternal) {
    return ternal === `?` ? true : ternal = prompt(`What is ternal?`);
}

let external = getTernal(`?`);
console.log(external);
external = getTernal(`||`);
console.log(external);

function compareNumbers(x, y){
    if(x > y){
        alert(`${x} > ${y}`);
    }
    else if(x < y){
        alert(`${x} > ${y}`)
    }
    else{
        alert(`${x} = ${y}`)
    }
}
compareNumbers(3, -1)

function findMin(x, y) {
    return x < y ? x : y;
}
let minResult =findMin(2, 5);
console.log(minResult);