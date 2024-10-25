import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import productsSlice from './productSlice'
const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productsSlice
    }
})

export default store;