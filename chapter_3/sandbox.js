// for loops

for (let i = 0; i < 10; i++) {
    console.log('in a loop:', i);
}

console.log('outside of loop');

const names = ['kendrick', 'tyler', 'megan'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('finished loop')

// while loops

let num = 0;
while (names.length < 5) {
    console.log(names[num]);
    names.push('bob');
    num++;
}

console.log('finished while loop');

// do while loops

let num2 = 5;
do {
    console.log('value of num2 is: ', num2);
    num2++;
} while (num2 < 5);

// if statements

const age = 20;
if (age >= 18) {
    console.log('you can vote');
}

const password = '12345678';
if (password.length >= 8) {
    console.log('this password is long enough!');
} 

// if else statements

const password2 = '12345';
if (password2.length >= 8) {
    console.log('this password is long enough!');
} else {
    console.log('this password is too short');
}

// logical operators AND (&&) OR (||) NOT (!)

const password3 = '1234567890!@';
if (password3.length >= 12 && password3.includes('!')) {
    console.log('this password is strong!');
} else if (password3.length >= 8 || password3.includes('$')) {
    console.log('this password is long enough!');
} else {
    console.log('this password is too weak!');
}

let user = true;

if (!user) {
    console.log('user is logged in');
} else {
    console.log('user is not logged in');
}