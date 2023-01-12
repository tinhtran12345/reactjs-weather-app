import React from 'react'
import styles from './Forecast.module.css'
export const Forecast = (props) => {
    const data = props.data;
    console.log(data)
    return (
        <div className={styles.forecast}>
            <h1>{data.name}</h1>
            <div className={styles.card}>
                <p>Weather: {data.weather[0].main}</p>
                <p>Temperature: {data.main.temp.toFixed()-273} ° C</p>
                <p>Feels Like: {data.main.feels_like.toFixed()-273}° C</p>
            </div>

        </div>
    )
}
