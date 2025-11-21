import React, { useState } from 'react';
import { trackEvent } from '../utils/analytics';
import '../styles/ContactForm.css';

const ContactForm = ({ formData, handleChange, handleSubmit, formStatus }) => {
  const [localFormData, setLocalFormData] = useState(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData(prev => ({
      ...prev,
      [name]: value
    }));
    handleChange(e);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Track form submission event
    trackEvent('Contact Form', 'Submit', 'Contact Form Submission');
    
    // Call parent handleSubmit
    await handleSubmit(e);
  };

  return (
    <form onSubmit={handleFormSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={localFormData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={localFormData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="subject">Subject *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={localFormData.subject}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={localFormData.message}
          onChange={handleInputChange}
          required
          placeholder="Tell me about your project or just say hello..."
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
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="form-message error">
          ❌ Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  );
};

export default ContactForm;