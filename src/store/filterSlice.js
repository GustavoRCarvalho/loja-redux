import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listFilters: {},
    listOrder: [],
    filtered: [],
    order: {},
    currentPage: 0,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        reset: (state) => {
            state.filtered = initialState.filtered
            state.order = initialState.order
            state.currentPage = initialState.currentPage
        },
        updateFilters: (state, action) => {
            let index = state.filtered.indexOf(action.payload)

            if (index > -1) {
                state.filtered.splice(index, 1);
            } else {
                state.filtered = [...state.filtered, action.payload]
            }
            state.currentPage = 0
        },
        updateOrder: (state, action) => {
            state.order = action.payload
            state.currentPage = 0
        },
        updateCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setPageFilters: (state, action)=> {
            state.listFilters = action.payload
        },
        setPageOrder: (state, action) => {
            state.listOrder = action.payload
        }
    }
})

export const { updateFilters, updateCurrentPage, updateOrder, setPageFilters, setPageOrder, reset } = filterSlice.actions
export default filterSlice.reducer