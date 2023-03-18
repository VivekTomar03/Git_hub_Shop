import React from 'react';
import { useSelector } from 'react-redux';

const Pagination = ({page, setpage}) => {
 const {TotalPage} = useSelector((state) => state.productReducer)
//  console.log(TotalPage);

let AllPages = Math.ceil(TotalPage/4)
  let arr = new Array(AllPages).fill(0)
  return (
    <div>
        {
            arr && arr.map((_, index)=> (
                <button style={{backgroundColor:page===(index+1) ? "red":null , color:page===(index+1) ? "white":"black" , padding:"10px" , margin:"5px"}} onClick={() => setpage(index+1)} key={index}>{index+1}</button>
            ))
        }
    </div>
  );
}

export default Pagination;
