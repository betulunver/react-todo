import React from 'react'
import Counter from './Counter'
import TaskFilters from './TaskFilters'

function Tools() {
    return (
        <div className="task-tools">
            <Counter/>
            <TaskFilters/>
        </div>
    )
}

export default Tools
