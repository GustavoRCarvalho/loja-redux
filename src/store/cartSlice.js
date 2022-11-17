import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listCart: []
}

function FindIndex(state, product) {
    return state.listCart.findIndex(({id, size, color}) => {
        let colorState = Object.keys(color)[0]
        let colorProduct = Object.keys(product.color)[0]

        return product.id === id && product.size === size && colorState === colorProduct
    })
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            let index = FindIndex(state, action.payload)
            
            if (index > -1) {
                state.listCart[index].quantity = Number(state.listCart[index].quantity) + Number(action.payload.quantity);
            } else {
                state.listCart = [...state.listCart, action.payload]
            }
        },
        removeProductToCart: (state, action) => {
            let index = FindIndex(state, action.payload)

            if (index > -1) {
                state.listCart.splice(index, 1);
            }
        },
        updateCartProductQuantity: (state, action) => {
            let number = action.payload.newNumber.toString().replace(/\D/g, "")
            let index = FindIndex(state, action.payload.product)

            if (number >= 99){
                state.listCart[index].quantity = 99
            } else if(number < 1) {
                state.listCart[index].quantity = 1
            }
            else {
                state.listCart[index].quantity = Number(number)
            }
        }
    }
})

export const { addProductToCart, removeProductToCart, updateCartProductQuantity } = cartSlice.actions
export default cartSlice.reducer