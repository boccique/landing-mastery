// alert, prompt, confirm

let name;
name = prompt(`What is your name?`, '');
alert(`Hey there, ${name}`);

let ageConfirmation;
let message = `Your age should be more than 18.`
ageConfirmation = confirm(`Are old enough to watch this video? ${message}`);
alert(ageConfirmation);

let age = prompt(`What is your age, ${name}?`, '');
alert(`${name}, you are ${age} years old!`);
