import { configureStore, combineReducers } from '@reduxjs/toolkit'
import loginSlice from './login'
import dataSlice from './data'
import addAccountSlice from './addAccount'
import getLoginSlice from "./getLogin";
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
  auth: loginSlice,
  data: dataSlice,
  add: addAccountSlice,
  getLogin: getLoginSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export default store
