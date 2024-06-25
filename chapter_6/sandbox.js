const paragraph = document.querySelector('p');
console.log(paragraph);

const error = document.querySelector('.error');
console.log(error);

const secondError = document.querySelector('div.error');
console.log(secondError);

const paras = document.querySelectorAll('p');
console.log(paras);

const title = document.getElementById('page-title');
console.log(title);

const errors = document.getElementsByClassName('error');
console.log(errors);

paragraph.innerText += ' This is new';