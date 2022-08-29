import {  createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

export const addAcc = createAsyncThunk(
  "add",
  async ({ fullname, login, password, role }) => {
    return fetch("http://nano-system.5p-agency.uz/api/v1/ceo/set/login", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({ fullname, login, password, role }),
    }).then((res) => res.json());
  }
);

const addAccountSlice = createSlice({
  name: "add",  
  initialState: { data: [], status: "" },
  extraReducers: {
    [addAcc.pending]: (state, action) => {
      state.status = "pending";
    },
    [addAcc.rejected]: (state, action) => {
      state.status = "erorr";
    },
    [addAcc.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
  },
});

export default addAccountSlice.reducer;