import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getLogin = createAsyncThunk('login', async ({ login, password }, { rejectWithValue }) => {
    try {
        const response = await fetch('http://nano-system.5p-agency.uz/api/v1/users//login', {
            method: "POST",
            body: JSON.stringify({
                login, password
            }),
            headers:{'Content-type':'application/json'},
        })
        // if(res.token) navigate('/asosiy')
        if(!response.ok){
            console.log(response);
            rejectWithValue(response)
            throw new Error(response)
            
        }
        localStorage.setItem('token', response.token)
        return response.data

    } catch (err) {
        
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
            state.data = action.payload
            state.status = 'success'
        }
    }
})

export default loginSlice.reducer