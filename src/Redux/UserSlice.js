import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  displayName: null,
  email: null,
  photoURL: null,
};

let userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SIGNEDIn: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
    },
    SIGNEDOut: (state) => {
         state.displayName = null;
         state.email = null;
         state.photoURL = null;
    },
  },
});

export let {SIGNEDIn,SIGNEDOut} = userSlice.actions
export default userSlice.reducer