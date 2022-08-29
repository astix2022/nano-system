import {  createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

export const getPost = createAsyncThunk('post', async ()=>{
    return fetch ('',{method:'POST'})
    .then(res=>res.jso())
})


const postSlice = createSlice({
    name:'post',
    initialState:{data:[],status:''},
    extraReducers:{
        [getPost.pending]:(state,action)=>{
            state.status = 'pending'
        },
        [getPost.rejected]:(state,action)=>{
            state.status = 'erorr'
        },
        [getPost.fulfilled]:(state,action)=>{
            state.status = 'success'
        }

    }
})

export default postSlice.reducer