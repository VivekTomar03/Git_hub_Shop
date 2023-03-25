import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import AddProducts from '../Components/AddProducts';
import Home from '../Components/Home';

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/addproducts' element={<AddProducts/>}></Route>
    </Routes>
  );
}

export default MainRoute;
