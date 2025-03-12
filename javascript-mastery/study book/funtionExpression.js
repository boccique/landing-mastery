// Function declaration usage
function sayHello(message) {
    return message = message || `Hello there!`;
}
let greetings = sayHello();
console.log(greetings);


// Function expression usage
let sayGoodbye = function(message) {
    return message = message || `Good bye!`;
};
console.log(sayGoodbye());

// Functions call-backs

let ask = function(question, yes, no) {
    if (confirm(question)) yes()
    else no()
};

function showOk() {
    console.log(`User is agreed.`);
}
function showCancel() {
    console.log(`User denied.`);
}

ask(`Are you agreed?`, showOk, showCancel);

function hello(callback) {
    console.log(`Hello`);
    callback();
}
function goodbye(){
    console.log(`Goodbye`);
}
hello(goodbye)

function verifyNumber(callback){
    let number;
    return number === `8-922-223-22-12` || callback();
}

function denied(){
    console.log(`Invalid number, try again.`)
}
verifyNumber(denied);