import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listFilters: {},
    listOrder: [],
    filtered: [],
    order: {}
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilters: (state, action) => {
            let index = state.filtered.indexOf(action.payload)

            if (index > -1) {
                state.filtered.splice(index, 1);
            } else {
                state.filtered = [...state.filtered, action.payload]
            }
        },
        updateOrder: (state, action) => {
            state.order = action.payload
        },
        setPageFilters: (state, action)=> {
            state.listFilters = action.payload
        },
        setPageOrder: (state, action) => {
            state.listOrder = action.payload
        }
    }
})

export const { updateFilters, updateOrder, setPageFilters, setPageOrder } = filterSlice.actions
export default filterSlice.reducer