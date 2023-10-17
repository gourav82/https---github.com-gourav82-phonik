import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userCart from "./slices/cartSlice" 
import authRegSlice from "./slices/authSlice"

const rootReducer = combineReducers({
        cartItem:userCart,
        registration:authRegSlice,
})

const store = configureStore({
    reducer:rootReducer
})

export default store;