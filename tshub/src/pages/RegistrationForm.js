import React, { useState } from 'react';
import './styles.css';

const RegistrationForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(formData.name.length < 5){
      alert("username must be atleast 5 characters");
    }else if(formData.password !== formData.confirmPassword){
      alert('Passwords do not match!');
    }else{
      alert("User Registered Successfully");
      console.log(formData);
    }
  }
  const {username, email, password, confirmPassword} = formData;
  const handleChange = (event)=>{
    setFormData({...formData, [event.target.name]: event.target.value});
  }
  return (
    <div className="container">
     
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input type="text" name="name" value={username} onChange={handleChange} placeholder='Username' required />
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
