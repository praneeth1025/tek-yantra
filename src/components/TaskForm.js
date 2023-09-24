// TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTask } from '../redux/action';
import './Form.css'


function TaskForm() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [taskIdCounter, setTaskIdCounter] = useState(1);
  const dispatch = useDispatch();

  const handleFormData = (e) => {
    e.preventDefault();
    
    const taskId = taskIdCounter;

    const formData = {
      id:taskId,
      title,
      description,
      dueDate,
    };

    dispatch(AddTask(formData))


    setTaskIdCounter(taskIdCounter + 1);

    setTitle(''); 
    setDescription('');
    setDueDate('');
   

  }

  return (
    <div className='modal-form'>
    
                <form onSubmit={handleFormData}>
                <input
                value={title}
                type='text'
                placeholder='title'
                onChange={(e) => setTitle(e.target.value)}
                required
                />
                <input
                value={description}
                type='text'
                placeholder='description'
                onChange={(e) => setDescription(e.target.value)}
                required
                />
                <input
                value={dueDate}
                type='date'
                placeholder='Due Date'
                onChange={(e) => setDueDate(e.target.value)}
                required
                />
                <button type='submit'>Add Task</button>
                </form>
                
    </div>
  );
}

export default TaskForm;
