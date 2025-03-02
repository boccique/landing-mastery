// Uno operators
let age = prompt(`What is your age?`);
age = (- age);
alert(`If your age has been negative it would be equal to ${age}`);

// Binary operators
let century = prompt(`In which century are you living in?`);
century = (century - (-age));
alert(`If your century decrease by your age (${age}) it would be equal to ${century}`);

// First calculator using sticks and stones
let calculateX = prompt(`Enter your number X:`);
let calculateY = prompt(`Enter your number Y:`);
calculateX = Number(calculateX);
calculateY = Number(calculateY);
alert(`If we add ${calculateX} to ${calculateY} we will get the summary of these equal to: ${calculateX + calculateY}`);
alert(`If we decrease ${calculateX} by ${calculateY} we will get the difference of these equal to: ${calculateX - calculateY}`);
alert(`If we multiply ${calculateX} by ${calculateY} we will get the product of these equal to: ${calculateX * calculateY}`);
alert(`If we divide ${calculateX} by ${calculateY} we will get the quotient of these equal to: ${calculateX / calculateY}`);
alert(`If we raise to a power ${calculateX} of ${calculateY} we will get the result of raise to a power of these equal to: ${calculateX ** calculateY}`);
alert(`Residue will be equal to: ${calculateX % calculateY}`);

let firstName = prompt(`Enter your first name:`);
let secondName = prompt(`Enter your second name:`);
firstName = String(firstName);
secondName = String(secondName);
confirm(`Is your full name is "${firstName + ' ' + secondName}"?`);

let stokeToNumber = prompt(`Enter whatever stroke you like to see it comes number!`);
alert(`This is your stroke ${stokeToNumber} as the type of: ${typeof(+stokeToNumber)}`);

let numberA = 214;
let numberB = 152;
let numberC = 1203 - (numberB / numberA);
alert(`Number C equals to: ${numberC}!`);


