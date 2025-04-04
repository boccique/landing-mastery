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



let userName = {
    name: this.name,
    age: this.age,
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`)
    }
};


let nameRequest = prompt(`Who are you?`, '');
let ageRequest = +prompt(`What's your age?`, 0);

userName.name = nameRequest;
userName.age = ageRequest;

userName.sayHello();

let experiment = {
    host: this.host,
    net: this.net,
};

console.log(userName - experiment);

