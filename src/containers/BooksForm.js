import React from 'react';

export const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <label htmlFor="title-text">
        Title:
        <input id="title-text" type="text" />
      </label>

      <label htmlFor="book-categories">
        Categories:
        <select name="categories" id="book-categories">
          {categories.map(x => <option key={x} value={x}>{x}</option>)}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
