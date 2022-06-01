const library = []; // where books will be stored

// get all elements we will need to access
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#read');
const bookDisplay = document.querySelector('.book-display');
const submitButton = document.querySelector(".button-47");
const form = document.querySelector('.register-book');


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

const makeBook = () => {
    const newTitle = title.value;
    const newAuthor = author.value;
    const newPages = pages.value;
    const newIsRead = isRead.checked;
    return new Book(newTitle, newAuthor, newPages, newIsRead);
}

Book.prototype.toggleRead = (book) => {
    book.isRead = !book.isRead;
}

const clearInputs = () => {
    title.value = '';
    pages.value = '';
    author.value = '';
    isRead.checked = false;
}

const styleCard = (book) => {
    const card = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h2');
    const bookPages = document.createElement('h2');
    const bookRead = document.createElement('button');
    bookRead.id = library.indexOf(book);
    bookRead.addEventListener('click', toggleRead);
    const deleteBook = document.createElement('button');

    card.classList.add('book-card');
    bookRead.classList.add('toggle-read');
    deleteBook.classList.add('delete-button');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    if (book.isRead) {
        bookRead.textContent = 'Finished!';
        bookRead.style.backgroundColor = '#C9E58D';
    } else {
        bookRead.textContent = 'In Progress!';
        bookRead.style.backgroundColor = '#1DA7BD';
        bookRead.style.color = '#F4EBDA'
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
};

const clearDisplay = () => {
    bookDisplay.innerHTML = "";
}

const addBook = (event) => {
    event.preventDefault();
    const book = makeBook();
    book.addToLibrary();
    clearDisplay();
    displayBooks(library);
    clearInputs();
}

// have to do delete and toggle read
const toggleRead = (event) => {
    console.log(event.target.id);
    const book = library[event.target.id];
    book.isRead = !book.isRead;
    clearDisplay();
    displayBooks(library);
}



form.addEventListener('submit', addBook);
