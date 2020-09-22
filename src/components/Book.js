import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const BookComponent = ({ book, handleRemoveBook }) => (
  <tr>
    {/* <td className="book-id">{book.id}</td> */}
    <td className="book-category">{book.category}</td>
    <td className="book-title">{book.title}</td>
    <td className="options"><button type="button" className="remove-button" onClick={handleRemoveBook}>Remove Book</button></td>
  </tr>
);

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
};

export default BookComponent;
