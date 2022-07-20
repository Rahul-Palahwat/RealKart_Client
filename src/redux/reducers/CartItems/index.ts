import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
// lodash import 
import _ from 'lodash';

import { STATUS } from '../../../utils/constants'

interface Obj{
    id : string,
    count: number,
}

interface InitialState{
    addToCartStatus: string,
    items: Obj[],
    sum: number,
    noOfItems: number,
    error: string,

}

const initialState:InitialState = {
    addToCartStatus : STATUS.NOT_STARTED,
    items: [],
    sum: 0,
    noOfItems: 0,
    error: '',
}

export const addToCart = createAsyncThunk('cartItem/addToCart' , async(payload:any) => {
    let data={
        id: payload.id,
        price: payload.price,
    }
    return data
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
            let index = _.findIndex(state.items , {id: actions.payload.id});
            state.noOfItems++;
            if(index === -1){
                const obj={
                    id: actions.payload.id,
                    count: 1
                }
                state.items.push(obj)
                state.sum+=actions.payload.price
            }else{
                state.items[index].count++;
                state.sum+=actions.payload.price
            }
            
        })
        builders.addCase(addToCart.rejected , (state , actions) => {
            state.addToCartStatus = STATUS.FAILED
            state.error = actions.error.message || "Item not added to cart"
        })
    }
})

export const addToCartReducer = cartItemSlice.reducer