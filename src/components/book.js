import React from 'react';
import '../App.css';

const Book = () => (
  <div className="books">
    <div className="book-content">
      <div className="book-card">
        <div className="book-detail">
          <strong>Categories</strong>
          <h3>Dungeons and Dragons</h3>
          <p>JK Rowling</p>
        </div>
        <span className="btn-status">
          <button type="button">Comments</button>
          <button
            className="remove-btn"
            type="button"
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
            %
          </p>
          <span>Completed</span>
        </div>
        <div className="progress-status">
          <p>Current Chapter</p>
          <span>
            Chapter
          </span>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
    <div className="book-content">
      <div className="book-card">
        <div className="book-detail">
          <strong>Categories</strong>
          <h3>Dungeons and Dragons</h3>
          <p>JK Rowling</p>
        </div>
        <span className="btn-status">
          <button type="button">Comments</button>
          <button
            className="remove-btn"
            type="button"
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
            %
          </p>
          <span>Completed</span>
        </div>
        <div className="progress-status">
          <p>Current Chapter</p>
          <span>
            Chapter
          </span>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>

  </div>
);
export default Book;
