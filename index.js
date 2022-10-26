class Books {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  getQuantity() {
    return this.books.length;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      name: this.name,
    };
  }

  renderBooks() {
    const allBooks = document.getElementById('allBooks');
    // delete current books
    while (allBooks.firstChild) {
      allBooks.removeChild(allBooks.firstChild);
    }
    // render new books
    this.books.map((book) => {
      const bookList = document.createElement('li');
      bookList.setAttribute('id', book.id);
      allBooks.appendChild(bookList);

      const bookName = document.createElement('p');
      bookName.textContent = `${book.title} by ${book.author}`;
      bookList.appendChild(bookName);

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove');
      bookList.appendChild(removeButton);

      return bookList;
    });
  }

  addBook(title, author) {
    // get last id
    const lastId = this.books.length ? this.books[this.books.length - 1].id : 0;
    const book = { id: lastId + 1, title, author };
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.renderBooks();
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.renderBooks();
  }
}

const init = () => {
  const submitForm = document.querySelector('form');
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const books = new Books();
  if (books.getQuantity() === 0) {
    books.addBook('The Great Gatsby', 'J.R.R. Tolkien');
    books.addBook('The Catcher in the Rye', 'J. D. Salinger');
  }
  books.renderBooks();
  // add book event
  submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    books.addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  });
  // remove book event
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
      books.removeBook(parseInt((event.target.parentElement.id), 10));
    }
  });
};

init();
