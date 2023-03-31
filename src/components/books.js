import React from 'react';
import '../App.css';

const Books = () => (
  <div className="booksContainer">
    <ul>
      <li>
        The Hunger Games
        <span>Suzanne Collins</span>
      </li>
      <li>
        Dune
        <span>Frank Herbert</span>
      </li>
      <li>
        Capital in the Twenty-First Century
        <span>Suzanne Collins</span>
      </li>
    </ul>
    <form>
      <input type="text" placeholder="Book title..." />
      <input type="text" placeholder="Book Author" />
      <input type="submit" />
    </form>
  </div>
);

export default Books;
