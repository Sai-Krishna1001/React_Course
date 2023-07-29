import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [data, setData] = useState([]);
    const [activeData, setActiveData] = useState([]);
    useEffect(()=>{
        fetch("https://gorest.co.in/public/v2/users").then(
            response => response.json()
        ).then(users => setData(users));
    },[]);

    // GET request with query parameters
    const query = '?gender=male';
    useEffect(()=>{
        fetch("https://gorest.co.in/public/v2/users" + query)
        .then(response => response.json())
        .then(json => setActiveData(json));
    },[])
    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
                <h1>{data.length}</h1>
            </ul>
            <div>
                <ul>
                    {activeData.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FetchAPI
