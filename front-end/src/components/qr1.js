import React from 'react'
import QRCode from "qrcode.react"
export default function qr1() {
   const link = "https://youtube.com/"
  return (
    <div>
      <h1>Youtube</h1>
      <QRCode value={link} />
    </div>
  )
}
