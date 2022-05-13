import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const links = [
    {
        name: "About",
        path: "/about-us"
    },
    {
        name: "Case studies",
        path: "/case-studies"
    },
    {
        name: "Contact us",
        path: "/contact-us"
    }
]

export default function Menu({isMenuActive}) {
  return (
    <nav className={`${styles['main-menu']} ${isMenuActive && styles['is-active']}`}>
        <ul className={styles['menu-list']}>
            <li className='px-8'>
                <Link to="/">Logo</Link>
            </li>

            {
                links.map(link => {
                return <li className='px-8' key={link.name + link.path}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
                })
            }

        </ul>
    </nav>
  )
}
