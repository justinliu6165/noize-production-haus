import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { navStatus, toggleMenu } from './navigationSlice';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Hamburger from './Hamburger';
import Menu from './Menu';
import styles from './Navigation.module.css';
import NoizeLogo from '../../assets/images/noize-logo.png';


export default function Navigation() {
    const menuRef = useRef();
    const { isOpen } = useSelector(navStatus);
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu(!isOpen));

        if(!isOpen) {
            disableBodyScroll(menuRef.current);
        } else {
            enableBodyScroll(menuRef.current);
        }
    };
    
    return (
        <header className={styles['nav-container']}>

            {/* LOGO */}
            <div className={`absolute top-16 grid justify-center w-full ${pathname === "/" && 'hidden'}`}>
                <img src={NoizeLogo} alt='Noize picture haus' className='w-28'/>
            </div>

            <div className='fixed top-0 z-50'>
                <Hamburger isMenuActive={isOpen} onClickHandler={toggleMenuHandler} />
            </div>

            <Menu isMenuActive={isOpen} innerRef={menuRef} onClickHandler={toggleMenuHandler}/>
        </header>
    )
}
 