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