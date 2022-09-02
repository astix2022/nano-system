import {  createSlice, createAsyncThunk  } from '@reduxjs/toolkit'


export const taklif = createAsyncThunk('taklif', async ({Name,suggestName,message})=>{
    return fetch ('http://nano-system.5p-agency.uz/api/v1/users/suggestion',
    {
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({Name,suggestName,message})
    }
    )
    .then(res=>res.json())
})


const TaklifSlice = createSlice({
    name:'taklif',
    initialState:{data:[],status:''},
    extraReducers:{
        [taklif.pending]:(state)=>{
            state.status = 'pending'
        },
        [taklif.rejected]:(state)=>{
            state.status = 'erorr'
        },
        [taklif.fulfilled]:(state)=>{
            state.status = 'success'
        }
    }
})

export default TaklifSlice.reducer