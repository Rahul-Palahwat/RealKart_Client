import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { api } from '../../../utils/api'
import { STATUS } from '../../../utils/constants'

interface InitialState{
    loading: boolean
    isLogIn: boolean
    error: string,
    getUser : string,
    dataGoogle: any
}

export const logIn = createAsyncThunk('login/logIn' , async(bool: boolean) => {
    return bool
})

export const signInGoogle = createAsyncThunk(
    'googleSignIn/user' , async(payload: {}, thunkAPI) => {
    const response = await api.get('/auth/google/new', payload)
    let {ok, data , problem} = response
    if(ok){
        return data 
    } else{
        return thunkAPI.rejectWithValue(problem)
    }
})


const initialState:InitialState = {
    loading: false,
    isLogIn: false,
    getUser : STATUS.NOT_STARTED,
    dataGoogle: null,
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
    }
})


export const LoginReducer =  loginSlice.reducer