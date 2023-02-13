import { createSlice } from '@reduxjs/toolkit'
import { productApi } from '@/api/product'

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            state.push(...action.payload)
        },
        clearProducts: () => []
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productApi.endpoints.getProducts.matchFulfilled,
            (state, action) => {
                state.push(...action.payload.products)
            }
        )
    }
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer
