import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 } from 'uuid'
import "./rest.css"
export default function Add() {
   const uuid = v4()
   const Id = uuid.replace(/-/g,"")
   const [nom,setNom] = useState()
   let {id} = useParams()
   const navigate = useNavigate();
   const [picture, setPicture] = useState(null);
   const [pic, setPic] = useState();
 
   const handlePictureChange = async(e) => {
    const file = e.target.files[0]
    setPic(file)
    console.log(file.name)
    setPicture(URL.createObjectURL(file));
    }
   const HandleSub = (e) =>{ 
      e.preventDefault()
      const formData = new FormData();
      formData.append('id', Id);
      formData.append('nom', nom);
      formData.append('RestauPic', pic);
      axios.put(`http://localhost:5000/restau/${id}`,formData)
      .then(()=>{
         navigate(`/home/${id}`)
      })
   }
  return (
   <div className="login-container m-auto">
   <form className="login-form" onSubmit={HandleSub}>
    
     <div className="form-row m-auto text-center quantum">
         <h2>My <img  className='sel' src='/chef.png' /> Restau</h2>
     </div>
      
     <div className="form-group" >
       <label htmlFor="username">Nom de Restaurant:</label>
       <input type="text" id="restauname" name="restauname" onChange={(e)=>setNom(e.target.value)} required/>
     </div>
     <div className="form-group" >
       <label htmlFor="logo">Logo:</label>
       <input type="file" onChange={(e)=>handlePictureChange(e)} required/>
     
     {picture && 
     <div className="form-row" >
         <img className='proimg' src={picture} alt="Profile Picture" />
      </div>}
      </div>
     <button type="submit">Créer</button>
   </form>
 </div>
  )
}

