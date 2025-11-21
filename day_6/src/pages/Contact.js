import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
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
      // Simulate API call - replace with actual backend integration later
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus('success');
      
      // Reset success message after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
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
                <a href="#" aria-label="GitHub">GitHub</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Twitter">Twitter</a>
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