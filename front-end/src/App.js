import { useRef, useState } from 'react';
import './App.css';
import QRCode from "qrcode.react"
import html2canvas from 'html2canvas';
import { Link, Outlet } from 'react-router-dom';
import {foods} from './foods';
import Thumbnails from './Card';

function App() {
  const qrCodeRef = useRef(null);
  const [link,setLink] = useState(null)
  const [testsub,setTest] = useState(false)
  const Generate = (e) =>{
  e.preventDefault()
    if(link != null){
      setTest(true)
    }
    else{
      setTest(false)
    }
  }
  const handleDownload = () => {
    html2canvas(qrCodeRef.current, { scale: 4, backgroundColor: null }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'qrcode.png';
      link.click();
    });
  };
  return (
    <div className="App text-center m-auto">
      <h1>Home</h1>
      <form onSubmit ={Generate}>
        <label>Saisie un lien : </label><br></br>
        <input type='text' onChange={(e)=>setLink(e.target.value)}></input><br></br>
       <br></br> <input type='submit' value="Convert to QRCode"></input>
      </form>
      {
        testsub && <>
        <h1>QRCode :</h1>
        <div ref={qrCodeRef}><QRCode value={link} /> </div>
        <button onClick={handleDownload}>Download QR Code</button>
        </>
      }
      
      {/* <Link to="qr1">QR1</Link><br></br>
      <Link to="qr2">QR2</Link><br></br>
      <Link to="qr3">QR3</Link>
      <Outlet/> */}
     
       <Thumbnails foods={foods} />
  
    </div>
  );
}

export default App;
