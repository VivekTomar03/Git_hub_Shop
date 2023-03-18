import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteproducts, getProduct, getProductAdmin, postreqAdmin } from '../Redux/ProductReducer/action';
import Pagination from './Pagination';
const inistate = {
    image: "",
    title: "",
    category: "",
    price: "",

    discount:""
}
const AdminPage = () => {
 const [productsData , setproductData] = useState(inistate)   
const dispatch = useDispatch()
const {products} = useSelector((state) => state.productReducer)  
const [page , setpage] = useState(1)


const handleChange = (e) =>{
      const {type,value, name} = e.target
      let val = type==="number" ? Number(value) : value
      setproductData((prev) =>( {...prev, [name]:val}))
 }
   
 
 const handlesubmit = (e)=> {
     e.preventDefault()
     dispatch(postreqAdmin(productsData)).then(() =>  dispatch(getProduct({},page)))
 }
  useEffect(() => {
    dispatch(getProduct({},page))
  },[page])



  const handleDelet  = (id) => {
     console.log(id);
     dispatch(deleteproducts(id)).then(() =>  dispatch(getProduct({},page)) )
  }
  return (
    <div>
       <div>
       <form  onSubmit={handlesubmit}>
            <input type="text" placeholder='image'
             name='image'
             value={productsData.image}
             onChange={handleChange}
            />
             <input type="text" placeholder='title'
             name='title'
             value={productsData.title}
             onChange={handleChange}
            />
             <input type="number" placeholder='price'
             name='price'
             value={productsData.price}
             onChange={handleChange}
            />
             <input type="number" placeholder='discount'
             name='discount'
             value={productsData.discount}
             onChange={handleChange}
            />

             <select name="category" 
              onChange={handleChange}
              value={productsData.category}
             >
                <option value="">select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="kids">kids</option>

             </select>
             <input type="submit" value="Add Products" />
      </form>
       </div>

         <div>
         <table >
                        <thead>
                            <tr>
                            <th>Order No</th>
                            <th>Title</th>
                            <th>Price</th>
                           
                            <th>CATEGORY</th>
                            <th>DISCOUNT</th>
                            <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                           products &&products.map((el) => (
                                <tr key={el.id}>
                                    <td>{el.id }</td>
                                    <td>{el.title}</td>
                                    <td>₹ {el.price}</td>
                                    <td>{el.discount}</td>
                                    <td>{el.category}</td>
                                    <td><img src={el.image} alt={el.title} width={25}/></td>
                                    
                                    <Link to={`/editproducts/${el.id}`}><td><button  color={"white"} bg={"green"} _hover={"green"} >EDIT</button></td></Link>
                                    <td><button color={"white"} bg={"red"} _hover={"red"}  onClick={() =>  handleDelet(el.id)}>DELETE</button></td>
                                    
                                </tr>
                            ))
                           }
                          
                        </tbody>
                     </table>
                     <Pagination page={page} 
               setpage={setpage}
              />
         </div>
    </div>
  );
}

export default AdminPage;
