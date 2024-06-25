// object literals

let user = {
    name: 'kerlin',
    age: 29,
    email: 'kerlin@my.com',
    location: 'boston',
    booksWritten: ['call of duty', 'programs programs programs', 'git and github'],
}

console.log(user)
console.log(user.name)

user.name = 'Samy'
console.log(user.name)

console.log(user['booksWritten'])

console.log(typeof user)