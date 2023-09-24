import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteTask } from '../redux/action'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Button from 'react-bootstrap/Button';

function TaskDetails() {

    const {taskId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const TaskDetails = useSelector(state=>state?.tasks?.taskList)

    const task = TaskDetails?.find((item)=>item.id === parseInt(taskId))

    const handleEditDetails = ({taskDetails})=>{
        
        console.log(taskDetails)
        navigate(`/editForm/${taskDetails.id}` , {state:{taskDetails:taskDetails}})
        
    }

    const handleDeleteTask = (taskId)=>{
        dispatch(deleteTask(taskId))
        navigate('/')
    }
  
  return (

    <div>
        <Button onClick={()=>navigate(-1)} style={{margin:'10px'}}>back</Button>
       
        <div className='task-details-container'>
        <h1 style={{textAlign:'center'}}>task Details</h1>
        {task && (
           
        <div className='task-detail'>
        <div className='task-details-data'>
            <div className='d-flex ' style={{alignItems:'center' , justifyContent:'center'}}>
            <h5>{task.title}</h5>
        
            </div>
        <div>
        <h6>{task.dueDate}</h6>
        <button onClick={()=>handleEditDetails({taskDetails:task})}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg></button>
        <button onClick={()=>handleDeleteTask(task.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
      </svg></button>
</div>
        </div>
        <p>{task.description}</p>

       
            
           
        </div>
        )}
        </div>

        
    </div>    
)}

export default TaskDetails