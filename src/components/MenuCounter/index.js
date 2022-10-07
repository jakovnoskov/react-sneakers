import React from 'react'
import styles from './MenuCounter.module.scss'

const MenuCounter = ({ count = 0 }) => {
    return (
    <span className={`${styles.counter} ${count > 0 ? styles.counterVisible : ''}`}>
        { Number(count) > 100 ? '+99' : Number(count) }
    </span> 
  )
}

export default MenuCounter
