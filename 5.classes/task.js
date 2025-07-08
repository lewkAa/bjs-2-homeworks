class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  set state(number) {
    this._state = Math.max(0, Math.min(number, 100));
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state = Math.min(this.state * 1.5, 100);
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
constructor (name) {
this.name = name;
this.books = [];
}

addBook(book) {
if (book.state > 30) {
this.books.push(book);
 }
}

findBookBy(type, value){
 return this.books.find(book => book[type] === value) || null;
  }

 giveBookByName(bookName){
 const index = this.books.findIndex(book => book.name === bookName);
 if (index !== -1) {
       return this.books.splice(index, 1)[0];
     }
     return null;
  }

 }





