import { Books } from './BooksClass.js';

export const AddBookEvent = () => {

  const submitForm = document.querySelector('form');
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const books = new Books();

  submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    books.addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  });
}