// TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTask, updateTask } from '../redux/action';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function EditForm() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const {taskId} = useParams()
  
    const taskDetails = location?.state?.taskDetails

    const [title, setTitle] = useState(taskDetails?.title);
    const [description, setDescription] = useState(taskDetails?.description);
    const [dueDate, setDueDate] = useState(taskDetails?.dueDate);


  console.log(taskDetails)

console.log(taskId)

  const handleFormData = (e) => {
    e.preventDefault();
    
    const formData = {
     id:parseInt(taskId),
      title,
      description,
      dueDate,
    };

    dispatch(updateTask(taskId, formData));
    navigate('/')

    setTitle(''); 
    setDescription('');
    setDueDate('');

  }


  return (
    <div>
      <form onSubmit={handleFormData}>
        <input
          value={title}
          type='text'
          placeholder='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          type='text'
          placeholder='description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={dueDate}
          type='date'
          placeholder='Due Date'
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}

export default EditForm;
