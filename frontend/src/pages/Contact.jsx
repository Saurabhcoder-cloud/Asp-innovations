import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import './Contact.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSuccess(true);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'info@aspinnovation.tech',
      link: 'mailto:info@aspinnovation.tech'
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      value: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: <MapPin size={28} />,
      title: 'Location',
      value: 'Silicon Valley, CA 94025',
      link: '#'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" data-testid="contact-hero">
        <div className="container">
          <h1 className="fade-in-up" data-testid="contact-title">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="contact-lead fade-in-up" data-testid="contact-lead">
            Have a project in mind? Let's discuss how we can help transform your business.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section section" data-testid="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link} 
                className="contact-info-card glass-card"
                data-testid={`contact-info-${index}`}
              >
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-main section" data-testid="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {isSuccess && (
                <div className="success-message" data-testid="success-message">
                  <CheckCircle size={24} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" data-testid="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    data-testid="input-name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    data-testid="input-email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (234) 567-890"
                    data-testid="input-phone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                    data-testid="input-message"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary submit-btn"
                  disabled={isSubmitting}
                  data-testid="submit-button"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Map & WhatsApp */}
            <div className="contact-sidebar">
              <div className="map-container glass-card">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  data-testid="map-iframe"
                ></iframe>
              </div>

              <div className="whatsapp-card glass-card" data-testid="whatsapp-card">
                <MessageCircle size={48} className="whatsapp-icon" />
                <h3>Quick Chat</h3>
                <p>Need immediate assistance? Chat with us on WhatsApp.</p>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                  data-testid="whatsapp-button"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;