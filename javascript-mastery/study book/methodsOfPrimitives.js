let user = {
    name: `John Craig`,
    age: 24.422121,
    number: 25.8,
};

console.log(user.name.toUpperCase());
console.log(user.name.toLowerCase());
console.log(user.age.toFixed(0));
console.log(user.age.toString(2));
console.log(user.age.toString(25));
console.log(Math.floor(user.number));
console.log(Math.ceil(user.number));
console.log(Math.round(user.number));
console.log(Math.trunc(user.number));

let daysLeft = 15;
const countDown = setInterval(() => {
    console.log(`${daysLeft} ${daysLeft === 1 ? "day" : "days"} left to see you again!`);
    daysLeft--;

    if (daysLeft === 0) {
        console.log(`There is no more days! I'm going back to you!`);
        clearInterval(countDown);
    }

}, 1000);
console.log(Number.isNaN(daysLeft))

function readNumber() {
    let question = +prompt(`Enter your number:`, ``);

    if (number.isNaN === true) {
        console.log(`This is not a number, try again`);
    } else {
        console.log(number)
    }
}

readNumber();





