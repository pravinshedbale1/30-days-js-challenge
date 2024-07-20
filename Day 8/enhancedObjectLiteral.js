let bookName = "The intelligent invester";
let authorName = "Warren Buffett";

let getBookInfo = function () {
  return `${this.bookName} by ${this.authorName}`;
};

let book = { bookName, authorName, getBookInfo };

console.log(book);
console.log(book.getBookInfo());

// Define variables to use as property names
const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

// Create an object with computed property names
const person = {
  [propName1]: "Pravin",
  [propName2]: "Shedbale",
  [propName3]: 25,
};

// Log the object to the console
console.log(person);
