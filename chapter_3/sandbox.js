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

// break and continue

const scores = [90, 98, 89, 100, 100, 86, 94];
for (let i = 0; i < scores.length; i++) {
    // continue skips the rest of the loop. Depending on the condition, it will continue or not. For ours it will be skipped everytime a score is less than 90
    if (scores[i] < 90) continue;
    console.log('score is: ', scores[i]);

    // break stops the loop. Depending on the condition, it will stop or not. For ours it will be stopped depending on the condition.
    if (scores[i] === 100) break;
}

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

// switch statements

const grade = 'C';
switch (grade) {
    case 'A':
        console.log('you got an A');
        break;
    case 'B':
        console.log('you got an B');
        break;
    case 'C':
        console.log('you got an C');
        break;
    case 'D':
        console.log('you got an D');
        break;
    case 'F':
        console.log('you got an F');
        break;
    default:
        console.log('not a valid grade');
}