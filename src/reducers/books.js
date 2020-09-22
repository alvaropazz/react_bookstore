import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return {
        books:
        [...state.books.slice(0, action.book),
          ...state.books.slice(action.book + 1,
            state.books.length)],
      };
    default:
      return state;
  }
};

export default booksReducer;
