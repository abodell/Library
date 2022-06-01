library = []; // where books will be stored

// get all elements we will need to access
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#read');

function Book(title, author, pages, isRead) { // book object
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.constructor.prototype = Book; // setting the constructor for all Book prototypes

Book.prototype.addToLibrary = function() {
    library.push(this);
}

Book.prototype.makeBook = () => {
    const title = title.value;
    const author = author.value;
    const pages = pages.value;
    const isRead = isRead.checked;
    return new Book(title, author, pages, isRead);
}




