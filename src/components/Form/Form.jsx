// import styles from "./Form.module.css"
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './Form.module.css'

export const Form = ({submitSearch}) => {
    const [location, setLocation] = useState("");
    const onSubmit = (e)=>{
        e.preventDefault();
        // console.log(location)
        if(!location||location==='') return ;
        submitSearch(location);
        
        
    }
    return (
        <form onSubmit={onSubmit} className = {styles.form}>
            <input 
            aria-label='location'
            className={styles.input}
            placeholder='Search for location'
            required
            value={location}
            onChange = {e=>setLocation(e.target.value)}
            type="text" />
            <button className={styles.button} type='submit' onClick={onSubmit}>Search</button>
        </form>
    )
}

Form.propTypes = {
    submitSearch:PropTypes.func.isRequired
}