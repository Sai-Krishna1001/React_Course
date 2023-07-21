import React, { useState, useCallback } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = useCallback(() => {
    if (todoText.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text: todoText }]);
      setTodoText('');
    }
  }, [todoText]);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  },[])

  const handleInputChange = useCallback((event) => {
    setTodoText(event.target.value);
  }, []);

  return (
    <div>
      <input type="text" value={todoText} onChange={handleInputChange} placeholder="Enter todo" />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList