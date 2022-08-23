import { configureStore, combineReducers } from '@reduxjs/toolkit'
import loginSlice from './login'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: loginSlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export default store