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

// arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[2]);

let people = ['Mirthaud', 'Dinah', 'Wesner', 'Mureille', 'Yves'];
console.log(people);
console.log(people[1]);

let random = [2, 'hello', true, undefined, null];
console.log(random);

console.log(people.length)
console.log(people.join(','));
console.log(people.indexOf('Wesner'));

// null and undefined
let empty = null;
console.log(empty);

let undef;
console.log(undef);

console.log(typeof null);
console.log(typeof undefined);

console.log(empty, empty + 7, `This might be empty: ${empty}`);
console.log(undefined, undefined + 7, `This might be empty: ${undefined}`);

// booleans
let x = 0;
let y = 1;
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

let correct = true;
let incorrect = false;
console.log(correct, incorrect);
console.log(correct == 'true')

let spouse = 'Tyana';
console.log(spouse == 'Tyana');
console.log(spouse == 'tyana');
console.log(spouse > 'Bandeira');
console.log(spouse > 'bandeira');

// type conversion
let score = '100';
console.log(score, typeof score);
score = Number(score);
console.log(score, typeof score);

let score2 = 50;
console.log(score2, typeof score2);
score2 = String(score2);
console.log(score2, typeof score2);

let convertToBoolean = 0;
console.log(convertToBoolean, typeof convertToBoolean);
convertToBoolean = Boolean(convertToBoolean);
console.log(convertToBoolean, typeof convertToBoolean);