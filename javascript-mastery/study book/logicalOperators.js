let numberX = +prompt(`Enter your number X:`);
let numberY = +prompt(`Enter your number Y:`);



if(numberX > numberY) {
    alert(`This number is greatest: ${numberX || numberY}`);
} else {
    alert(`An error occurred!`);
}