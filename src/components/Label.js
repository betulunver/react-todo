import React from 'react'

function Label({children}) {
    return (
        <>
            <label className="task-name">{children}</label>
        </>
    )
}

export default Label
