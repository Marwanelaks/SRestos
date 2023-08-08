import React, { useEffect, useState } from 'react';
import './loginPage.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [nom,setNom] = useState()
  const [pass,setPass] = useState()
  const [err,setErr] = useState()
  const [data,setData] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:5000/data")
    .then((res)=>{
      setData(res.data)
    })
  },)
  const HandleLog = (e) => {
    e.preventDefault()
    const user = data.find(ex => ex.username === nom && ex.password === pass);
    const userid = data.filter(ex => ex.username === nom && ex.password === pass )
    if (user) {
      navigate(`/home/${userid[0]._id}`,{state:{iduser:userid[0]._id , resto:[ userid[0].restaurant ], nomuser:userid[0].username}});
      // console.log(userid[0].id)
      // console.log(userid)
    }
    else
       setErr("Le mot de passe ou le nom d'utilisateur est incorrect")
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={HandleLog}>
        <h2>Se Connecter</h2>
        <div className="form-group" >
          <div className='text-danger text-center'>{err}</div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={(e)=>setNom(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e)=>setPass(e.target.value)} required/>
        </div>
        <button type="submit">Se Connecter</button>
        <div className='text-center my-1'>
            New user? &nbsp;
            <Link to="/register">
              Register here
            </Link>
          </div>
      </form>
    </div>
  );
};

export default LoginPage;
