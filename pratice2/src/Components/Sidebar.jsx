import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Sidebar = () => {
    const [searchParam , setsearchParam] = useSearchParams()
  const [ category  , setcategory] = useState(searchParam.getAll("category") || [])
 const [order , setorder] = useState(searchParam.get("order")||"")
const handleChange = (e) => {
  let newCategory = [...category]
  let value = e.target.value
    if(newCategory.includes(value)){
     newCategory = newCategory.filter((el) => el !==value )
    
  }
  else{
       newCategory.push(value)  
  }
  setcategory(newCategory)
}


const handleSort = (e) => {
   const {name , value} = e.target
 
   if(value==="asc"){
        setorder(value)
   }
   else if (value==""){
    setorder(value)
   }
   else{
    setorder(value)
   }

  
}
// console.log(order);
 useEffect(() => {
  let obj = {
    category,

  }
  order && ( obj.order=order)
    setsearchParam(obj)
 },[category,order])



  return (
    <div>
       <div>
          <input type="checkbox" 
           value={"male"}
           onChange={handleChange}
           checked={category.includes("male")}
          />
           <label>Male</label>
           <input type="checkbox" 
             value={"female"}
             onChange={handleChange}
             checked={category.includes("female")}
           />
           <label>Female</label>
           <input type="checkbox" 
            value={"kids"}
            onChange={handleChange}
            checked={category.includes("kids")}
           />
           <label>Kids</label>
       </div>
         <br /><br />
         <div onChange={handleSort}>
            <input type="radio" 
             value={"asc"}
             name="order"
              defaultChecked={order==="asc"} 
            />
              <label >Ascending</label>
              <input type="radio"  
                value={"desc"}  
                  name="order"
                  defaultChecked={order==="desc"}
              />
              <label >descending</label>
              <input type="radio"  
                value={""}  
                  name=""
                  
              />
              <label >Reset</label>

         </div>


    </div>
  )
}

export default Sidebar
