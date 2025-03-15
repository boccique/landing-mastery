let box = {
    paper: 10,
    rows: 15,
    hasKey: true,
    "rare usage crap": false,
};
// delete box.hasKey
console.log(box["rare usage crap"])
console.log(box)
let key = prompt(`What do you want to know about this storage?`, `paper`);
alert(box[key])