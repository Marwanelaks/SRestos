import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Qr1 from './components/qr1';
import Qr2 from './components/qr2';
import Qr3 from './components/qr3';
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Register/RegisterPage";
import reportWebVitals from './reportWebVitals';
import Accueil from './Accueil/Accueil';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import AjouterPlat from './NewFood/AjouterPlat';
import AddMarque from './Accueil/AddMarque';
import Add from './Restaurant/Add';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}/>
        {/* <Route path='qr1' element={<Qr1/>}/>
        <Route path='qr2' element={<Qr2/>}/>
        <Route path='qr3' element={<Qr3/>}/>
      </Route> */}
      <Route path='/create/plat' element={<AjouterPlat/>}/>
      <Route path='home/:user' element={<Accueil/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/Restaurant/:id' element={<Add/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/:id?/Brand' element={<AddMarque/>}/>
     </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
