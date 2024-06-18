import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { cartReducer } from "./CartReducer";

export const allReducers = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer
})