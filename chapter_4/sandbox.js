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

