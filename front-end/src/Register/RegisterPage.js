import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
import './registerPage.module.css';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import {v4} from "uuid";
import axios from "axios"
export default function RegisterPage() {
  const [username,setUsername] = useState()
  const [pass,setPass] = useState()
  const [mail,setMail] = useState()
  const [tel,setTel] = useState()
  const HandleClick = (e) =>{
      e.preventDefault()
      const uuid = v4()
      axios.post("http://localhost:5000/newUser",{
        id : uuid,
        username : username,
        pass : pass,
        mail : mail,
        tel : tel
      })
  }
  return (
    <div className="login-container">
    <form className="login-form" onSubmit={HandleClick}>
      <h2>S'inscrire</h2>
      <div className="form-group">
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input type="text" id="username" name="username" onChange={(e)=>setUsername(e.target.value)} required/>
      </div>
      <div className="form-group">
        <label htmlFor="username">Email:</label>
        <input type="email" id="email" name="mail" onChange={(e)=>setMail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="username">Téléphone:</label>
        <input type="tel" id="tel" name="tel" onChange={(e)=>setTel(e.target.value)} required/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" onChange={(e)=>setPass(e.target.value)} required/>
      </div>
      <button type="submit">S'inscrire</button>
      <div className='text-center my-1'>
            Already a user? &nbsp;
            <Link to="/login">
              Login here
            </Link>
          </div>
    </form>
  </div>
  );
}
