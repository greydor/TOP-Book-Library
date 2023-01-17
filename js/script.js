let myLibrary = [];

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

myLibrary.push(new Book("Game of Thrones", "George R.R. Martin", 800, true));
console.log(myLibrary[0].info());

const form = document.querySelector("form");
const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", () => {
  form.classList.add("visible");
});

form.addEventListener("submit", (e) => {
  form.classList.remove("visible");
  const author = form.author.value;
  const title = form.title.value;
  const pages = form.pages.value;
  const bookInfo = {author, title, pages};
  addBookToLibrary(bookInfo);
  e.preventDefault();
});

function addBookToLibrary(bookInfo) {

}
