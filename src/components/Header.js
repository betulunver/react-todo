import React from 'react'
import Title from './Title'
import Tools from './Tools'
import TaskForm from './TaskForm'

function Header() {
    return (
        <div className="task-header">
            <Title>Todo List</Title>
            <Tools>tool</Tools>
            <TaskForm/>
        </div>
    )
}

export default Header
