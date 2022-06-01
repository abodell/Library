library = []; // where books will be stored

// get all elements we will need to access
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#read');
const bookDisplay = document.querySelector('.book-display');

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

const book1 = new Book('Ashshs', 'ashhs', 200, true);
const book2 = new Book('asjhsakh', 'ajskjsa', 300, true);
const book3 = new Book('ajshkajs', 'asshasjh', 500, true);
const book4 = new Book('ashjhsag', 'ashbx', 300, false);
const book5 = new Book('asjsjs', 'akshsah', 800, false);

book1.addToLibrary();
book2.addToLibrary();
book3.addToLibrary();
book4.addToLibrary();
book5.addToLibrary();

const makeBook = () => {
    const title = title.value;
    const author = author.value;
    const pages = pages.value;
    const isRead = isRead.checked;
    return new Book(title, author, pages, isRead);
}

const toggleRead = (book) => {
    book.isRead = !book.isRead;
}

const styleCard = (book) => {
    const card = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h2');
    const bookPages = document.createElement('h2');
    const bookRead = document.createElement('button');
    const deleteBook = document.createElement('button');

    card.classList.add('book-card');
    bookRead.classList.add('toggle-read');
    deleteBook.classList.add('delete-button');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    if (book.isRead) {
        bookRead.textContent = 'Finished!';
    } else {
        bookRead.textContent = 'In Progress!';
    }
    deleteBook.textContent= 'Delete from Library';

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookRead);
    card.appendChild(deleteBook);
    bookDisplay.appendChild(card);
}

const displayBooks = (library) => {
    for (let i = 0; i < library.length; i++) {
        styleCard(library[i]);
    }
}

displayBooks(library);



