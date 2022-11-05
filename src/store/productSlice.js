import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {
        imagesList: [],
        colors: {title: "", data: []},
        sizes: {title: "", data: []}
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
            let number = action.payload.toString().replace(/\D/g, "")
            if (number >= 99){
                state.productOptions.quantity = 99
            } else if(number < 1) {
                state.productOptions.quantity = 1
            }
             else {
                state.productOptions.quantity = number
            }
        }
    }
})

export const { updateProduct, updateProductColor, updateProductSize, updateProductQuantity } = productSlice.actions
export default productSlice.reducer