import { combineReducers } from "redux"
import { LoginReducer } from "./Login"
import { ItemsReducer } from "./items"
const appReducer = combineReducers({
    login: LoginReducer,
    items: ItemsReducer,
})
export const reducer = (state:any, action:any) => {
    return appReducer(state, action)
}