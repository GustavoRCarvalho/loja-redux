import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import filterReducer from "./filterSlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";

export default configureStore({
    reducer: {
        filters: filterReducer,
        product: productReducer,
        cart: cartReducer,
        modal: modalReducer,
    }
})