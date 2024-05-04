const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(200).json(books).send();
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  let ISBN = req.params.isbn;
  if(ISBN){
   let filtered_book = books[ISBN];
   return res.status(200).json(filtered_book);
  }else{
    return res.status(401).json({message: "The book number is undefind"});
  }
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  let author = req.params.author;
  if(author){
    let books_byAuthors = [];
    for (const key in books) {
      if (books[key]?.author === author) {
        books_byAuthors.push(books[key]);
      }
  }
  return res.status(200).json(books_byAuthors);
    }
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  let title = req.params.title;
  if(title){
    let books_byTitles = [];
    for (const key in books) {
      if (books[key]?.title.includes(title)) {
        books_byTitles.push(books[key]);
      }
  }  
  return res.status(200).json(books_byTitles);
  }
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  let book_id = req.params.isbn;
  if(book_id){
    let book = books[book_id];
    let reviews = book.reviews;
    return res.status(200).json(reviews);
  }
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
