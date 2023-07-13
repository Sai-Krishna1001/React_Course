import React, {useState, useEffect} from 'react'

const UseEffect = () => {
    const [mousePosition, setMousePosition] = useState({x:0, y:0});
    useEffect(() =>{
        const handleMouseMove = (event) => {
            setMousePosition({x: event.clientX, y: event.clientY});
        };
        document.addEventListener('mousemove', handleMouseMove);
        return ()=>{
            document.removeEventListener('mousemove', handleMouseMove);
        }
    },[]);
    return (
        <div>
            <p>Mouse position: {mousePosition.x}, {mousePosition.y}</p>
        </div>
    )
}

export default UseEffect
