import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

interface InitialState{
    loading: boolean
    isLogIn: boolean
    error: string
}

const initialState:InitialState = {
    loading: false,
    isLogIn: false,
    error:''
}

export const logIn = createAsyncThunk('login/logIn' , async(bool: boolean) => {
    return bool
})


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
    }
})


export default loginSlice.reducer