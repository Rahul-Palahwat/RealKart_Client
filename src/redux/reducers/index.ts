import { combineReducers } from "redux"
import { LoginReducer } from "./Login"


const appReducer = combineReducers({
    login: LoginReducer
})


export const reducer = (state:any, action:any) => {
    return appReducer(state, action)
}