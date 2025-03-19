let box = {
    paper: 10,
    rows: 15,
    hasKey: true,
    "rare usage crap": false,

};

console.log(box["rare usage crap"]);
console.log(box);

let storage = prompt(`What do you want to know about this storage?`, `paper`);
alert(box[storage]);

box.rows = 21;
console.log(`From now on rows equal to: ${box.rows}`);

delete box.rows;
console.log(`And now it does not exist: ${box.rows}`);
console.log(`Are rows here? ${"rows" in box}`);

let vagatable = prompt(`What vagatable do you want to take?`, `potato`);
let pocket = {
    [vagatable]: 10,
};
console.log(`We can put only ${pocket[vagatable]} ${vagatable}s 
             in your pocket 'till it will be full.`);

// for key in object
for (let key in box) {
    console.log(box[key]);
}

delete["rare usage crap"];

let unboxing = box;
unboxing.papa = 21;
console.log(box.papa);

for (let boxing in unboxing){
    console.log(`${boxing}: ${box[boxing]}`);
}

let pack = {
    taxes: `10%`,
    poor: 20,
    equality: `60%`,
    sizes: {
        height: 100,
        width: 200,
    }
}

// let clone = {};
let clone = Object.assign({}, pack);
for (let key in pack) {
    clone[key] = pack[key];
}


console.log(clone.sizes.height);

Object.assign(box, pack)
console.log(box);


