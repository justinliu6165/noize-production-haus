import React from 'react'
import './Hamburger.css';

export default function Hamburger({isMenuActive, onClickHandler}) {
  return (
    <button className={`hamburger cross menu--2 ${isMenuActive ? 'hamburger--active' : ''}`} onClick={() => onClickHandler()} tabIndex="1">
        <label>
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" />
                <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                <path className="line--2" d="M0 50h99" />
                <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
            </svg>
        </label>
    </button>
  )
}
