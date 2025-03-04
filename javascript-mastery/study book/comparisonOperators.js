// Comparison of two numbers
let numberX = +prompt(`Enter your number X:`);
let numberY = +prompt(`Enter your number Y:`);

if(numberX > numberY){
    alert(`Your number X(${numberX}) > than your number Y(${numberY})`);
}
else{
    alert(`Your number Y(${numberY}) > than your number X(${numberX})`);
}

// Comparison of two strokes
let firstName = prompt(`Enter your first name:`);
let secondName = prompt(`Enter your second name:`);

if(firstName > secondName){
    alert(`Your first name "${firstName}" is greater than second name"${secondName}"`);
}
else{
    alert(`Your second name "${secondName}" is greater than first name "${firstName}"`);
}
