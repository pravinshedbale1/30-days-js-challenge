// Activity 1
console.log("Creating and logging book object");

const book = {
  title: "The 7 Habits of Highly Effective People",
  author: "Stephen Covey",
  year: 1989,
};

console.log(book, "\n");

console.log("Accessing author title and author properties");
console.log("Title : ", book.title);
console.log("Author : ", book.author);

// Activity 2
console.log("\n\n");
console.log("Adding method 1(getBasicDetails) to a object");
book.getBasicDetails = function () {
  return `Book Name : ${this.title} Author : ${this.author}`;
};
console.log("Calling method");
console.log(book.getBasicDetails());
console.log("\n");

console.log("Adding method 2(updateYear)to a object");
book.updateYear = function (year) {
  this.year = year;
};
console.log("Calling updateYear method with 2020 argument");
book.updateYear(2020);
console.log("Object after updating year");
console.log(book);
console.log("\n\n");

//Activity 3
console.log("Creating library object");
const library = {
  name: "Central Library, Hyderabad",
  books: [book],
};
console.log(library);

console.log("Adding some more books");
const book2 = {
  title: "Wings of fire",
  author: "APJ Abdul Kalam",
  year: 1980,
};

const book3 = {
  title: "Two States",
  author: "Chetan Bhagat",
  year: 1999,
};

library.books.push(book2, book3);
console.log("logging library name and book titles");
console.log(library.name, "\n");
library.books.forEach((book) => {
  console.log(book.title);
});
console.log("\n\n");

//Activity 4
console.log("adding method with this keyword");
library.books.forEach((book) => {
  book.getBookDetails = function () {
    return `Book details
        Title : ${this.title}
        Year : ${this.year}
        `;
  };
});
console.log("Calling method on all books");
library.books.forEach((book) => {
  console.log(book.getBookDetails());
});

//Activity 5
console.log("Iterating over book object using for..in loop");
for (let prop in book) {
  console.log(`Prop : ${prop} Val: ${book[prop]}`);
}
console.log();
console.log("Iterating over book object using Object.keys and Object.values");
for (let i = 0; i < Object.keys(book).length; i++) {
  console.log(
    "Key : ",
    Object.keys(book)[i],
    " Value : ",
    Object.values(book)[i]
  );
}
