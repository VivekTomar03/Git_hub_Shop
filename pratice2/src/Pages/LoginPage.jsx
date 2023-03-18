import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginReq } from '../Redux/AuthReducer/action';

const LoginPage = () => {
  const [ email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()
  const  {token} = useSelector((state) => state.authReducer)
   const navigate = useNavigate()
   const location = useLocation()
  const handleLogin = () => {
       let obj = {
        email,password
       }
       dispatch(LoginReq(obj)).then(()=> navigate(location.state, {replace:true}) )
  }
  console.log(token);
      
  return (
    <div>
       <input type="text" placeholder='email'
        value={email}
        onChange={(e)=> setemail(e.target.value)}
       />
       <input type="text" placeholder='password'
         value={password}
         onChange={(e)=> setpassword(e.target.value)}
       />
       <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
