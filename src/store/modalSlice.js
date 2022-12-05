import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalCart: false,
    modalMenu: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        modalCart: (state) => {
            state.modalCart = !state.modalCart
        },
        modalMenu: (state) => {
            state.modalMenu = !state.modalMenu
        }
    }
})

export const { modalCart, modalMenu } = modalSlice.actions
export default modalSlice.reducer