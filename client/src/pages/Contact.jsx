/* 
 * File: Contact.jsx
 * Description: Renders direct contact details and captures user feedback before redirecting home.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Contact.css';

export default function Contact() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handles form submit event and redirects back to Home page
  const onSubmit = (data) => {
    console.log("Captured Form Data:", data);
    navigate('/');
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      {/* Contact Info Banner */}
      <div className="contact-info-panel">
        Email: rmorada2@mycentennialcollege.ca | Phone: (416) 826-5127
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            {...register("firstName", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            {...register("lastName", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            id="contactNumber"
            type="tel"
            {...register("contactNumber", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            id="emailAddress"
            type="email"
            {...register("emailAddress", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="5"
            {...register("message", { required: true })}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}