// Contact.js

import { useState } from 'react'; 
import { useForm } from 'react-hook-form';

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  }

  return (
    <section id="contact">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input 
          {...register("name", {
            required: "Name is required"
          })} 
        />

        {errors.name && <p>{errors.name.message}</p>}

        <input 
          {...register("email", {
            required: "Email is required"
          })}
        />
        
        <textarea
          {...register("message", {
            required: "Message is required"
          })}
        ></textarea>

        <button type="submit">Send</button>
        
      </form>

      {submitted && <p>Thank you! Your message has been sent.</p>}

    </section>
  );

}