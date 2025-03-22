let user = {
    name: "John",
    age: 21,
    sayBye() {
        console.log(`Good bye, see ya. And remember my name is ${this.name}!`);
    },
};

user.sayHello = function(){
    console.log(`Hey there! My name is ${user.name} and I am ${user.age} years old!`);
}

user.sayHello();
user.sayBye();

let someone = {
    name: `Boris`,
    sayHi() {
        console.log(`${this.name} is saying hello to you`);
    },
};

someone.sayHi();

// Let's make a calc

let calculator = {
    read(a, b) {
        calculator.a = a;
        calculator.b = b;
    },
    sum() {
        console.log(this.a + this.b);
    },
    mul() {
        console.log(this.a * this.b);
    },
};

calculator.read(1, 2);
calculator.sum();
calculator.mul();
console.log(`a = ${calculator.a} b = ${calculator.b}`)

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let newUser = new Person(`Bread`, 24);
console.log(newUser.age);

// One more calc

let calculatorX = {
    read() {
        this.x = +prompt(`Enter your first number "X"`);
        this.y = +prompt(`Enter your first number "Y"`);
    },
    sum(){
        console.log(`Summary is ${this.x + this.y}`);
    },
    mul(){
        console.log(`Multiplication is ${this.x * this.y}`)
    },
}

calculatorX.read();
calculatorX.sum();
calculatorX.mul();

// Accumulator function

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt(`How many do you want to add?`, 0);
    };
}

let accumulator = new Accumulator(0);
accumulator?.read();
accumulator?.read();
console.log(`Summary is "${accumulator.value}"`);
