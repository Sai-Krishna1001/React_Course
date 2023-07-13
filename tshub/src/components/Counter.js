import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = ()=>{
      setCount(count+1);
    }
    const decrement = ()=>{
      setCount(count-1);
    }
  return (
    <div>
      <h1>Count = {count}</h1>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
