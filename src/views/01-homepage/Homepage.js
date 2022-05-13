import React from 'react'
import Background from '../../features/standalone/Background'
import NoizeLogo from '../../assets/images/noize-logo.png'
import Heading from '../../features/heading/Heading'

export default function Homepage() {
  return (
    <>
    <div className=''>
      <Background/>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md'>
        <img src={NoizeLogo} alt="Noize Picture Haus" />
      </div>
    </div>
    <section className='section-wrapper'  style={{height: '100vh'}}>
      <Heading text={"We are Noize"} size="h2"></Heading>
    </section>
    </>
  )
}
