/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/links';
import Books from './components/books';
import Categories from './components/categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
