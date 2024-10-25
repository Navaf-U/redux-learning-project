import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    data:[],
    status : "idle",
};
const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{}, 
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = "fullfilled"
        })
        .addCase(getProducts.rejected,(state)=>{
            state.status = "error"
        })
    }

})

export const getProducts = createAsyncThunk("getProducts/products",async ()=>{
    const data = await fetch("https://fakestoreapi.com/products")
    const result = await data.json()
    return result
})

export default productsSlice.reducer //reducer exporting