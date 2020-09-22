import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const CategoryFilter = ({handleFilterChange}) => {
  return(
    <div>
      <label htmlFor="book-categories">
          Categories:
          <select 
          name="categories" 
          id="book-categories"
          onChange={event => handleFilterChange(event)}>
            <option key='ALL' value='ALL'>All</option>
            {categories.map(x => <option key={x} value={x}>{x}</option>)}
          </select>
        </label>
    </div>
  )
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.instanceOf(Function).isRequired,
};

export default CategoryFilter;