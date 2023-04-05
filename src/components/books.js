import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import AddnewBook from './addNewBook';
import Book from './book';
import { getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="book-container">
      <Book book={book} />
      <AddnewBook />
    </div>
  );
};
export default Books;
