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
    removeFromCartStatus: string,
    items: Obj[],
    sum: number,
    noOfItems: number,
    error: string,

}

const initialState:InitialState = {
    addToCartStatus : STATUS.NOT_STARTED,
    removeFromCartStatus: STATUS.NOT_STARTED,
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

export const removeOneItemFromCart = createAsyncThunk('cartItem/removeOneItemFromCart' , async(payload: any) => {
    let data = {
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
        // to add item to cart 
        builders.addCase(addToCart.pending , state => {
            state.addToCartStatus = STATUS.FETCHING
        })
        builders.addCase(addToCart.fulfilled , (state , actions) => {
            state.addToCartStatus = STATUS.SUCCESS
            let index = _.findIndex(state.items , {id: actions.payload.id})
            state.noOfItems++;
            // logic to increase the count or not 
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
        // to remove item from cart
        builders.addCase(removeOneItemFromCart.pending , state => {
            state.removeFromCartStatus = STATUS.FETCHING
        })
        builders.addCase(removeOneItemFromCart.fulfilled , (state , actions) => {
            state.removeFromCartStatus = STATUS.SUCCESS
            let index = _.findIndex(state.items , {id: actions.payload.id})
            state.noOfItems--;
            // logic to increase the count or not 
            if(state.items[index].count > 1){
                state.items[index].count--;
                state.sum -= actions.payload.price
            }else{
                state.sum -= actions.payload.price
                // _.remove(state.items , {'_id' === actions.payload.id})
                state.items = _.remove(state.items, function(item) {
                    return item.id !== actions.payload.id;
                  });
            }
        })
    }
})

export const addToCartReducer = cartItemSlice.reducer