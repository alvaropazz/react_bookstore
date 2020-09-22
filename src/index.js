import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import booksReducer from './reducers/books';
import { getRandomInt } from './utils/getRandomInt';

const books = [
  {
    id: getRandomInt(0, 5000),
    title: 'First',
    category: 'Fiction',
  },
  {
    id: getRandomInt(5001, 10000),
    title: 'Second',
    category: 'Biography',
  },
];

const bookStore = createStore(booksReducer, { books });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
