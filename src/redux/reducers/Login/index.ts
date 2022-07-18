import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { api_user } from '../../../utils/api'
import { STATUS } from '../../../utils/constants'
interface InitialState{
    loading: boolean
    isLogIn: boolean
    error: string,
    getUser : string,
    dataGoogle: any,
    createUser: any
}
export const logIn = createAsyncThunk('login/logIn' , async(bool: boolean) => {
    return bool
})
export const signInGoogle = createAsyncThunk(
    'googleSignIn/user' , async(payload: {}, thunkAPI) => {
    const response = await api_user.get('/auth/google/new', payload)
    let {ok, data , problem} = response
    if(ok){
        return data 
    } else{
        return thunkAPI.rejectWithValue(problem)
    }
})
export const create_customer = createAsyncThunk( 'create/user' , async(payload: {}, thunkAPI) => {
    // console.log(payload)
    const response = await api_user.post('/auth/customer/signup' , payload)
    let {ok , data , problem} = response;
    // console.log("response" , response);
    if(ok) {
        return data
    } else {
        return thunkAPI.rejectWithValue(problem)
    }
} )
const initialState:InitialState = {
    loading: false,
    isLogIn: false,
    getUser : STATUS.NOT_STARTED,
    dataGoogle: null,
    createUser: null,
    error:''
}
const loginSlice = createSlice({
    name:'login',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(logIn.pending ,state =>{
            state.loading = true
        } )
        builder.addCase(logIn.fulfilled , (state, actions) => {
            state.loading = false
            state.isLogIn = actions.payload
            state.error = ''
        })
        builder.addCase(logIn.rejected , (state , actions) => {
            state.loading = false
            state.error = actions.error.message || "Login Failed"
        })
        builder.addCase(signInGoogle.pending , state => {
            state.getUser = STATUS.FETCHING
        })
        builder.addCase(signInGoogle.fulfilled , (state , actions) => {
            state.dataGoogle = actions.payload
            state.getUser = STATUS.SUCCESS
        })
        builder.addCase(signInGoogle.rejected , state => {
            state.getUser = STATUS.FAILED
            state.dataGoogle = []
        })
        builder.addCase(create_customer.pending , state => {
            state.getUser = STATUS.FETCHING
        })
        builder.addCase(create_customer.fulfilled , (state , actions) => {
            state.createUser = actions.payload
            state.getUser = STATUS.SUCCESS
        })
        builder.addCase(create_customer.rejected , state => {
            state.getUser = STATUS.FAILED
        })
    }
})
export const LoginReducer =  loginSlice.reducer