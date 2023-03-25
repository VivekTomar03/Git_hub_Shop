import axios from "axios"
import { dataType } from "./Components/AddProducts"


export const  getProducts = ()=> {
  return  axios.get("http://localhost:8080/products")
     .then((res) => {
        // console.log(res.data, "api");
        
        return res.data
     })
} 

export const deleteProduct = (id:number) => {
   axios.delete(`http://localhost:8080/products/${id}`)
}

export const PostProducts = (obj:dataType)=> {
    axios.post("http://localhost:8080/products", obj)
}