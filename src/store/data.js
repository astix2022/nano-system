import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('data', async ()=>{
    return fetch('http://nano-system.5p-agency.uz/api/v1/ceo/suggestions',{method:'GET'})
    .then(res=> res.json())

})


export const delateIdData = createAsyncThunk('data', async ({id})=>{
    return fetch(`http://nano-system.5p-agency.uz/api/v1/ceo/suggestion/${id}`,{method:'DELETE'})
    .then(res=> res.json())

})

const dataSlice = createSlice({
    name:'data',
    initialState: {data: [],status:''},
    reducers:{},    
    extraReducers:{
        [getData.pending]:(state,action)=>{
            state.status = 'pending'
        },
        [getData.rejected]:(state,action)=>{
            state.status = 'error'
        },
        [getData.fulfilled]:(state,action)=>{
            state.status = 'success'
            state.data = action.payload
        },
        [delateIdData.pending]:(state,action)=>{
            state.status = 'pending'
        },
        [delateIdData.rejected]:(state,action)=>{
            state.status = 'error'
        },
        [delateIdData.fulfilled]:(state,action)=>{
            state.status = 'success'
            state.data = action.payload
        }
    }
})

export default dataSlice.reducer