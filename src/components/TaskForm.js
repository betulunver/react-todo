import React from 'react'
import Button from './Button'
import Input from './Input'

function TaskForm() {
    return (
        <form className="task-form">
            <Input className="taskInput" placeholder="Add a new task..." autoFocus={true} />
            <Button className="taskButton">Add Task</Button>
        </form>
    )
}

export default TaskForm
