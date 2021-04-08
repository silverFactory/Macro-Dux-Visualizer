import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
// import melodyReducer from './reducers/melody_reducer'
// import harmonyReducer from './reducers/harmony_reducer'
// import bassReducer from './reducers/bass_reducer'
import macroReducer from './macro_reducer'
// const rootReducer = combineReducers({
//   melody: melodyReducer,
//   harmony: harmonyReducer,
//   bass: bassReducer
// })
const store = createStore(macroReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
