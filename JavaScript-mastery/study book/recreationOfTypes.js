// Recreation of types by strings, numbers and logic

let age = prompt(`What is your actual age?`);
age = String(age);
alert(`You are ${age} years old!`);
alert(`Type of your age is ${typeof(age)}!`);

let messageNumber = (`Let's change the type of your name to the "number". And multiply it by two.`);
alert(messageNumber);
age = Number(age);
alert(`Now type of your age is ${typeof(age)} and you are ${age * 2} years old!`);

let dateOfBirth;
dateOfBirth = prompt(`What is the year of your Birth Day?`);
dateOfBirth = Number(dateOfBirth);
alert(`Year of your Birth Day is ${dateOfBirth} and it has a type of ${typeof(dateOfBirth)}`);

dateOfBirth = Boolean(dateOfBirth);
alert(`Type of your Birth Day now is ${dateOfBirth}!`);