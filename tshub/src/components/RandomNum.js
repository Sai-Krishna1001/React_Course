import React, { useEffect, useState } from 'react'

const RandomNum = () => {
    const [randomNum, setRandomNum] = useState(0);
    const [effectLogs, setEffectLogs] = useState([]);

    useEffect(()=>{
        setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
    },[randomNum]);

    const handleRandom = ()=>{
        return setRandomNum((Math.random().toFixed(2))*100);
    }

    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={handleRandom}>Generate Random Number</button>
            <div>
                {effectLogs.map((effect, index)=>(
                    <div key={index}>{'😂'.repeat(index) + effect}</div>
                ))}
            </div>
        </div>
    )
}

export default RandomNum
