import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    a: ""
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        updateCatalog: (state, action) => {
            state += action.payload
        }
    }
})

export const { updateCatalog } = catalogSlice.actions
export default catalogSlice.reducer