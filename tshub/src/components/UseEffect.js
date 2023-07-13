import React, {useState, useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("clicked",[]);
    })
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default UseEffect
