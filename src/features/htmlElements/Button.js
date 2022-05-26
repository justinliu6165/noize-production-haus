import React from 'react'
import styles from './Button.module.css'
import { Link } from 'react-router-dom'

export default function Button({text, to, clickHandler}) {
  return (
    <div className="py-8 flex justify-center">
        <div className="inline-block">
            {
                (!clickHandler && to) && <Link to={to} className={styles['nz-button']}>
                    <span className="uppercase">{text}</span>
                </Link>
            }
            {
                (clickHandler && !to) && <button onClick={clickHandler} className={styles['nz-button']}>
                    <span className="uppercase">{text}</span>
                </button>
            }
        </div>
    </div>
  )
}
