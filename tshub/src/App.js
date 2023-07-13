import React from 'react'
import Counter from './components/Counter';
import OnClick from './components/OnClick';
import Toggle from './components/Toggle';
import TodoList from './components/TodoList';
import DynamicForm from './components/DynamicForm';
import UseEffect from './components/UseEffect';

export default function App() {
  
  return (
    <div>
      <Counter />
      <OnClick /> 
      <ItemList />
      <Toggle />
      <TodoList />
      <DynamicForm /> 
      <UseEffect />
    </div>
  )
}

function ItemList(){
  const items = ['Apple', 'Banana', 'Orange'];
  return(
    <ul>
      {
        items.map((item,index)=>(
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  )
}


