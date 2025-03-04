let numberX;
let numberY;
numberX = +prompt(`Enter your number X:`);
numberY = +prompt(`Enter your number Y:`);
alert(`Let's see which number is greater or equals: 
       type is ${typeof(numberX >= numberY)}, 
       the result is ${numberX >= numberY}. \n
       True if first.`);

if (numberX > numberY){
    alert(`Your number X(${numberX}) > than your number Y(${numberY})`);
}
else{
    alert(`Your number X(${numberY}) > than your number Y(${numberX})`);
}

let firstName = prompt(`Enter your first name:`);
let secondName = prompt(`Enter your second name:`);

if (firstName > secondName) {
    alert(`Your first name "${firstName}" is greater than second name"${secondName}"`);
}
    else {
    alert(`Your second name "${secondName}" is greater than first name "${firstName}"`);
}