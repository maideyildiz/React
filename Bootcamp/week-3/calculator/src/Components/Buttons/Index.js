import React from 'react'
import styles from './style.module.css'

function Buttons({item,color,buttonClick}) {
    return (
        <div 
        onClick={()=>buttonClick(item)}
         className={styles.calItem} style={{backgroundColor:color}}>
            {item}</div>
    )
}
export default Buttons
