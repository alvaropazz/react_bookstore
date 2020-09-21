import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    createBook(this.state);
    e.target.reset();
    this.setState({
      id: 0,
      title: '',
      category: categories[0],
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title-text">
          Title:
          <input
            id="title-text"
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            required
          />
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
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
