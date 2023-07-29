import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';

const RegistrationForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (event)=>{
    
    if(formData.username.length < 5){
      alert("username must be atleast 5 characters");
    }else if(formData.password !== formData.confirmPassword){
      alert('Passwords do not match!');
    }else{
      event.preventDefault();
      axios.post("https://registerform-a8654-default-rtdb.firebaseio.com/register.json", formData)
      .then(() => {
        alert("User Registered Successfully");
        console.log(formData);
    })

      
    }
  }
  const {username, email, password, confirmPassword} = formData;
  const handleChange = (event)=>{
    setFormData({...formData, [event.target.name]: event.target.value});
  }
  return (
    <div className="container">
     
      <h2>Registration Form</h2>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <div className='input-group'>
          <input type="text" name="username" value={username} onChange={handleChange} placeholder='Username' required />
        </div>
        <div className='input-group'>
          <input type="email" name="email" value={email} onChange={handleChange} placeholder='Email' required />
        </div>
        <div className='input-group'>
          <input type="password" name="password" value={password} onChange={handleChange} placeholder='Passoword' required />
        </div>
        <div className='input-group'>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder='Confirm Password' required />
        </div>
        {password !== confirmPassword ? <p style={{color:"red"}}>Password do not match</p>:null}
        <button type="submit">Register</button>
      </form>
     
    </div>
  )
}

export default RegistrationForm
