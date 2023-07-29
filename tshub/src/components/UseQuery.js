import React from 'react'
import {useQuery} from 'react-query';

const UseQuery = () => {
    const {data, isLoading , error} = useQuery('users', async ()=>{
        const response = await fetch('https://gorest.co.in/public/v2/users');
        return response.json();
    });
    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error!</p>
    }
    return (
        <div>
            {data.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}

export default UseQuery;
