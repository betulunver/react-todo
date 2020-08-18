import React from 'react'
import Input from './Input'
import Label from './Label'
import Button from './Button'

function TaskItem({isCompleted, taskName, dataId,}) {
    return (
        <div className="task-item">
            <Input className="task-status" type="checkbox"></Input>
            <Label>{taskName}</Label>
            <Button className="task-delete" data-id={1}/>
        </div>
    )
}

export default TaskItem
