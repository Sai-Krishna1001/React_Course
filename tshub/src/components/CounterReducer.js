import React, { useReducer } from 'react'

const Counter= (state, action) => {
    switch(action.type){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return 0;
        default:
            return state;
    }
}
const CounterReducer = () => {
    const [count, dispatch] = useReducer(Counter, 0);
    const increment = ()=>{
        dispatch({
            type:'increment'
        })
    }
    const decrement = ()=>{
        dispatch({
            type:'decrement'
        })
    }
    const reset = ()=>{
        dispatch({
            type:'reset'
        })
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterReducer
