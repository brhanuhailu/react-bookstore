import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import '../App.css';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div className="books">
      {book.map((item) => (
        <div className="book-content" key={item.id}>
          <div className="book-card">
            <div className="book-detail">
              <h4>{item.category}</h4>
              <h3>{item.title}</h3>
              <p>{item.author}</p>
            </div>
            <span className="btn-status">
              <button type="button">Comments</button>
              <button
                className="remove-btn"
                type="button"
                onClick={() => dispatch(removeBook(item.id))}
              >
                Remove
              </button>
              <button type="button">Edit</button>
            </span>
          </div>
          <div className="book-progress">
            <div className="progress">
              <div className="progress-bar" />
            </div>
            <div className="progress-info">
              <p className="completed">
                {item.complete}
                %
              </p>
              <span>Completed</span>
            </div>
            <div className="progress-status">
              <p>Current Chapter</p>
              <span>
                Chapter
                {' '}
                {item.chapter}
              </span>
              <button type="button">Update Progress</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      chapter: PropTypes.number.isRequired,
    },
  )).isRequired,
};

export default Book;
