// object literals

let user = {
    name: 'kerlin',
    age: 29,
    email: 'kerlin@my.com',
    location: 'boston',
    booksWritten: [{title: 'call of duty', sales: 10000}, {title: 'programs programs programs', sales: 1000000}, {title: 'git and github', sales: 10}],
    login: () => {
        console.log('user logged in')
    },
    logBooks: function() {
        console.log('I wrote these completely real no made up books')
        this.booksWritten.forEach(book => console.log(book.title, book.sales))
    },
    logout(){
        console.log('user logged out')
    },
}

console.log(user)
console.log(user.name)

user.name = 'Samy'
console.log(user.name)

console.log(user['booksWritten'])

console.log(typeof user)

user.login()
user.logBooks()

// Math object

console.log(Math)
console.log(Math.PI)

const number = 9.8
console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.trunc(number))

const random = Math.random()
console.log(random)
console.log(Math.round(random * 100))