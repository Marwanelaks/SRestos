import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
import './AjouterPlat.css';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
export default function AjouterPlat() {
 

  const navigate = useNavigate();
  const [picture, setPicture] = useState('/AddPlat.jpg');
  const [pic, setPic] = useState();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  const handlePictureChange = async(e) => {
   const file = e.target.files[0]
   setPic(file)
   console.log(file.name)
   setPicture(URL.createObjectURL(file));
   }

  return (
   <div className='bgall'>
   <div className="containe">
     <h1 className="text-center m-auto text-white">
       Ajouter Nouveau Plat
     </h1>
     <form action="#">
     <div className="form-row">
      <div className="profile-container ">
         <img className='profilimg' src={picture} alt="Profile Picture" />
         <div className="custom-file-input ">
            <input onChange={(e) => handlePictureChange(e)} type="file" id="myFileInput" required/>
            <label htmlFor="myFileInput"></label>
         </div>
      </div>
      </div>

       <div className="form-row">
         <div className="input-data my-3">
           <input type="text" required/>
           <div className="underline"></div>
           <label htmlFor="">Nom de plat</label>
         </div>
         <div className="input-data my-3">
           <input type="number" required/>
           <div className="underline"></div>
           <label htmlFor="">Prix en DH</label>
         </div>
       </div>
       <div className="form-row">
         <div className="input-data my-3">
           <input type="text" required/>
           <div className="underline"></div>
           <label htmlFor="">Durée</label>
         </div>
         <div className="input-data my-3">
           <input type="number" max={5} min={0} required/>
           <div className="underline"></div>
           <label htmlFor="">Nombre d'étoiles</label>
         </div>
       </div>
       <div className="form-row">
         <div className="input-data">
           <div className="underline"></div>
           <label htmlFor="">Catégorie</label>
           <br/>
           <select className='option' required>
             <option>- - -</option>
           </select> 
         </div>
       </div>
       <div className="containerbtn">
         <button className='botn' type='submit'>Ajouter</button>
       </div>
     </form>
   </div>
 </div>

  );
}
