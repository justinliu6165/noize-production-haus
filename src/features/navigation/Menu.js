import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'
import { toggleMenu } from './navigationSlice';

const links = [
    {
        name: "Home",
        path: "/",
        img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
        name: "About",
        path: "/about-us",
        img: "https://images.unsplash.com/photo-1534961165765-5c9795af911b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80"
    },
    {
        name: "Case studies",
        path: "/case-studies",
        img: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Contact us",
        path: "/contact-us",
        img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
]

export default function Menu({isMenuActive, onClickHandler}) {
    const [defaultBG, setDefaultBG] = useState(0);
    const [activeBGIndex, setActiveBGIndex] = useState(0);
    const { pathname } = useLocation();

    useEffect(() => {
        setDefaultBG(links.findIndex(link => link.path === pathname));
    }, [])

    return (
        <nav className={`${styles['main-menu']} ${isMenuActive && styles['is-active']}`}>
            
            {links.map((link, i) => (
                <div 
                    key={link.name}
                    className={`${styles['menu-bg']} ${activeBGIndex === i ? styles['menu-bg--active'] : ''}`} 
                    style={{ backgroundImage: `radial-gradient(circle, rgba(235,235,235,0) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,1) 100%), url('${link.img}')`}}>
                </div>
            ))}

            <ul className={styles['menu-list']}>
                {
                    links.map((link, i) => (
                        <li 
                            className={styles['main-link']} 
                            key={link.name + link.path} 
                            onMouseEnter={() => setActiveBGIndex(i)}
                            onMouseLeave={() => setActiveBGIndex(defaultBG)}
                        >

                            <Link to={link.path} className={styles['main-link-text']} onClick={onClickHandler}>
                                <div className='font-bold'>{link.name}</div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
