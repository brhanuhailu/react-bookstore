import React, { PureComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/books';
import './App.css';
import Categories from './components/categories';
import Links from './components/links';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Links />}>
            <Route index element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </div>
    );
  }
}
export default App;
