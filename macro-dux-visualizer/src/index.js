import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
// import melodyReducer from './reducers/melody_reducer'
// import harmonyReducer from './reducers/harmony_reducer'
// import bassReducer from './reducers/bass_reducer'
import macroReducer from './reducers/macro_reducer'
// const rootReducer = combineReducers({
//   melody: melodyReducer,
//   harmony: harmonyReducer,
//   bass: bassReducer
// })
// const store = createStore(macroReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 const store = createStore(macroReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
