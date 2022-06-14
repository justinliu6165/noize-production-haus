import React from 'react'
import Section from '../../features/htmlElements/Sections';
import Heading from '../../features/htmlElements/Heading';

import styles from './AboutUs.module.css';

import cookieMonster from '../../assets/images/cookie-monster.png';
import placeholder from '../../assets/images/placeholder-1.png';

export default function AboutUs() {

  const ourServices = [
    {
      service: "Creative production",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut turpis pellentesque, iaculis lorem sed, mollis leo. Vestibulum consectetur rhoncus facilisis.",
      img: ""
    },
    {
      service: "Digitise and Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut turpis pellentesque, iaculis lorem sed, mollis leo. Vestibulum consectetur rhoncus facilisis.",
      img: ""
    },
    {
      service: "Editing madness",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut turpis pellentesque, iaculis lorem sed, mollis leo. Vestibulum consectetur rhoncus facilisis.",
      img: ""
    }
  ]

  const ourMinions = [
    {
      title: "CEO & Director",
      name: "Jamie Kirby",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ex vel quam facilisis aliquet. Mauris ultricies urna a tortor posuere dapibus nec in erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ex vel quam facilisis aliquet. Mauris ultricies urna a tortor posuere dapibus nec in erat.",
      profile: "../../assets/images/cookie-monster.png"
    },
    {
      title: "Lead Designer",
      name: "Jamie Kirby",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ex vel quam facilisis aliquet. Mauris ultricies urna a tortor posuere dapibus nec in erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ex vel quam facilisis aliquet. Mauris ultricies urna a tortor posuere dapibus nec in erat.",
      profile: "../../assets/images/cookie-monster.png"
    },
    {
      title: "Head of Production",
      name: "Jamie Kirby",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ex vel quam facilisis aliquet. Mauris ultricies urna a tortor posuere dapibus nec in erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ex vel quam facilisis aliquet. Mauris ultricies urna a tortor posuere dapibus nec in erat.",
      profile: "../../assets/images/cookie-monster.png"
    }
  ]

  return (
  <div className='m-16'>
    <Section>
      <Heading text="Who we are" size="h1"></Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut turpis pellentesque, iaculis lorem sed, mollis leo. Vestibulum consectetur rhoncus facilisis. Duis ac odio ut augue posuere maximus. Donec posuere lacus nec maximus interdum. Mauris feugiat metus ligula, vitae finibus tellus pretium at.
      </p>
    </Section>
    <Section>
      <ul className='space-y-16'>
      {
        ourServices.map((item, i) => (
          <li className={`md:flex ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
            <div className={`flex-shrink ${i % 2 !== 0 ? 'md:pl-16' : ''}`}>
              <h2 className={`font-eurostile text-24px md:text-32px ${styles['item-heading']}`}>{item.service}</h2>
              <p>{item.description}</p>
            </div>
            <div className='max-w-xs'>
              <img src={placeholder}/>
            </div>
          </li>
        ))
      }
      </ul>
    </Section>
    <Section>
      <Heading text="Our minions" size="h2"></Heading>
      <p>
        We slave them aware but we treat them nicely by feeding them some scooby snacks and some energy drinks and they work till dawn, oh how little do they know.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut turpis pellentesque, iaculis lorem sed, mollis leo. Vestibulum consectetur rhoncus facilisis. Duis ac odio ut augue posuere maximus. Donec posuere lacus nec maximus interdum. Mauris feugiat metus ligula, vitae finibus tellus pretium at.
      </p>
      <div className='pb-16'></div>
      <ul className='space-y-16'>
      {
        ourMinions.map((item, i) => (
          <li className="flex flex-col py-16">
            <h2 className={`font-eurostile text-24px mb-16 inline-block`}>{item.title}</h2>
            <div className="md:flex">
              <div style={{minWidth: '150px'}} className="flex-auto my-16 md:my-0">
                <img src={cookieMonster} alt={item.name} className='w-full'/>
              </div>
              <p className='md:pl-16'>{item.description}</p>
            </div>
          </li>
        ))
      }
      </ul>
    </Section>
  </div>
  )
}
