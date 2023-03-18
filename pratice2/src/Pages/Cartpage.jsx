import React from 'react'
import { useSelector } from 'react-redux'

const Cartpage = () => {
    const {cart} = useSelector((state) => state.productReducer)  
  return (
    <div>
       {
       cart && cart.map((el) => (
            <div key={el.id}  style={{border:"3px solid gray"}}>
                <img src={el.image} alt={el.title} width="200px" height={"200px"}/>
                <h3>Title  :{el.title}</h3>
                 <p>category :{el.category}</p>
                 <p>Price :{el.price}</p>
                 <p>Discount :{el.discount}</p>
               
            </div>
        ))
      }
    </div>
  )
}

export default Cartpage
