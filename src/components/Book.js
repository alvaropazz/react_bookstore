import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const BookComponent = ({ book, handleRemoveBook }) => (
  <tr>
    <div className="bookinfocontainer">
      <div className="main-book-container">
        {/* <td className="book-id">{book.id}</td> */}
        <td className="book-category">{book.category}</td>
        <td className="book-title">{book.title}</td>
        <td className="book-author">Author Name</td>
        <td className="options">
          <button type="button" className="button">Comments</button>
          <span className="button-separator">|</span>
          <button type="button" className="button" onClick={handleRemoveBook}>Remove</button>
          <span className="button-separator">|</span>
          <button type="button" className="button">Edit</button>
        </td>
      </div>
      <div className="progress-book-container">
        <td className="book-progress">
          <div className="circle" />
        </td>
        <td>
          <div className="progress-text">
            <p>0%</p>
            <p>Completed</p>
          </div>
        </td>
      </div>
      <div className="progress-info-book-container">
        <td className="chapter-info">Current Chapter</td>
        <td className="chapter-number">Chapter 100</td>
        <td className="chapter-button-container"><button type="button" className="chapter-button">Update Progress</button></td>
      </div>
    </div>
  </tr>
);

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
};

export default BookComponent;
