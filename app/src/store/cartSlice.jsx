import {createSlice} from '@reduxjs/toolkit'


const initialState = [];
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload) //initialState changing
        },
        remove(state,action){
            return state.filter((item)=>item.id !== action.payload)
        }
    } 
})

export const {add,remove} = cartSlice.actions //add fn action exporting
export default cartSlice.reducer //reducer exporting
