// Funcion inicializadora previene hackeo de codigo js
const init = () => {
  // Referencias al DOM
  const sectionBook = document.querySelector('#section-books');
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const submitForm = document.querySelector('form');
  let divBook;
  let idBookCollection = 2; // We already have two books loaded

  let books = JSON.parse(localStorage.getItem('books'))
  || [{ id: 0, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 1, title: 'The Catcher in the Rye', author: 'J. D. Salinger' }];

  function removeBook(id) {
    const newBooks = [];
    const divBookDelete = document.getElementById(id);
    sectionBook.removeChild(divBookDelete);
    books.forEach((book) => {
      if (book.id !== id) {
        newBooks.push(book);
      }
    });
    books = [...newBooks];
    localStorage.setItem('books', JSON.stringify(books));
  }

  function createBook(newBook) {
    const title = document.createElement('p');
    const author = document.createElement('p');
    const buttonRemove = document.createElement('button');
    const hr = document.createElement('hr');

    title.textContent = newBook.title;
    author.textContent = newBook.author;
    buttonRemove.textContent = 'Remove';
    buttonRemove.classList = 'btn';
    buttonRemove.id = newBook.id;
    buttonRemove.onclick = () => {
      removeBook(newBook.id);
    };

    divBook = document.createElement('div');
    divBook.id = newBook.id;
    divBook.appendChild(title);
    divBook.appendChild(author);
    divBook.appendChild(buttonRemove);
    divBook.appendChild(hr);

    sectionBook.appendChild(divBook);

    localStorage.setItem('books', JSON.stringify(books));
  }

  books.forEach((createBook));

  submitForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newBook = {
      id: idBookCollection += 1,
      title: titleInput.value,
      author: authorInput.value,
    };

    books.push(newBook);
    createBook(newBook);
    titleInput.value = '';
    authorInput.value = '';
  });
};
init();
