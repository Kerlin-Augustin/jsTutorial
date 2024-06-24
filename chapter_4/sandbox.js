//javascript hoists function declarations but not function expressions
// function declaration

function greet(name) {
    console.log('hello', name);
}

// function expression
const square = function(num) {
    return num * num;
};

// function call
greet('Kerlin');
greet('Tyana');

// arrow functions
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};
const rollDie2 = () => Math.floor(Math.random() * 6) + 1;
console.log(rollDie());
console.log(rollDie2());

//callbacks functions

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    // do something else
    callbackFunc(value)
    console.log(`this value: ${value}`);
    
};

myFunc(value => {
    console.log(value);
});