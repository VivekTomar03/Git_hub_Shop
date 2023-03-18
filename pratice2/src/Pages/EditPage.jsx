import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editProducts, getProduct } from '../Redux/ProductReducer/action';
const inistate = {
  image: "dcsd",
  title: "sdc",
  category: "dsc",
  price: "dcsd",
  discount:"sdc"
}
const EditPage = () => {
const {id} = useParams()
const {products} = useSelector((state) => state.productReducer) 
const [productsData , setproductData] = useState(inistate ) 
const dispatch = useDispatch()
const navigate = useNavigate()
    const handleChange = (e) =>{
        const {type,value, name} = e.target
        let val = type==="number" ? Number(value) : value
        setproductData((prev) => ({...prev , [name]:val}))
   }
  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(productsData);
     dispatch(editProducts(productsData, id)).then(() => {
      alert("edited")
      navigate("/admin")
     })
  }
  console.log(products);
     useEffect(() => {
     
      const findData = products.find((el) => el.id ==(+id))
      console.log(findData);
     setproductData(findData)
     },[])

  return (
    <div>
            <form  onSubmit={handlesubmit}>
            <input type="text" placeholder='image'
             name={'image'}
             value={productsData?productsData.image : ""}
             onChange={handleChange}
            />
             <input type="text" placeholder='title'
             name='title'
             value={productsData?productsData.title:""}
             onChange={handleChange}
            />
             <input type="number" placeholder='price'
             name='price'
             value={productsData?productsData.price:""}
             onChange={handleChange}
            />
             <input type="number" placeholder='discount'
             name='discount'
             value={productsData?productsData.discount:""}
             onChange={handleChange}
            />

             <select name="category" 
              onChange={handleChange}
              value={productsData?productsData.category:""}
             >
                <option value="">select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="kids">kids</option>

             </select>
             <input type="submit" value="Add Products" />
      </form> 
    </div>
  );
}

export default EditPage;
