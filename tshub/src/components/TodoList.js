import React, {useState} from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) =>{
        setInputValue(event.target.value);
    };

    const addTodo = ()=>{
        if(inputValue.trim() !== ''){
            setTodos([...todos, inputValue]);
            setInputValue('');
            alert("Item added to the list")
        }
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
