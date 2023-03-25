import React from 'react';
import { deleteProduct, getProducts } from '../api';

interface dataType {
    id: number,
   title:  string,
    price: number,
    description: string,
    category:string,
    image: string,
    like:number,
    dislike:number
}
interface likeType extends dataType {
    likeProd:any,
    dislikeProd:any,
    updater: () => void
   
}
const ProductsItem = ({id, title, price , image, like, dislike, description,category,  likeProd, dislikeProd,updater}:likeType) => {
  const  handledELETE =(id:number)=> {
    //   console.log(id);
      deleteProduct(id)
      updater()
  
  }
  console.log("render");
  
  return (
    <div>
        <img src={image} alt={title} width="200px" height={"200px"} />
      <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>
         <p onClick={()=>likeProd(id)}>Like {like}</p>
         <p onClick={()=>dislikeProd(id)}>dislike {dislike}</p>
         <button onClick={()=> handledELETE(id)}>Delete</button>
    </div>
  );
}

export default ProductsItem;
