import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

import { STATUS } from '../../../utils/constants'

interface InitialState{
    addToCartStatus: string,
    items: string[],
    error: string,

}

const initialState:InitialState = {
    addToCartStatus : STATUS.NOT_STARTED,
    items: [],
    error: '',
}

export const addToCart = createAsyncThunk('cartItem/addToCart' , async(id: string) => {
    return id
})


const cartItemSlice = createSlice({
    name: "cartItem",
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(addToCart.pending , state => {
            state.addToCartStatus = STATUS.FETCHING
        })
        builders.addCase(addToCart.fulfilled , (state , actions) => {
            state.addToCartStatus = STATUS.SUCCESS
            state.items.push(actions.payload)
        })
        builders.addCase(addToCart.rejected , (state , actions) => {
            state.addToCartStatus = STATUS.FAILED
            state.error = actions.error.message || "Item not added to cart"
        })
    }
})

export const addToCartReducer = cartItemSlice.reducer