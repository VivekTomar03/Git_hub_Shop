import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
 import thunk from "redux-thunk"
 import { reducer as productReducer } from "./ProductReducer/reducer"
 import { reducer as authReducer } from "./AuthReducer/reducer"
const rootreducer = combineReducers({productReducer,  authReducer})
export const store  = legacy_createStore(rootreducer, applyMiddleware(thunk))