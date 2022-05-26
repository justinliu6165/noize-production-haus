import React from 'react'
import styles from './Heading.module.css'

export default function Heading({size, text}) {

    return (
        <div className='flex justify-center'>
            <div className={`${styles.heading} py-8 md:py-16`}>
                {
                    size.toLowerCase() === "h1" ?
                        <h1 className='text-48px md:text-64px font-bold uppercase text-center'>{text}</h1> : 
                        size.toLowerCase() === "h2" ? 
                        <h2 className='text-32px md:text-48px font-bold uppercase text-center'>{text}</h2> : 
                        <p>{text}</p>
                }
            </div>
        </div>

    )
}
