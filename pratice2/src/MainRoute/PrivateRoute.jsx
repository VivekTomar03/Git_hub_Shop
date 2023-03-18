import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const  {token} = useSelector((state) => state.authReducer)
    const location = useLocation()
  return !token ? <Navigate to={"/login"}  replace  state={location.pathname}/> :children
}
export default PrivateRoute;
