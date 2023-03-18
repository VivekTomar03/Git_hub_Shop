import { DELETE_REQ_SUCCESS, EDIT_REQ_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQ, GET_REQ_SUCCESS, POST_REQ_SUCCESS } from "./actiontype"

const initstate = {
    isLoading:false,
    isError:false,
    products:[],
    TotalPage:1,
    cart:[]
}

export const reducer = (state=initstate , {type,payload}) => {
        switch(type) {
            case GET_PRODUCTS_REQ: return {...state , isLoading:true}
            case GET_REQ_SUCCESS: return {...state, isLoading:false , products:payload}
            case GET_PRODUCTS_FAIL: return {...state , isLoading:false , isError:true}
            case "PAGE" : return {...state, isLoading:false, TotalPage:payload}
            case POST_REQ_SUCCESS: return {...state, isLoading:false }
            case EDIT_REQ_SUCCESS: return {...state, isLoading:false }
            case DELETE_REQ_SUCCESS: return {...state, isLoading:false }

            case "CART" : return {...state, cart:[...state.cart , payload]}
            default : return state
        }
} 