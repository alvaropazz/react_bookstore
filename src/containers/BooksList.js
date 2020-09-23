import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookComponent from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import { CategoryFilter } from '../components/CategoryFilter';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook, books } = this.props;
    const idx = (books).findIndex(i => i === book);
    removeBook(idx);
  }

  handleFilterChange(e) {
    const { changeFilter } = this.props;
    changeFilter(e.target.value);
  }

  render() {
    const { books, filter } = this.props;
    const filtered = filter === 'All' ? books : books.filter(x => x.category === filter);
    return (
      <div>
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
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
            {filtered.map(x => (
              <BookComponent
                key={x.id}
                book={x}
                handleRemoveBook={() => this.handleRemoveBook(x)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: book => dispatch(changeFilter(book)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
  changeFilter: PropTypes.instanceOf(Function).isRequired,
  filter: PropTypes.string,
};

BooksList.defaultProps = {
  filter: 'All',
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
