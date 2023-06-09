import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="categoriy-list">
      <h1>Categories</h1>
      <button type="button" onClick={() => dispatch(checkStatusAction())}>
        Check Status
      </button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
