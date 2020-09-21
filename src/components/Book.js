import React from 'react';
import PropTypes from 'prop-types';

const BookComponent = ({ book }) => (
  <tr>
    <td className="book-id">{book.id}</td>
    <td className="book-title">{book.title}</td>
    <td className="book-category">{book.category}</td>
  </tr>
);

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookComponent;
