import React from 'react'
import QRCode from '../../assets/images/footer.png'

export default function Footer() {
  return (
    <footer className='w-full border-t-8 border-pink bg-black'>
        <div className='m-auto pt-16' style={{maxWidth: "500px"}}>
            <img src={QRCode} alt="qr-code"/>
        </div>
    </footer>
  )
}
