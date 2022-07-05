import { combineReducers } from "redux"
import { LoginReducer } from "./Login"

import { GetItemsReducer } from "./FetchItems"


const appReducer = combineReducers({
    login: LoginReducer,
    get: GetItemsReducer
})


export const reducer = (state:any, action:any) => {
    return appReducer(state, action)
}