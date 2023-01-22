const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.info = function bookInfo() {
  let readStatement;
  if (this.hasRead === true) {
    readStatement = "has been read";
  } else {
    readStatement = "not read yet";
  }
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatement}`;
};

myLibrary.push(new Book("Game of Thrones", "George R.R. Martin", 793, true));
myLibrary.push(new Book("The Way of Kings", "Brandon Sanderson", 942, true));
myLibrary.push(new Book("Cat in the Hat", "Dr. Seuss", 47, true));
myLibrary.push(new Book("Royal Assasin", "Robin Hobb", 577, true));

const form = document.querySelector("form");
const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", () => {
  form.classList.add("visible");
});

form.addEventListener("submit", (e) => {
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  let hasRead = false;
  if (form["has-read"].value === "true") {
    hasRead = true;
  }

  const bookInfo = { author, title, pages, hasRead };
  addBookToLibrary(bookInfo);
  e.preventDefault();
  form.reset();
  form.classList.remove("visible");
});

function addBookToLibrary(bookInfo) {
  const book = new Book();
  book.title = bookInfo.title;
  book.author = bookInfo.author;
  book.pages = bookInfo.pages;
  book.hasRead = bookInfo.hasRead;
  myLibrary.push(book);
  createTable(myLibrary);
}

const tableBody = document.querySelector(".table-body");
createTable(myLibrary);

function addBookToTable(book, index) {
  const row = tableBody.insertRow(-1);
  row.setAttribute("data", index);

  const cellTitle = row.insertCell(0);
  cellTitle.textContent = book.title;

  const cellAuthor = row.insertCell(1);
  cellAuthor.textContent = book.author;

  const cellPages = row.insertCell(2);
  cellPages.textContent = book.pages;

  const cellHasRead = row.insertCell(3);

  const btnRead = document.createElement("button");
  btnRead.setAttribute("type", "button");
  btnRead.id = "btn-read";
  btnRead.classList.add("btn-read");
  if (book.hasRead === true) {
    btnRead.textContent = "Yes";
  } else {
    btnRead.textContent = "No";
  }
  btnRead.addEventListener("click", () => {
    myLibrary[index].hasRead = !book.hasRead;
    createTable(myLibrary);
  });
  cellHasRead.appendChild(btnRead);

  const cellButton = row.insertCell(4);
  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("type", "button");
  btnDelete.id = "btn-delete";
  btnRead.classList.add("btn-delete");
  btnDelete.textContent = "Delete";
  btnDelete.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    createTable(myLibrary);
  });
  cellButton.appendChild(btnDelete);
}

function createTable(library) {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  library.forEach((book, index) => {
    addBookToTable(book, index);
  });
}
