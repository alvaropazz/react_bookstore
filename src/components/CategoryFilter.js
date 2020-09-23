import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const CategoryFilter = ({ handleFilterChange }) => (
  <div className="categories-selector">
    <select
      name="categories"
      id="book-categories"
      onChange={event => handleFilterChange(event)}
      className="filter-selector"
    >
      <option key="ALL" value="All">CATEGORIES</option>
      {categories.map(x => <option key={x} value={x}>{x}</option>)}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.instanceOf(Function).isRequired,
};

export default CategoryFilter;
