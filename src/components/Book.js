import React from 'react';
import PropTypes from 'prop-types';

const BookComponent = ({ book, handleRemoveBook }) => (
  <tr>
    <td className="book-id">{book.id}</td>
    <td className="book-title">{book.title}</td>
    <td className="book-category">{book.category}</td>
    <td className="options"><button type="button" onClick={handleRemoveBook}>Remove Book</button></td>
  </tr>
);

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
};

export default BookComponent;
