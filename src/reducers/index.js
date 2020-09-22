import { combineReducers } from 'redux';
import booksReducer from './books';
import changeFilter from './filter'

export default combineReducers({ books: booksReducer, cateogry: changeFilter });
