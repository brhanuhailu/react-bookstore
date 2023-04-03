import React from 'react';
import '../App.css';

const AddnewBook = () => (
  <div className="add-new-book">
    <hr />
    <h1>Add New Book</h1>
    <form>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
      />
      <input
        type="text"
        name="author"
        placeholder="Book Author"
      />
      <button
        type="submit"
      >
        Add Book

      </button>
    </form>
  </div>
);
export default AddnewBook;
