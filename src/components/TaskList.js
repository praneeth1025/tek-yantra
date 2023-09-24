import React, { useState } from 'react'
import TaskForm from './TaskForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './TaskList.css'
// import { Button } from 'bootstrap'

function TaskList() {
    const taskListData = useSelector(state=>state.tasks.taskList)



    const navigate = useNavigate()
    console.log(taskListData)

    const handleViewButton = (taskId)=>{
        console.log(taskId)
        navigate(`/tasks/${taskId}`)
    }


  return (
    <div className='taskList-container'>
    
        <h1>TaskList</h1>
        <div className='row p-4 mt-5'>
        
        
        <div className='col-md-4'>
        <TaskForm /> 
        </div>
        <div className='col-md-8'>
        {taskListData && taskListData.length > 0 ? (
            taskListData.map((item) => (
                <div key={item.id} className='task-data mt-4' >
                    <p>{item.title}</p>
                    <button onClick={() => handleViewButton(item.id)}>View Details</button>
                </div>
            ))
        ) : (
            <p className='mt-4'>No tasks found</p>
        )} 
        </div>
        </div>
          
    </div>
  )
}

export default TaskList