let numberX = +prompt(`Enter your number X:`);
let numberY = +prompt(`Enter your number Y:`);

if(numberX > numberY) {
    alert(`This number is greater than the other one: ${numberX}`);
} else {
    alert(`This number is greater than the other one: ${numberY}`);
}

let age = +prompt(`Enter your age:`);
if(age >= 18 && age < 100) {
    alert(`You are welcome to get in!`);
} else if(age < 18 && age >= 100 && age < 0) {
    alert(`You are not allowed to be here!`);
} else if(age < 0){
    alert(`Your age are not appropriate!`);
} else {
    alert(`Some error was occurred`);
}

let firstName = prompt(`Enter your first name:`);
let lastName = prompt(`Enter your last name:`);
let nickName = prompt(`Enter your nick name:`);
alert((firstName && lastName) || nickName || "Among Us");

let enteredNumber = prompt(`Enter your number:`);
if(enteredNumber >= 14 && enteredNumber <= 90) {
  alert(`You're good`);
} else {
    alert(`Shush from here!`);
}

// Checking if you are an admin
let admin = prompt(`Who are you?`);
let password;

if(admin === 'admin') {
    password = prompt(`Enter your password:`);

    if (password === 'qwe123123'){
        alert(`Hey, boss. You are in!`);
    } else if(password !== '') {
        alert(`Invalid password, try again.`);
    } else {
        alert(`Canceled.`);
    }

} else if(admin !== '') {
    alert(`We do not know who are you!`);
} else {
    alert(`Canceled.`);
}