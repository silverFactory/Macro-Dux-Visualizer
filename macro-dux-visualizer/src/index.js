import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
// import melodyReducer from './reducers/melody_reducer'
// import harmonyReducer from './reducers/harmony_reducer'
// import bassReducer from './reducers/bass_reducer'
import macrosReducer from './reducers/macros_reducer'
import songsReducer from './reducers/songs_reducer'
import usersReducer from './reducers/users_reducer'

const rootReducer = combineReducers({
  macros: macrosReducer,
  songs: songsReducer,
  users: usersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
// const store = createStore(macroReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 //const store = createStore(macroReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
