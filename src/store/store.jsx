import { configureStore, combineReducers } from '@reduxjs/toolkit'
import loginSlice from './login'
import dataSlice from './data'
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
    auth: loginSlice,
    data: dataSlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export default store
