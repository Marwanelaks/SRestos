import React from 'react'
import QRCode from "qrcode.react"
export default function qr2() {
   const link = "https://github.com"
  return (
    <div>
      <h1>Github</h1>
      <QRCode value={link}/>
    </div>
  )
}
