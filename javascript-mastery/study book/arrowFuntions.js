// Arrow function a simple example
let count = (a, b, c) => a + b + c;
console.log(count(16, 23, -100));

// It is the same as:
let countComplex = function(a, b, c) {
    return a + b + c;
};
console.log(countComplex(26, 12, 104));

let triple = (n) => n ** 3;
console.log(triple(9));