const removeBookEvent = (books) => {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
      books.removeBook(parseInt((event.target.parentElement.id), 10));
    }
  });
};

export default removeBookEvent;
