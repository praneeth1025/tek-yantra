export const AddTask = (taskData)=>{
    return{
        type:'ADD_TASK',
        payload:taskData
    }
}

export const updateTask = (taskId , taskData) =>{
    console.log(taskData)
    return{
        type:'UPDATE_TASK',
        payload:taskData
    }
}

export const deleteTask = (taskId)=>{
    console.log(taskId)
    return{
        type:'DELETE_TASK',
        payload:taskId
    }
}