let box = {
    paper: 10,
    rows: 15,
    hasKey: true,
    "rare usage crap": false,

};
// delete box.hasKey
console.log(box["rare usage crap"]);
console.log(box);

let key = prompt(`What do you want to know about this storage?`, `paper`);
alert(box[key]);

box.rows = 21;
console.log(`From now on rows equal to: ${box.rows}`);

delete box.rows;
console.log(`And now it does not exist: ${box.rows}`);

let vagatable = prompt(`What vagatable do you want to take?`, `potato`);
let pocket = {
    [vagatable]: 10,
};
console.log(`We can put only ${pocket[vagatable]} ${vagatable}s in your pocket 'till it will be full.`)













