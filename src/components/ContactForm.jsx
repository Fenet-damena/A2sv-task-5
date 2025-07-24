import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    alert('Message sent successfully!');
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email format'
              }
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          <p className="error">{errors.message?.message}</p>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
