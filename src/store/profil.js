import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const profilInfo = createAsyncThunk('info', async ()=>{
    return fetch('http://nano-system.5p-agency.uz/api/v1/ceo/user/1',{method:'GET'})
    .then(res=> res.json())

})


const profilSlice = createSlice({
    name:'info',
    initialState: {data: [],status:''},
    reducers:{},    
    extraReducers:{
        [profilInfo.pending]:(state,action)=>{
            state.status = 'pending'
        },
        [profilInfo.rejected]:(state,action)=>{
            state.status = 'error'
        },
        [profilInfo.fulfilled]:(state,action)=>{
            state.status = 'success'
            state.info = action.payload
        },
    }
})

export default profilSlice.reducer