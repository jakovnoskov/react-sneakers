//import React from 'react'
import styles from './GlobalLoader.module.scss'

const GlobalLoader = () => {

    return (
    <div className={styles.globalOverlay}>
        <div className={styles.loadingSpinner}></div>
    </div>
    )

}

export default GlobalLoader