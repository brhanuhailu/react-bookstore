import { v4 as uuidv4 } from 'uuid';
// Actions
const Addbook = 'bookstore/books/ADD_BOOK';
const Removebook = 'bookstore/books/REMOVE_BOOK';

// intial State
const initialState = [
  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case Addbook:
      return [...state, action.payload];
    case Removebook:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

// Action Creators
const addBook = (book) => ({
  type: Addbook,
  payload: {
    id: uuidv4(),
    title: book.title,
    author: book.author,
  },
});

const removeBook = (book) => ({
  type: Removebook,
  payload: {
    id: book.id,
  },
});

// Export
export { addBook, removeBook };
export default booksReducer;
