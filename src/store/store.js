import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import filterReducer from "./filterSlice";

export default configureStore({
    reducer: {
        filters: filterReducer,
        product: productSlice
    }
})