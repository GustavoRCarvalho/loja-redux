import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filtered: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilters: (state, action) => {
            let newList = [...state]
            let index = newList.indexOf(action.payload)
            if (index > -1) {
                newList.splice(index, 1);
            } else {
                newList = [...newList, action.payload]
            }
            state.filtered = newList;
        }
    }
})

export const { updateFilters } = filterSlice.actions
export default filterSlice.reducer