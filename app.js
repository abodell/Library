library = [] // array for where the books will be stored

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.constructor.prototype = Book; // set the prototype for constructor

// get all of our elements
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#read');
const addBook = document.querySelector('.button-47');
const form = document.querySelector('.register-book');


