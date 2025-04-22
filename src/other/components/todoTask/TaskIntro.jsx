import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import styled from 'styled-components';

const Container = styled.div`
max-width: 500px;
margin: 20px auto;
padding: 20px;
box-shadow: 0px 4px 12px;
border-radius:12px;

@media(max-width: 600px){
  padding: 15px;
  max-width: 90%;
}
`
const SearchBar = styled.input`
width:auto;
padding:10px;
margin: 10px 0px;
border: 1px solid #ccc;
border-radius:12px;
`

const TaskIntro = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, isCompleted: false }]);
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchQuery.toLowerCase()))

  const removeTask = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const completedTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  return (
    <div>
      <Container>
        <SearchBar type="text" placeholder='Search tasks' value={searchQuery} onChange={handleSearch} className='search-bar' />
        <TaskForm addTodo={addTodo} />
        <TaskList todos={filteredTodos} removeTask={removeTask} completedTodo={completedTodo} />
      </Container>
    </div>
  )
}

export default TaskIntro
