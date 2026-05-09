import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice"
const store=configureStore({
    reducer:{
        product:ProductReducer
    }
})
export default store;
export type RootType=ReturnType<typeof store.getState>;
