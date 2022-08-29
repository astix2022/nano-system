import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// oladigan funksiya
export const Post = createAsyncThunk('psot', async ()=>{
    return fetch('http://nano-system.5p-agency.uz/api/v1/ceo/news',{method:'GET'})
    .then(res=> res.json())

})


// ochiiradigan funksiya
// export const delateIdData = createAsyncThunk('data', async ({id})=>{
//     return fetch(`http://nano-system.5p-agency.uz/api/v1/ceo/suggestion/${id}`,{method:'DELETE'})
//     .then(res=> res.json())

// })

const postSlice = createSlice({
    name:'post',
    initialState: {data: [],status:''},
    extraReducers:{
        [Post.pending]:(state)=>{
            state.status = 'pending'
        },
        [Post.rejected]:(state)=>{
            state.status = 'error'
        },
        [Post.fulfilled]:(state,{payload})=>{
            state.status = 'success'
            state.info = payload 
        },
    }
})

export default postSlice.reducer