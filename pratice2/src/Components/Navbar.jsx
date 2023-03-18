import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-around" , alignItems:"center" , padding:"10px" , borderBottom:"3px solid gray"}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/admin"}>Admin</Link>
      <Link to={"/cart"}>cart</Link>
    </div>
  );
}

export default Navbar;
