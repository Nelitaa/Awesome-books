import { Books } from './BooksClass.js';

export const removeBookEvent = () => {
  const books = new Books();
  
  document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    books.removeBook(parseInt((event.target.parentElement.id), 10));
  }
  });
}