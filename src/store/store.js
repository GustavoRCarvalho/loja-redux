import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import filterReducer from "./filterSlice";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";

export default configureStore({
    reducer: {
        filters: filterReducer,
        product: productSlice,
        cart: cartSlice,
        modal: modalSlice,
    }
})