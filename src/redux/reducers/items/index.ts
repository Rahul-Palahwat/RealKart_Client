import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { api_item } from "../../../utils/api";
import { STATUS } from "../../../utils/constants";
interface InitialState{
    getAllProductsStatus: string
    getBestSellingProductsStatus: string
    getMostWishlistedProductsStatus: string
    getSingleProductStatus: string
    dataAllProducts : any
    dataBestSellingProducts : any
    dataMostWishlistedProducts : any
    dataSingleProduct: any
}
const initialState:InitialState = {
    getAllProductsStatus: STATUS.NOT_STARTED,
    getBestSellingProductsStatus: STATUS.NOT_STARTED,
    getMostWishlistedProductsStatus: STATUS.NOT_STARTED,
    getSingleProductStatus: STATUS.NOT_STARTED,
    dataAllProducts : [],
    dataBestSellingProducts: [],
    dataMostWishlistedProducts: [],
    dataSingleProduct:[],
}

export const getSingleProduct = createAsyncThunk('get/singleProduct' , async(payload: {}, thunkAPI) => {
    const response = await api_item.get('/products' , payload)
    let {ok , data , problem} = response
    if(ok){
        return data 
    }else{
        return thunkAPI.rejectWithValue(problem)
    }
})

export const getTotalItems = createAsyncThunk ( 'get/allProducts' , async(payload: {} , thunkAPI) => {
    const response = await api_item.get('/products/all' , payload)
    let {ok , data , problem} = response
    if(ok) {
        return data
    } else {
        return thunkAPI.rejectWithValue(problem)
    }
} )
export const getBestSellingItems = createAsyncThunk ('get/allBestSellingProducts', async(payload: {}, thunkAPI) => {
    const response = await api_item.get('/products/all' , payload)
    let {ok , data , problem} = response
    if(ok) {
        return data
    } else {
        return thunkAPI.rejectWithValue(problem)
    }
})
export const getMostWishlistedItems = createAsyncThunk ('get/allMostWishlistedProducts', async(payload: {}, thunkAPI) => {
    const response = await api_item.get('/products/all' , payload)
    let {ok, data , problem} = response
    if(ok) {
        return data
    } else {
        return thunkAPI.rejectWithValue(problem)
    }
})
const itemsSlice = createSlice({
    name: "get",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // for All products 
        builder.addCase(getTotalItems.pending , state => {
            // state.loading = true
            state.getAllProductsStatus = STATUS.FETCHING
        })
        builder.addCase(getTotalItems.fulfilled , (state , actions) => {
            state.dataAllProducts = actions.payload
            state.getAllProductsStatus = STATUS.SUCCESS
        })
        builder.addCase(getTotalItems.rejected , (state , actions) => {
            state.getAllProductsStatus = STATUS.FAILED
            state.dataAllProducts = []
        })
        // For Best Selling 
        builder.addCase(getBestSellingItems.pending , state => {
            state.getBestSellingProductsStatus = STATUS.FETCHING
        })
        builder.addCase(getBestSellingItems.fulfilled , (state, actions) => {
            state.dataBestSellingProducts = actions.payload
            state.getBestSellingProductsStatus = STATUS.SUCCESS
        })
        builder.addCase(getBestSellingItems.rejected , (state , actions) => {
            state.getBestSellingProductsStatus = STATUS.FAILED
            state.dataBestSellingProducts = []
        })
        // For Most Wishlisted 
        builder.addCase(getMostWishlistedItems.pending , state => {
            state.getMostWishlistedProductsStatus = STATUS.FETCHING
        })
        builder.addCase(getMostWishlistedItems.fulfilled , (state, actions) => {
            state.dataMostWishlistedProducts = actions.payload
            state.getMostWishlistedProductsStatus = STATUS.SUCCESS
        })
        builder.addCase(getMostWishlistedItems.rejected , (state , actions) => {
            state.getMostWishlistedProductsStatus = STATUS.FAILED
            state.dataMostWishlistedProducts = []
        })
        //for single product
        builder.addCase(getSingleProduct.pending , state => {
            state.getSingleProductStatus = STATUS.FETCHING
        })
        builder.addCase(getSingleProduct.fulfilled , (state , actions) => {
            state.getSingleProductStatus = STATUS.SUCCESS
            state.dataSingleProduct = actions.payload
        })
        builder.addCase(getSingleProduct.rejected , (state , actions) => {
            state.getSingleProductStatus = STATUS.FAILED
            state.dataSingleProduct = []
        })
    }
})
export const ItemsReducer =  itemsSlice.reducer