import React from 'react'
import Header from './Header'
import TaskList from './TaskList'

function Content() {
    return (
        <div className="app">
            <Header/>
            <TaskList/>
        </div>
    )
}

export default Content
