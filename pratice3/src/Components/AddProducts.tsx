import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostProducts } from '../api';
export interface dataType {
    id?: number,
   title:  string,
    price: number,
    description: string,
    category:string,
    image: string,
    like:number,
    dislike:number
}
const inistate = {
   
    title:"",
     price: 0,
     description: "",
     category:"",
     image: "",
     like:0,
     dislike:0
}

const AddProducts = () => {
 const [formdata , setformdata] = useState<dataType>(inistate) 
const navigate = useNavigate()

 const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
   const{name, value, type} = e.target
    let val = type=="number"? Number(value):value
     setformdata({...formdata, [name]:val})
 }  
 
const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
 console.log("submit", formdata);
   PostProducts(formdata)
   navigate("/")
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  
         name='title'
         value={formdata.title}
         onChange={handleChange}
        />
         <label >title</label><br />
        <input type="number"
           name='price'
           value={formdata.price}
           onChange={handleChange}
        />
        <label >price</label><br />
        <input type="text" 
           name='description'
           value={formdata.description}
           onChange={handleChange}
        />
        <label >description</label><br />
        <input type="text" 
          name='category'
          value={formdata.category}
          onChange={handleChange}
        />
        <label >category</label><br />
        <input type="text" 
          name='image'
          value={formdata.image}
          onChange={handleChange}
        />
        <label >Image</label><br />
        <input type="number" 
          name='like'
          value={formdata.like}
          onChange={handleChange}
        />
        <label >like</label><br />
        <input type="number" 
          name='dislike'
          value={formdata.dislike}
          onChange={handleChange}
        />
        <label >dislike</label><br />
        <input type="submit"  value={"add Product"}/>
      </form>
    </div>
  );
}

export default AddProducts;
