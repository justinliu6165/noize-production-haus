import React from 'react'
import Section from '../../features/htmlElements/Sections';
import Heading from '../../features/htmlElements/Heading';
import ContactForm from '../../features/form/ContactForm';

export default function Contact() {

  const contacts = [
    {
      text: "General Enquiries, please contact",
      contact: "INFO@NOIZE.EU"
    },
    {
      text: "For all Press related queries, contact",
      contact: "PRESS@NOIZE.EU"
    },
    {
      text: "Or if you just really want to chat, call us on ",
      contact: "0207 564 00XX"
    }
  ]

  return (
  <div className='m-16'>
    <Section>
      <Heading text="Contact us" size="h1"></Heading>
      <p>
      You like what you see, well why not take it a step further. Send us a message or give us a call if you’ve got any enquiries, you want to see what we can do for you, you’d like to contribute to our wonderful work or just want to get in contact for a chat. We are here, we are NOIZE.
      </p>
    </Section>
    <Section>
      <ul>
        {
          contacts.map(contact => {
            return (
              <li className='my-32' key={contact.contact}>
                <div className='text-16px'>{contact.text}</div>
                <div className='uppercase text-pink text-48px font-bold'>{contact.contact}</div>
              </li>
            )
          })
        }
        
      </ul>
    </Section>
    <Section>
      <Heading text="Write to us" size="h2"></Heading>
      <ContactForm/>
    </Section>
  </div>
  )
}
