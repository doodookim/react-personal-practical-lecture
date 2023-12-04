import { combineReducers } from 'redux';
import aespaReducer from 'redux/modules/letters';
import memberReducer from 'redux/modules/member';
import authReducer from 'redux/modules/authSlice';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    letters: aespaReducer,
    member: memberReducer,
    auth: authReducer,
  },
});

export default store;

// const rootReducer = combineReducers({ letters, member });

// const store = createStore(rootReducer, devToolsEnhancer());
