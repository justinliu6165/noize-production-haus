import React from 'react'

import Background from '../../features/standalone/Background'
import Heading from '../../features/htmlElements/Heading'
import Section from '../../features/htmlElements/Sections'
import Carousel from '../../features/carousel/Carousel'
import Definition from '../../features/definition/Definition';

import NoizeLogo from '../../assets/images/noize-logo.png'
import introVideo from '../../assets/videos/super_8_cut.mp4';
import placeholderIcon from '../../assets/icons/client.svg';

export default function Homepage() {
  return (
    <>
    <div className=''>
      <Background/>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md'>
        <img src={NoizeLogo} alt="Noize Picture Haus" />
      </div>
    </div>

    <div className='m-16'>

      <Section>
        
        <Heading text={"We are Noize"} size="h2"></Heading>
        
        <div className='flex justify-center'>
          <div className="max-w-3xl overflow-hidden rounded-lg shadow-lg shadow-black">
            <video controls src={introVideo} className="w-full"></video>
          </div>
        </div>

        <p>
          NOIZE is Lorem ipsum dolor sit amet, consectetur <a href=''>adipiscing elit</a>. Ut a commodo leo. Nulla bibendum enim ligula, quis dictum risus accumsan iaculis. Vivamus volutpat ornare blandit. Mauris lacinia turpis eu urna accumsan auctor. Maecenas hendrerit felis et justo vestibulum sollicitudin. 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a commodo leo. Nulla bibendum enim ligula, quis dictum risus accumsan iaculis. Vivamus volutpat ornare blandit. Mauris lacinia turpis eu urna accumsan auctor. Maecenas hendrerit felis et justo vestibulum sollicitudin. 
        </p>

      </Section>

      <Section>
        
        <Heading text={"Who we work with"} size="h2"></Heading>
        
        <ul className='grid grid-cols-5 gap-8'>
          <li className=''><img src={placeholderIcon}/></li>
          <li className=''><img src={placeholderIcon}/></li>
          <li className=''><img src={placeholderIcon}/></li>
          <li className=''><img src={placeholderIcon}/></li>
          <li className=''><img src={placeholderIcon}/></li>
          <li className=''><img src={placeholderIcon}/></li>
          <li className=''><img src={placeholderIcon}/></li>
          <li className=''><img src={placeholderIcon}/></li>
          <li className=''><img src={placeholderIcon}/></li>
          <li className=''><img src={placeholderIcon}/></li>
        </ul>

      </Section>

      <Section>
        
        <Heading text={"past work"} size="h2"></Heading>
        
        <Carousel/>

      </Section>

      <Section classes="px-8">

        <Definition/>

      </Section>

    </div>

    </>
  )
}
