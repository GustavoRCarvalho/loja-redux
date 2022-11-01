import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./catalogSlice";
import filterReducer from "./filterSlice";

export default configureStore({
    reducer: {
        filters: filterReducer,
        catalog: catalogSlice
    }
})