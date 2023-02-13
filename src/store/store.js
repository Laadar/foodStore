import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { productApi } from '@/api/product'
import { backendApi } from '@/api/someBackendApi'
import productReducer from '@/store/slices/product'
import cartReducer from '@/store/slices/cart'

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [backendApi.reducerPath]: backendApi.reducer,
        products: productReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(backendApi.middleware)
})

setupListeners(store.dispatch)
