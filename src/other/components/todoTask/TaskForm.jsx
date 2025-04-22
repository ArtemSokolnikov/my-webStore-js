import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';

const TaskBar = styled.input`
width:auto;
padding:10px;
margin: 10px 0px;
border: 1px solid #ccc;
border-radius:12px;
margin-right: 10px;
`

const TaskForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const handleAddTask = () => {
    if (task.trim()) {
      addTodo(task);
      setTask('')
    }
  }
  return (
    <div>
      <TaskBar type="text" placeholder="add your task" value={task} onChange={(e) => setTask(e.target.value)} />
      <Button variant='contained' onClick={handleAddTask}>Add task</Button>
    </div>
  )
}

export default TaskForm
