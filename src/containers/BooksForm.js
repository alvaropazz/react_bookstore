import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import './BookForm.css';

import { getRandomInt } from '../utils/getRandomInt';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.name === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else {
      this.setState({
        category: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const id = getRandomInt(99, 10000);
    const { createBook } = this.props;
    createBook({
      title, category, id,
    });
    e.target.reset();
    this.setState({
      title: '',
      category: categories[0],
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="addbooktitle">ADD NEW BOOK</h1>
        <div className="input-wrapper">
          <label htmlFor="title-text">
            <input
              id="title-text"
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
              placeholder="Title"
            />
          </label>
          <label htmlFor="book-categories" className="newbook-label">
            <select name="categories" id="book-categories" className="categories" onChange={this.handleChange}>
              {categories.map(x => <option key={x} value={x}>{x}</option>)}
            </select>
          </label>
          <button className="addbookbutton" type="submit">Add Book</button>
        </div>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
