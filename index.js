import { setRoutes } from './modules/routes.js';
import { date } from './modules/currentTime.js';
import { Books } from './modules/BooksClass.js';
import { AddBookEvent} from './modules/addBookEvent.js';
import { removeBookEvent} from './modules/removeBookEvent.js';

const init = () => {
  const books = new Books();
  if (books.getQuantity() === 0) {
    books.addBook('The Great Gatsby', 'J.R.R. Tolkien');
    books.addBook('The Catcher in the Rye', 'J. D. Salinger');
  }
  books.renderBooks();
  AddBookEvent();
  removeBookEvent();
  books.renderBooks();
  setRoutes();
  date;
};

init();
