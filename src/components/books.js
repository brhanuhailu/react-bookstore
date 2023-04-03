import React from 'react';
import '../App.css';
import AddnewBook from './addNewBook';
import Book from './book';

const Books = () => (
  <div className="book-container">
    <Book book={Book} />
    <AddnewBook />
  </div>
);
export default Books;
