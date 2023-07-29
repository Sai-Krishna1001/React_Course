import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    if(auth){
        navigate('/dashboard/name');
        // window.location.pathname='/dashboard';
    }
    return (
        <div>
            <h1>Welcome to Home page</h1>
            <button onClick={()=> setAuth(true)}>Login</button>
        </div>
    )
}

export default Home
