import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import booksReducer from './reducers/books';

const getRandomInt = (min, max) => {
  Math.floor(Math.random()
                                    * (Math.floor(max)
                                     - Math.ceil(min))
                                     + Math.ceil(min));
};

const bookObj = {
  books: [{
    id: getRandomInt(0, 50),
    title: 'First',
    category: 'Fiction',
  },
  {
    id: getRandomInt(51, 100),
    title: 'Second',
    category: 'Biography',
  }],
};

const bookStore = createStore(booksReducer, bookObj);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
