let id = Symbol.for("id");
console.log(typeof(id));

let newId = Symbol.for("id");
let user = {
    name: `Perkins`,
    [id]: 1,
};

for (let key in user){
    console.log(key)
}

console.log(id === newId);
console.log(`${Symbol.keyFor(newId)}, ${newId.description}`);


// You need to fix the function in section where it should
// provide the requested name and age, now here is an error,
// object `userName` does not get any value

let userName = {
    name: this.name,
    age: this.age,
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`)
    }
};


let nameRequest = prompt(`Who are you?`);
let ageRequest = prompt(`What's your age?`);

if (nameRequest === `James`) {
    userName.sayHello(`James`);
} else {
    userName.sayHello(`Alex`);
}

userName.name = nameRequest;
userName.age = ageRequest;

