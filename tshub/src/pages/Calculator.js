import React, { useState } from 'react'

const Calculator = () => {
    const[expression, setExpression] = useState("");
    const [result, setResult] = useState(0);
    const handler = e => {
        setExpression(e.target.value);
    }

    return (
        <div>
        <center>
            <input type="text" value={expression} name="input" onChange={handler}/> <br />
            
        </center>
        </div>
    )
}

export default Calculator
