import axios from "axios"
import { GET_LOGIN_FAIL, GET_LOGIN_REQ, GET_LOGIN_SUCCESS } from "./actiontype"


export const LoginReq = (obj) => (dispatch)=> {
       dispatch({type:GET_LOGIN_REQ})
    return  axios.post(`https://reqres.in/api/login`, obj) 
    .then((res) => dispatch({type:GET_LOGIN_SUCCESS, payload:res.data.token})) 
    .catch(() => dispatch({type:GET_LOGIN_FAIL}) )
    
} 