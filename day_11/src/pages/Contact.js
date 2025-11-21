import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { trackSocialLink } from '../utils/analytics';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Replace with your actual form endpoint
      const response = await fetch(process.env.REACT_APP_FORM_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus('success');
        
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleSocialClick = (platform) => {
    trackSocialLink(platform);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>I'd love to hear about your project and how I can help</p>
      </section>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            Whether you have a project in mind, want to collaborate, or just 
            want to say hello, feel free to reach out!
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Your City, Country</p>
            </div>
            <div className="contact-item">
              <h3>Connect</h3>
              <div className="social-links">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('GitHub')}
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('LinkedIn')}
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  onClick={() => handleSocialClick('Email')}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <ContactForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            formStatus={formStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;