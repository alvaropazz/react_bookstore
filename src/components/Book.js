import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const BookComponent = ({ book, handleRemoveBook }) => (
  <div>
    <div className="bookinfocontainer">
      <div className="main-book-container">
        {/* <td className="book-id">{book.id}</td> */}
        <div className="book-category">{book.category}</div>
        <div className="book-title">{book.title}</div>
        <div className="book-author">Author Name</div>
        <div className="options">
          <button type="button" className="button btn-right" disabled>Comments</button>
          <span className="button-separator">|</span>
          <button type="button" className="button" onClick={handleRemoveBook}>Remove</button>
          <span className="button-separator">|</span>
          <button type="button" className="button" disabled>Edit</button>
        </div>
      </div>
      <div className="progress-book-container">
        <div className="book-progress">
          <div className="circle" />
        </div>
        <div>
          <div className="progress-text">
            <p>40%</p>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <div className="progress-info-book-container">
        <div className="chapter-info">Current Chapter</div>
        <div className="chapter-number">Chapter 100</div>
        <div className="chapter-button-container"><button type="button" className="chapter-button">UPDATE PROGRESS</button></div>
      </div>
    </div>
  </div>
);

BookComponent.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
};

export default BookComponent;
