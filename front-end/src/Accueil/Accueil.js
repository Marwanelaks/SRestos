import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Accueil() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [restos, setRestos] = useState([]);
  let { user } = useParams();
  const [toggle,setToggle] = useState(false)
  useEffect(() => {
    const rst = axios.get(`http://localhost:5000/data/${user}`)
    setRestos(rst.data);
    console.log(rst.data)
  }, );

  const nvg = (e) => {
    e.preventDefault()
    setToggle(true)
    navigate(`/Restaurant/${user}`)
  };

  return (
    <div>
      <div className='container'>
        <Link>Ajouter Votre Marque</Link>
        <div className='my-5 m-auto row rainbow'>
          {/* Corrected part */}
          {/* {toggle &&
            restos.map((elem) => (
              <span key={elem.id} className='col-4 ss text-center'>
                <a onClick={nvg} key={elem.id} className='lien' href=''>
                  <span className='image-container col-12 sr'>
                    <img className='addr' src={elem.image} alt='Ajouter Restaurant' />
                  </span>
                  <i className='m-auto'>{elem.name}</i>
                </a>
              </span>
            ))} */}
          {/* End of corrected part */}
          <span className='col-4 ss text-center'>
            <a onClick={nvg} className='lien' href=''>
              <span className='image-container col-12 sr'>
                <img className='addr' src='/pls.png' alt='Ajouter Restaurant' />
              </span>
              <i className='m-auto'>Ajouter Votre restaurant</i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
