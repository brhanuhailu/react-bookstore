import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/books';
import './App.css';
import Categories from './components/categories';
import Links from './components/links';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Links />}>
              <Route index element={<Books />} />
              <Route path="categories" element={<Categories />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
