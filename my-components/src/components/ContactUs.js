import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_62z6n4l', 'template_00klkvc', e.target, 'Hx4Gm0zpI--VT-o_F')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (

    <div>
        <center>
        <form ref={form} onSubmit={sendEmail} >
            <input type="text" name="user_name"  placeholder='username'/> <br />
            <input type="email" name="user_email" placeholder='email'/> <br />
            <textarea name="message" placeholder='message' /> <br />
            <input type="submit" value="Send" /> <br />
        </form>
        </center>
    </div>
  );
};