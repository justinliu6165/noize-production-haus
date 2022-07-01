import React from 'react'
import ImgParallax from './ImgParallax';
import QRCode from '../../assets/images/footer.png'

export default function Footer() {
  return (
    <footer className='w-full bg-black h-80'>
      <div className='m-auto pt-16 relative h-full' style={{maxWidth: "500px"}}>
      
        <ImgParallax image={{src: QRCode, alt: "QR Code"}} speed={-0.5} offset={20} />

      </div>
    </footer>
  )
}
