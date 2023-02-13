import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProductToCart: (state, action) => {
            state.push(action.payload)
        },
        clearCart: () => []
    }
})

export const { addProductToCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
