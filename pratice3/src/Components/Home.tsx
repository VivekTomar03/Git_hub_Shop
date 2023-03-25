import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ProductsItem from './ProductsItem';
export interface dataType {
    id: number,
   title:  string,
    price: number,
    description: string,
    category:string,
    image: string,
    like:number,
    dislike:number
}
const Home = () => {
    const [data , setdata] = useState<dataType[]>([])
      const [update , setupdate] = useState<boolean>(false)
  useEffect(() => {
   getProducts().then((res1:dataType[])=>setdata(res1));

  },[update])
//  console.log(data);
  
  const likeProd = (id:number)=> {
   let likedata = data.reverse().map((el) => {
    return el.id==+id ? {...el , like:el.like+1}:el
    
   })
    setdata(likedata)
  }
  const dislikeProd = (id:number)=> {
    let dislikedata = data.reverse().map((el) => {
        return el.id==+id ? {...el , dislike:el.dislike+1}:el
        
       })
        setdata(dislikedata)
   
  }

  
const updater = ()=> {
    setupdate((prev) => !prev)
   
    
}
console.log(update);
  return (
    <div>
      <h1>Products List</h1>
      <div style={{display:"grid"  , gridTemplateColumns:"repeat(4,1fr)" , gap:"20px"}}>
        {
            data && data.reverse().map((el:dataType) => (
                 <ProductsItem key={el.id}  {...el}updater={updater}   likeProd={likeProd}   dislikeProd={ dislikeProd}/>
            ))
        }
      </div>

    </div>
  );
}

export default Home;
