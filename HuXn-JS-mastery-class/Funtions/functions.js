// Return -> function
function add(x, y) {
    return x + y;
}

let res = add(10, 20);
console.log(res);

function myFunction(z, i) {
    return z * i;
}

console.log(myFunction(14, 1));



function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb();
}

function cb() {
    console.log("I am calling you!");
}

greet('Josh', cb);



function showCallFunction(fn) {
    let h = 10;
    fn(h);
}

function fn(h) {
    console.log(`${h} is the number!`)
}

showCallFunction(fn)



 function greetings() {
    return `Hello, my name is ${personJosh.name} and I am ${personJosh.age} years old!`;
 }

let personJosh = {
    name: 'Josh',
    age: 21,
    greetings,
};
console.log(personJosh.greetings());


























