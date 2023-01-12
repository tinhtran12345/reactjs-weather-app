import React from 'react'
import PropTypes from 'prop-types';
import styles from "./Error.module.css"


export const Error = () => {
    return (
        <div className={styles.Error}>
            There is no such location
        </div>
    )
}

Error.propTypes = {
    message:PropTypes.string
}
Error.defaultProps= {
    message: "An error occurred"
}