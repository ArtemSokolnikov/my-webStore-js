import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskIntro from '../components/TaskIntro';
import { multiply, removeTask } from './utils/TaskUtils';

const addTask = (taskName) => {
  const input = screen.getByPlaceholderText(/add your task/i);
  const addButton = screen.getByRole('button', { name: /add task/i });

  fireEvent.change(input, { target: { value: taskName } });
  fireEvent.click(addButton);
};

describe('TaskIntro Component', () => {
  test('add new task', () => {
    render(<TaskIntro />);
    addTask('New Task');
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('mark task as completed', () => {
    render(<TaskIntro />);
    addTask('Complete Task');
    const completeButton = screen.getByRole('button', { name: /completed/i });
    fireEvent.click(completeButton);
    expect(screen.getByText('Complete Task')).toHaveStyle('text-decoration: line-through');
  });

  test('remove task', () => {
    render(<TaskIntro />);
    addTask('Task to Remove');
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Task to Remove')).not.toBeInTheDocument();
  });

  test('measure addTask execution time', () => {
    render(<TaskIntro />);
    const startTime = performance.now();
    for (let i = 0; i < 20; i++) {
      addTask(`Task ${i}`)
    }
    const endTime = performance.now();
    const perfomance = (endTime - startTime).toFixed(2);
    console.log(`Execution time: ${(endTime - startTime).toFixed(2)} ms`);
    expect(+perfomance).toBeLessThanOrEqual(8000);

  });
});


describe('Jest tests', () => {
  test('removed task via Jest', () => {
    const initialTodos = [
      { id: 1, text: 'Task 1', isCompleted: false },
      { id: 2, text: 'Task 2', isCompleted: false },
    ];
    const result = removeTask(initialTodos, 2);
    expect(result).toEqual([{ id: 1, text: 'Task 1', isCompleted: false }])
  });
  test('multiply', () => {
    expect(multiply(4, 11)).toEqual(44);
  })
})

describe('training test', () => {
  test('multiply', () => {
    expect(multiply(4, 11)).toEqual(44);
  })

})

