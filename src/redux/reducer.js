const intiState = {
    taskList : []
}

export const taskReducer = (state = intiState , action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return{
                ...state,
                taskList:[...state.taskList , action.payload]
            }

        case 'UPDATE_TASK':
            console.log(action.payload)
            console.log(state.taskList)
            const updatedIndex = state.taskList.findIndex((task)=>task.id === action.payload.id)

            if (updatedIndex !== -1) {
                // Create a new taskList with the updated task
                const updatedTaskList = [...state.taskList];
                updatedTaskList[updatedIndex] = action.payload;
        
                return {
                  ...state,
                  taskList: updatedTaskList
                };
            }
            return state

        case 'DELETE_TASK':
            const taskId = action.payload;
            console.log(taskId)
            const filteredTasks = state.taskList.filter((task)=>task.id !== taskId);
            return{
                ...state,
                taskList:filteredTasks
            }

        default:
            return state
    }
}