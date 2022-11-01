const listButton = document.querySelector('#listButton');
const addButton = document.querySelector('#addButton');
const contactButton = document.querySelector('#contactButton');
const listBooks = document.querySelector('#listBooks');
const addBook = document.querySelector('#addBook');
const contactSection = document.querySelector('#contactSection');

window.addEventListener('load', () => {
  listBooks.style.display = 'block';
  addBook.style.display = 'none';
  contactSection.style.display = 'none';
});

listButton.addEventListener('click', () => {
  listBooks.style.display = 'block';
  addBook.style.display = 'none';
  contactSection.style.display = 'none';
});

addButton.addEventListener('click', () => {
  listBooks.style.display = 'none';
  addBook.style.display = 'block';
  contactSection.style.display = 'none';
});

contactButton.addEventListener('click', () => {
  listBooks.style.display = 'none';
  addBook.style.display = 'none';
  contactSection.style.display = 'flex';
});