import React from 'react'

const Test = () => {
    const items = [20, 30, 40, 80, 40,];
    const itemsList = items.map((item,index) => {
        return <li key={index}>{item}</li>
    });
    return (
        <div>
            <ul>{itemsList}</ul>
        </div>
    )
}

export default Test
