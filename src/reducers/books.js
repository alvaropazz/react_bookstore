const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      console.log(action.book);
      return [
        ...state.slice(0, action.book),
        ...state.slice(action.book + 1, state.length)];
    default:
      return state;
  }
};

export default booksReducer;
