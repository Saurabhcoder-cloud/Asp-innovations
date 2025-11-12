import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Cloud, Cog, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import './Home.css';

const Home = () => {
  const heroTextRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observer.observe(el));

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.floating-card');
      
      parallaxElements.forEach((el, index) => {
        const speed = 0.3 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      icon: <Zap size={40} />,
      title: 'Web & App Development',
      description: 'Custom web and mobile applications built with cutting-edge technologies for seamless user experiences.'
    },
    {
      icon: <Brain size={40} />,
      title: 'AI Solutions & Chatbots',
      description: 'Intelligent automation powered by machine learning and natural language processing to transform your business.'
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud & IoT Systems',
      description: 'Scalable cloud infrastructure and IoT integrations that connect your devices and data seamlessly.'
    },
    {
      icon: <Cog size={40} />,
      title: 'Automation & Integration',
      description: 'Streamline operations with intelligent process automation and seamless third-party integrations.'
    }
  ];

  const stats = [
    { icon: <Users size={32} />, value: '500+', label: 'Happy Clients' },
    { icon: <Award size={32} />, value: '1000+', label: 'Projects Completed' },
    { icon: <TrendingUp size={32} />, value: '98%', label: 'Success Rate' },
    { icon: <CheckCircle size={32} />, value: '24/7', label: 'Support' }
  ];

  return (
    <div className="home-page">
      <div className="animated-bg"></div>
      
      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-content">
          <div className="hero-badge fade-in-element" data-testid="hero-badge">
            <Zap size={16} />
            <span>Innovation Meets Excellence</span>
          </div>
          
          <h1 className="hero-title fade-in-element" ref={heroTextRef} data-testid="hero-title">
            Empowering Tomorrow's
            <span className="text-gradient"> Tech Today</span>
          </h1>
          
          <p className="hero-subtitle fade-in-element" data-testid="hero-subtitle">
            Transform your business with cutting-edge AI, automation, and cloud solutions. 
            We deliver innovative technology that drives real results.
          </p>
          
          <div className="hero-cta fade-in-element">
            <Link to="/contact">
              <button className="btn-primary" data-testid="hero-cta-primary">
                Get Started <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/services">
              <button className="btn-secondary" data-testid="hero-cta-secondary">
                Explore Services
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-visual fade-in-element">
          <div className="floating-card card-1">
            <Brain size={48} />
            <span>AI Powered</span>
          </div>
          <div className="floating-card card-2">
            <Cloud size={48} />
            <span>Cloud Native</span>
          </div>
          <div className="floating-card card-3">
            <Zap size={48} />
            <span>Lightning Fast</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" data-testid="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card fade-in-element" data-testid={`stat-card-${index}`}>
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview section" data-testid="services-section">
        <div className="container">
          <div className="section-header fade-in-element">
            <h2>Our Services</h2>
            <p>Comprehensive solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card glass-card fade-in-element" data-testid={`service-card-${index}`}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link" data-testid={`service-link-${index}`}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" data-testid="cta-section">
        <div className="container">
          <div className="cta-content fade-in-element">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's build something extraordinary together. Get in touch with our team today.</p>
            <Link to="/contact">
              <button className="btn-primary" data-testid="cta-contact-button">
                Contact Us Now <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;