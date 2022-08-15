import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getLogin = createAsyncThunk('login', async ({ login, password }, { rejectWithValue }) => {
    try{
        const response = await fetch('http://nano-system.5p-agency.uz/api/v1/ceo/login', {
            method: "POST",
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                login, password
            })
        })
        const data = await response.json()

        if(!response.ok){
            rejectWithValue(response)
            throw new Error(response)
        }
        return data

    } 
    catch (err) {
        if(!err.response) {
            rejectWithValue(err.response.data)
        }
    }
})


const loginSlice = createSlice({
    name: 'login',
    initialState: { data: [], status: '' },
    reducers: {},
    extraReducers: {
        [getLogin.pending]: (state, action) => {
            state.data = []
            state.status = 'loading'
        },
        [getLogin.rejected]: (state, action) => {
            state.data = []
            state.status = 'error'
        },
        [getLogin.fulfilled]: (state, action) => {
            console.log(action.payload.token)
            state.data = action.payload
            state.status = 'success'
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('role', action.payload.role)
        } 
    }
})

export default loginSlice.reducer