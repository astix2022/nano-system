import { configureStore, combineReducers } from '@reduxjs/toolkit'
import loginSlice from './login'
import dataSlice from './data'
<<<<<<< HEAD
import addAccountSlice from './addAccount'
import getLoginSlice from "./getLogin";
=======
import chopEtishSlice from './chopetish'
import postSlice from './getPost'
>>>>>>> fc579665f64674b9f49994439fb0318086925025
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
<<<<<<< HEAD
  auth: loginSlice,
  data: dataSlice,
  add: addAccountSlice,
  getLogin: getLoginSlice,
});
=======
    auth: loginSlice,
    data: dataSlice,
    post: chopEtishSlice,
    get: postSlice,
})
>>>>>>> fc579665f64674b9f49994439fb0318086925025

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export default store
