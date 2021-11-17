import React from 'react'
import styles from './style.module.css'

function Inputs({pending,result}) {
    return (
        <>
        <div className={styles.screen}>
            <div className={styles.result}>
                <h1>{result}
                    </h1>
                </div>
            <div className={styles.pending}>
                <h3>{pending}</h3>
                </div>
        </div>
        </>
    )
}

export default Inputs
