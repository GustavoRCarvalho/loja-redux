import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalCart: false,
    modalMenu: false,
    modalFilters: false,
    modalOrder: false
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
        },
        modalFilters: (state) => {
            state.modalFilters = !state.modalFilters
        },
        modalOrder: (state) => {
            state.modalOrder = !state.modalOrder
        }
    }
})

export const { modalCart, modalMenu, modalFilters, modalOrder } = modalSlice.actions
export default modalSlice.reducer