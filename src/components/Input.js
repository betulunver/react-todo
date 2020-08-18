import React from 'react'
import styles from '../index.css'
import cn from 'classnames'
function Input({className, ...props}) {
    return (
        <input className={cn(styles.taskInput,className)} {...props}></input>

    )
}

export default Input
