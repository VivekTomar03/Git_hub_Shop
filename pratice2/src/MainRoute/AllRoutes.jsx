import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../Pages/AdminPage';
import Cartpage from '../Pages/Cartpage';
import EditPage from '../Pages/EditPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import SingalProducts from '../Pages/SingalProducts';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/'  element={<HomePage/>}></Route>
       <Route path='/singalproduct/:id'  element={<SingalProducts/>}></Route>
       <Route path='/admin' element={<PrivateRoute><AdminPage/></PrivateRoute>}></Route>
       <Route path='/editproducts/:id' element={<PrivateRoute><EditPage/></PrivateRoute>}></Route>
       <Route path='/login' element={<LoginPage/>}></Route>
       <Route path='/cart' element={<Cartpage/>}></Route>
       <Route path='*' element={<h1>404 page not found</h1>}></Route>
    </Routes>
  );
}

export default AllRoutes;
