import React, { useState } from 'react'

const OnSubmit = () => {
    const [data, setData] = useState(
        {
            username: '',
            password: '',
        }
    );
    const {username, password} = data;
    const handler = (e)=>{
        setData({...data, [e.target.name]:[e.target.value]});
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    Username:<input type='text' name="username" value={username} 
                    onChange={handler} placeholder="Username" /><br/>

                    Password:<input type='password' name="password" value={password} 
                    onChange={handler} placeholder="Password" /><br/>

                    <input type="submit" value="submit" />
                </form>
            </center>
            
        </div>
    )
}

export default OnSubmit
