import {  createSlice, createAsyncThunk  } from '@reduxjs/toolkit'


export const Post = createAsyncThunk('post', async ({image,title,message})=>{
    return fetch ('http://nano-system.5p-agency.uz/api/v1/ceo/news',
    {
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({image,title,message})
    }
    )
    .then(res=>res.json())
})


const chopEtishSlice = createSlice({
    name:'post',
    initialState:{data:[],status:''},
    extraReducers:{
        [Post.pending]:(state)=>{
            state.status = 'pending'
        },
        [Post.rejected]:(state)=>{
            state.status = 'erorr'
        },
        [Post.fulfilled]:(state)=>{
            state.status = 'success'
        }
    }
})

export default chopEtishSlice.reducer