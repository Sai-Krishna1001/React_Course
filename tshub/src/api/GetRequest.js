import React, { useState, useEffect } from 'react'
import axios from 'axios';
const GetRequest = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await axios.get('https://gorest.co.in/public/v2/users');
        setData(response.data);
    }
    
    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
        <ul>
            {data.map((item)=>(
                <li key={item.id}>{item.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default GetRequest
