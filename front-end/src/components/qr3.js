import React from 'react'
import QRCode from "qrcode.react"
export default function qr3() {
   const link = "https://www.facebook.com"
  return (
    <div>
      <h1>Facebook</h1>
      <QRCode value={link}/>
    </div>
  )
}
