import styles from "./Page.module.css"
import React from 'react'
import { Header } from "../Header/Header"
import { Fragment } from "react"
import { Form } from "../Form/Form"
import { useForecast } from "../Hooks/Hook"
import { Error } from "../Error/Error"
import { Loading } from "../Loading/Loading"
import { Forecast } from "../Forecast/Forecast"
export const Page = () => {
    const {isError,
        isLoading,
        forecast,
        submitRequest } = useForecast();  
    const onSubmit = (value)=>{
        submitRequest(value)
    }  
    return (
        <Fragment>
            <Header/>
            { !forecast && (

                    <div className={styles.box}>
                        {isLoading===false &&<Form submitSearch={onSubmit}/>}
                        {isError===true && <Error/>}
                        {isLoading===true && <Loading/>}
                    </div>
                )
            }
            { forecast && (
                <div className={styles.box}>
                    {<Form submitSearch={onSubmit}/>}
                    {<Forecast data = {forecast}/>}
                </div>
            )
            }
        </Fragment>
    )
}
