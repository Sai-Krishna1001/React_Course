import React, {useEffect, useState} from 'react'

const Test = () => {
    const[age, setAge] = useState(0);
    const handleClick = () => setAge(age+1);
    useEffect(()=>{
        document.title = "title " + age + ' times updated'
    })
    
    return (
        <div>
            <h1>Test case</h1>
            <button onClick={handleClick}>Update Title</button>
            
        </div>
    )
}

export default Test
