import React from 'react'
import Button from './Button'

function TaskFilters() {
    return (
        <div className="task-filter">
            <Button className="task-filter is-active">All</Button>
            <Button className="task-filter" data-param="completed" data-value={false}>Active</Button>
            <Button className="task-filter" data-param="completed" data-value={true}>Completed</Button>
        </div>
    )
    }

export default TaskFilters
