import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {
        Colors: {title: "", data: []},
        Sizes: {title: "", data: []}
    },
    productOptions: {
        color: {},
        size: "",
        quantity: 1
    }
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateProduct: (state, action) => {
            state.product = action.payload
        },
        updateProductColor: (state, action) => {
            state.productOptions.color = action.payload
        },
        updateProductSize: (state, action) => {
            state.productOptions.size = action.payload
        },
        updateProductQuantity: (state, action) => {
            state.productOptions.quantity = action.payload
        }
    }
})

export const { updateProduct, updateProductColor, updateProductSize, updateProductQuantity } = productSlice.actions
export default productSlice.reducer