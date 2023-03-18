import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import { getProduct } from '../Redux/ProductReducer/action';
import Pagination from './Pagination';

const HomePage = () => {
const [searchParam] = useSearchParams()

const {products, isLoading , isError, cart} = useSelector((state) => state.productReducer)    
const location = useLocation()
const dispatch = useDispatch()
 const [page , setpage] = useState(1)
  let obj = {
    params:{
       category:searchParam.getAll("category"),
       _sort: searchParam.get("order") && "price",
       _order: searchParam.get("order")
    }
  }

 useEffect(() => {
   console.log(obj);

      dispatch(getProduct(obj, page))
 },[location.search, page])
//  console.log(location);
//    console.log(searchParam.getAll("category"));
console.log(cart);

   const handleCart = (item) => {
        dispatch({type:"CART", payload:item})
   }

  return (
    <>
            <div style={{display:"flex", }}>

          <div  style={{borderRight:"2px solid black", width:"20%"}} >
             <Sidebar/>

          </div>
<div  style={{display:"grid" ,marginTop:"30px" ,gridTemplateColumns:"repeat(4,1fr)" , alignItems:"center" , gap:"10px", width:"80%" }}>
      {
        isLoading && <h1>Loading...</h1>
      }
      {
        isError && <h1>Something is wrong</h1>
      }
      {
        products && products.map((el) => (
            <div key={el.id}  style={{border:"3px solid gray"}}>
                <img src={el.image} alt={el.title} width="200px" height={"200px"}/>
                <h3>Title  :{el.title}</h3>
                 <p>category :{el.category}</p>
                 <p>Price :{el.price}</p>
                 <p>Discount :{el.discount}</p>
                 <button onClick={() => handleCart(el)}>Add to cart</button>
            </div>
        ))
      }
    </div>


           

            </div>
              <div className='pagination'>
              <Pagination page={page} 
               setpage={setpage}
              />
        </div>
        </>
  );
}

export default HomePage;
