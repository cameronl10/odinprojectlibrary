let myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return (title + " by " + author + ", " + pages +" pages, " + read);
    }
}

function addBookToLibrary(){
    const forminput = Array.from(document.querySelectorAll('#inputform input'));
    const book = new Book(forminput[0].value, forminput[1].value,forminput[2].value,forminput[3].checked ? 'read':'not read');
    myLibrary.push(book);
}

const container = document.querySelector('#container');

const bookContainer = document.createElement('div');
bookContainer.textContent='books';

container.appendChild(bookContainer);
function showBookList(){
    const tempBook = document.createElement('h1');
    myLibrary.forEach(book => tempBook.textContent=book.info(),
    bookContainer.appendChild(tempBook));
  }



