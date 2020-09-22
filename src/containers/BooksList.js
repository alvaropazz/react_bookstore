import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookComponent from '../components/Book';
import { removeBook } from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook, books } = this.props;
    const idx = (books).findIndex(i => i === book);
    removeBook(idx);
  }

  render() {
    const { books } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {books.map(x => (
            <BookComponent
              key={x.id}
              book={x}
              handleRemoveBook={() => this.handleRemoveBook(x)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
