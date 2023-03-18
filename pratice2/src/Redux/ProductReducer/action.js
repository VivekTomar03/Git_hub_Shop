
import axios from "axios"
import { DELETE_REQ_SUCCESS, EDIT_REQ_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQ, GET_REQ_SUCCESS, POST_REQ_SUCCESS } from "./actiontype"

// get req 

export const getProduct = (params,page) =>(dispatch) => {
    dispatch({type:GET_PRODUCTS_REQ})
   return  axios.get(`http://localhost:8080/products?_page=${page}&_limit=4`, params)
     .then((res) => {
        //  console.log(res.headers.get("x-total-count"));
        dispatch({type:"PAGE" , payload:res.headers.get("x-total-count")})
        dispatch({type:GET_REQ_SUCCESS, payload:res.data})
     })
     .catch((err) =>   dispatch({type:GET_PRODUCTS_FAIL}))
} 

//post req 
// export const getProductAdmin = (page) => (dispatch) => {
//     dispatch({type:GET_PRODUCTS_REQ})
//    return  axios.get(`http://localhost:8080/products?_page=${page}&_limit=4`)
//      .then((res) => {
//         //  console.log(res.headers.get("x-total-count"));
//         dispatch({type:"PAGE" , payload:res.headers.get("x-total-count")})
//         dispatch({type:GET_REQ_SUCCESS, payload:res.data})
//      })
//      .catch((err) =>   dispatch({type:GET_PRODUCTS_FAIL}))
// } 



export const postreqAdmin = (obj)=>(dispatch) => {
    dispatch({type:GET_PRODUCTS_REQ})
   return axios.post(`http://localhost:8080/products`, obj)
   .then((res) => dispatch({type:POST_REQ_SUCCESS}))
   .catch(() =>dispatch({type:GET_PRODUCTS_FAIL}) )
}

// edit req 

export const editProducts = (obj,id) =>  (dispatch)=> {
    dispatch({type:GET_PRODUCTS_REQ})
   return axios.patch(`http://localhost:8080/products/${id}` , obj)
   .then((res) => dispatch({type:EDIT_REQ_SUCCESS }))
   .catch(() => dispatch({type:GET_PRODUCTS_FAIL}) )
}


// delete
export const deleteproducts = (id) => (dispatch) => {
   dispatch({type:GET_PRODUCTS_REQ})
   return  axios.delete(`http://localhost:8080/products/${id}`)
   .then(()=> dispatch({type:DELETE_REQ_SUCCESS}))
   .catch((err) => dispatch({type:GET_PRODUCTS_FAIL}) )
}