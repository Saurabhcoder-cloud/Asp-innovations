import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-testid="main-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <h3 className="footer-title">Asp Global Solutions</h3>
            <p className="footer-desc">
              Empowering tomorrow's technology today. We deliver cutting-edge solutions in AI, IoT, automation, and digital transformation.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-testid="social-facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-testid="social-twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="social-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-testid="social-instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" data-testid="footer-link-home">Home</Link></li>
              <li><Link to="/about" data-testid="footer-link-about">About Us</Link></li>
              <li><Link to="/services" data-testid="footer-link-services">Services</Link></li>
              <li><Link to="/portfolio" data-testid="footer-link-portfolio">Portfolio</Link></li>
              <li><Link to="/contact" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#web-dev">Web Development</a></li>
              <li><a href="#ai-solutions">AI Solutions</a></li>
              <li><a href="#cloud-iot">Cloud & IoT</a></li>
              <li><a href="#automation">Automation</a></li>
              <li><a href="#consulting">IT Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={18} />
                <a href="mailto:info@aspinnovation.tech">info@aspinnovation.tech</a>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright" data-testid="copyright-text">
            © {currentYear} Asp Innovation. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;