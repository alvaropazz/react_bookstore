import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookComponent from './Book';

const mapStateToProps = state => ({
  books: state.books,
});

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(x => (<BookComponent key={x.id} book={x} />))}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(BooksList);
