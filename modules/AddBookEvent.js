const AddBookEvent = (books) => {
  const submitForm = document.querySelector('form');
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');

  submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    books.addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  });
};

export default AddBookEvent;