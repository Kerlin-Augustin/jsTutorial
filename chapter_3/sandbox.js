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
