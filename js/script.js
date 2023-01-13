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

    readStatement = "has been read"
  }
  else {
    readStatement = "not read yet"
  }
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatement}`
}

myLibrary.push(new Book("Game of Thrones", "George R.R. Martin", 800, true));
console.log(myLibrary[0].info());

function addBookToLibrary() {
  // do stuff here
}