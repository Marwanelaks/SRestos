import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import "./AddMarque.css"
import Thumbnails from '../Card';
import { foods } from '../foods';
export default function AddMarque() {
   const navigate = useNavigate();
   const [picture, setPicture] = useState('/wooden-board-empty-table-top-blurred-background.jpg');
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
   
   <div>
   <div className="container backimg" style={{ backgroundImage: `url(${picture})` }}>
     <h2 className="text-center content-container m-top-5 ">
        Nom de Marque
     </h2>
   </div>
   
   <Thumbnails foods={foods}/>
   </div>
  )
}
