import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getLogin = createAsyncThunk('getLogin', async ()=>{
    return fetch("http://nano-system.5p-agency.uz/api/v1/ceo/logins", {
      method: "GET",
    }).then((res) => res.json());
})

// export const delateIdData = createAsyncThunk('data', async ({id})=>{
//     return fetch(`http://nano-system.5p-agency.uz/api/v1/ceo/suggestion/${id}`,{method:'DELETE'})
//     .then(res=> res.json())
// })

const getLoginSlice = createSlice({
  name: "getLogin",
  initialState: { data: [], status: "" },
  reducers: {},
  extraReducers: {
    [getLogin.pending]: (state, action) => {
      state.status = "pending";
    },
    [getLogin.rejected]: (state, action) => {
      state.status = "error";
    },
    [getLogin.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
  },
});

export default getLoginSlice.reducer;