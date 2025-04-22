export const addTodo = (todos, text) => {
  return [...todos, { id: Date.now(), text, isCompleted: false }];
};
export const removeTask = (todos, id) => {
  return todos.filter((todo) => todo.id !== id);
};

export const multiply = (a, b) => {
  return a * b;
};
