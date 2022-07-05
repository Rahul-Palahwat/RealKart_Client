import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/api";

interface InitialState{
    loading : boolean
    data : any
    error : string
}

const initialState:InitialState = {
    loading: true,
    data : [],
    error : '',
}

export const getItems = createAsyncThunk ( 'get/products' , async(payload: {} , thunkAPI) => {
    const response = await api.get('/products/all' , payload)

    let {ok , data , problem} = response

    if(ok) {
        return data
    } else {
        return thunkAPI.rejectWithValue(problem)
    }

} )

const itemsSlice = createSlice({
    name: "get",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getItems.pending , state => {
            state.loading = true
        })
        builder.addCase(getItems.fulfilled , (state , actions) => {
            state.data = actions.payload
            state.loading = false
            state.error = ''
        })
        builder.addCase(getItems.rejected , (state , actions) => {
            state.loading = false
            state.data = []
            state.error = actions.error.message || "Error in fetching data"
        })
    }
})

export const ItemsReducer =  itemsSlice.reducer