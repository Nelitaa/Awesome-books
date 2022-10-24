const books = [
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
  {title: "The Catcher in the Rye", author: "J. D. Salinger"},
];

const addBooks = document.getElementById("addButton");
const divSectionBooks = document.createElement('div');
document.getElementById('section-books').appendChild(divSectionBooks);

for (let i=0; i<books.length; i += 1) {
  const title = document.createElement("p");
  title.textContent = books[i].title;
  divSectionBooks.appendChild(title);
  
  const author = document.createElement("p");
  author.textContent = books[i].author;
  divSectionBooks.appendChild(author);
  
  const buttonRemove = document.createElement("button");
  buttonRemove.textContent = "Remove";
  divSectionBooks.appendChild(buttonRemove);
  
  const hr = document.createElement("hr");
  divSectionBooks.appendChild(hr);
}

addBooks.addEventListener('click', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;

  books.push({"title" : bookTitle, "author" :bookAuthor});

  const title = document.createElement("p");
  title.textContent = bookTitle;
  divSectionBooks.appendChild(title);
  
  const author = document.createElement("p");
  author.textContent = bookAuthor;
  divSectionBooks.appendChild(author);
  
  const buttonRemove = document.createElement("button");
  buttonRemove.textContent = "Remove";
  divSectionBooks.appendChild(buttonRemove);
  
  const hr = document.createElement("hr");
  divSectionBooks.appendChild(hr);
  

})