import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalCart: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        onModalCart: (state) => {
            state.modalCart = true
        },
        closeModalCart: (state) => {
            state.modalCart = false
        }
    }
})

export const { onModalCart, closeModalCart } = modalSlice.actions
export default modalSlice.reducer