import React from 'react'
import styles from '../index.css'
import cn from 'classnames'
function Button({children, className,...props}) {
    return (
        <>
          <button className={cn(styles.taskButton,className)} {...props}>{children}</button>  
        </>
    )
}

export default Button
