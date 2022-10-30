import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filtered: [""]
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
        }
    }
})

export const { updateFilters } = filterSlice.actions
export default filterSlice.reducer