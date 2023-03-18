import { DELETE_REQ_SUCCESS, EDIT_REQ_SUCCESS, GET_LOGIN_FAIL, GET_LOGIN_REQ, GET_LOGIN_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQ, GET_REQ_SUCCESS, POST_REQ_SUCCESS } from "./actiontype"

const initstate = {
    isLoading:false,
    isError:false,
   token:"",
   
}

export const reducer = (state=initstate , {type,payload}) => {
        switch(type) {
            case GET_LOGIN_REQ: return {...state , isLoading:true}
            case GET_LOGIN_SUCCESS: return {...state, isLoading:false , token:payload}
            case GET_LOGIN_FAIL: return {...state , isLoading:false , isError:true}
           
            default : return state
        }
} 