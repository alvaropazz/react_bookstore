import { combineReducers } from 'redux';
import booksReducer from './books';
import changeFilter from './filter';

const rootReducer = combineReducers({ books: booksReducer, filter: changeFilter });

export default rootReducer;
