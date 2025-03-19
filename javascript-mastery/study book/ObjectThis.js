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