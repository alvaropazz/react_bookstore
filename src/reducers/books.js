import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.slice(0, action.book),
        ...state.slice(action.book + 1,
          state.length)];
    default:
      return state;
  }
};

export default booksReducer;
