import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice.js";
import CartSlice from "./CartSlice.js";

let store = configureStore({
    reducer:{
        user:userReducer,
        cart:CartSlice,
    }
})



export default store