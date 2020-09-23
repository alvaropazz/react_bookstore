import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const CategoryFilter = ({ handleFilterChange }) => (
  <div>
    <label htmlFor="book-categories">
      Categories:
      <select
        name="categories"
        id="book-categories"
        onChange={event => handleFilterChange(event)}
      >
        {categories.map(x => <option key={x} value={x}>{x}</option>)}
      </select>
    </label>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.instanceOf(Function).isRequired,
};

export default CategoryFilter;
