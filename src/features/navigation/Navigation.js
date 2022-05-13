import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { navStatus, toggleMenu } from './navigationSlice';
import Hamburger from './Hamburger';
import Menu from './Menu';
import styles from './Navigation.module.css';

export default function Navigation() {
    const { isOpen } = useSelector(navStatus);
    const dispatch = useDispatch();

    return (
        <header className={styles['nav-container']}>
            <div className='absolute top-0 z-50'>
                <Hamburger isMenuActive={isOpen} onClickHandler={() => dispatch(toggleMenu(!isOpen))} />
            </div>

            {/* { isOpen && <Menu /> } */}
            <Menu isMenuActive={isOpen} />
            
        </header>
    )
}
 