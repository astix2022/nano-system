import { configureStore, combineReducers } from '@reduxjs/toolkit'
import loginSlice from './login'
import dataSlice from './data'
import chopEtishSlice from './chopetish'
import postSlice from './getPost'
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
    auth: loginSlice,
    data: dataSlice,
    post: chopEtishSlice,
    get: postSlice,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export default store
