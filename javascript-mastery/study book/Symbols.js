let id = Symbol.for("id");
console.log(typeof(id));

let newId = Symbol.for("id");
let user = {
    name: `Perkins`,
    [id]: 1,
};

for (let key in user){
    console.log(key)
}

console.log(id === newId);
console.log(`${Symbol.keyFor(newId)}, ${newId.description}`);