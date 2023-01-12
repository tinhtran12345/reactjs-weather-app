import styles from  "./Header.module.css"

import React from 'react'

export const Header = () => {
    return (

        <h1 className={styles.headingForecast}>
            <span className={styles.textLight}>Weather</span> Forecast
        </h1>
    )
}
