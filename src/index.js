import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import Reducer from './Reducer';


const store = createStore(Reducer, applyMiddleware(thunk));
const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
);

