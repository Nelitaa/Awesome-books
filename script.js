const books = {
  "book1": {title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
  "book2": {title: "The Catcher in the Rye", author: "J. D. Salinger"},
}

addButton.addEventListener("click", function() {

  let bookTitle = document.getElementById("title").value;
  let bookAuthor = document.getElementById("author").value;
  let bookID = document.getElementById("id").value;

  books[bookID] = {title: bookTitle, author: bookAuthor};
  console.log(books);

});