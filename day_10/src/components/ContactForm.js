import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = ({ formData, handleChange, handleSubmit, formStatus }) => {
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="submit-btn"
        disabled={formStatus === 'submitting'}
      >
        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
      
      {formStatus === 'success' && (
        <div className="form-message success">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="form-message error">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;