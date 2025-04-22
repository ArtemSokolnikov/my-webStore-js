import { Button } from '@mui/material'
import React from 'react'

const TaskList = ({ todos, removeTask, completedTodo }) => {

  const handleDelete = (index) => {
    removeTask(index)

  }
  return (
    <div>
      TodoList
      {todos.map((todo) => (
        <div key={todo.id}>
          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {todo.text}
          </span>
          <Button  variant='contained' onClick={() => handleDelete(todo.id)}>Delete</Button>
          <Button variant='contained' onClick={() => completedTodo(todo.id)}>Completed</Button>
        </div>
      ))}

    </div>
  )
}

export default TaskList
