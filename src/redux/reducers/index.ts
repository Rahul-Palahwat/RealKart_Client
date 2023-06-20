import { combineReducers } from "redux"
import { LoginReducer } from "./Login"
import { ItemsReducer } from "./items"
import { addToCartReducer } from "./CartItems"
const appReducer = combineReducers({
    login: LoginReducer,
    items: ItemsReducer,
    cartItem: addToCartReducer,
})
export const reducer = (state:any, action:any) => {
    return appReducer(state, action)
}