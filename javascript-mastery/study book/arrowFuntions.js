// Arrow function a simple example
let count = (a, b, c) => a + b + c;
console.log(count(16, 23, -100));

// It is the same as:
let countComplex = function(a, b, c) {
    return a + b + c;
};
console.log(countComplex(26, 12, 104));

let triple = (n) => n ** 3;
console.log(triple(9));


const personalDataGET = (name, age, country, emailAddress, phoneNumber) => {
    console.log(`Your name is ${name}.`);
    console.log(`You are ${age} years old.`);
    console.log(`Your homeland is ${country}`);
    console.log(`You email address is ${emailAddress}`);
    console.log(`You phone number is ${phoneNumber}`);
}
personalDataGET(`Joseph`,
                  26,
               `Russia`,
           `fake@fake.com`,
        `66-213-232-01`);   