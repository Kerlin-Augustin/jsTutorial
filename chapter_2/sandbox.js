// strings
let name = 'Kerlin';
console.log(name);

// interpolation
let age = 29;
console.log(`My name is ${name} and I am ${age} years old`);

// getting characters
console.log(name[0]);

// string length
console.log(name.length);

// string methods
console.log(name.toUpperCase());
let result = name.toLowerCase();
console.log(result, name);

// common string methods
let email = 'Kerlin@my.com';
console.log(email);
console.log(email.includes('@'));
console.log(email.startsWith('ker'));
console.log(email.endsWith('com'));
console.log(email.lastIndexOf('m'));
console.log(email.slice(0, 5));
console.log(email.split('@'));  

// numbers

let radius = 10;
const pi = 3.14;

console.log(radius, pi)
console.log(radius% 3);
console.log(radius**2 * pi);

radius++;
console.log(radius);
radius--;
console.log(radius);