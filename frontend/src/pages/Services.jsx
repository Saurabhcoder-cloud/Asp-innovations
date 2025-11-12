import React from 'react';
import { Code, Brain, Cloud, Cog, Database, Shield, Smartphone, Globe, Cpu, Workflow, MessageSquare, Settings } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks like React, Vue, and Angular. Responsive, fast, and SEO-optimized.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Best Practices', 'Progressive Web Apps']
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Seamless user experiences with robust backend integration.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Deployment']
    },
    {
      icon: <Brain size={48} />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced AI algorithms. From predictive analytics to natural language processing.',
      features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'Custom AI Models']
    },
    {
      icon: <MessageSquare size={48} />,
      title: 'Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that enhances customer engagement and automates support processes 24/7.',
      features: ['24/7 Availability', 'Multi-language Support', 'CRM Integration', 'Natural Conversations']
    },
    {
      icon: <Cloud size={48} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud. Migration, deployment, and optimization services.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Multi-Cloud Strategy']
    },
    {
      icon: <Cpu size={48} />,
      title: 'IoT Systems',
      description: 'Connect devices, collect data, and gain insights with our IoT solutions. From sensors to smart systems.',
      features: ['Device Integration', 'Real-time Monitoring', 'Data Analytics', 'Edge Computing']
    },
    {
      icon: <Cog size={48} />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation. RPA, workflow optimization, and business process automation.',
      features: ['RPA Implementation', 'Workflow Automation', 'Integration Services', 'Process Optimization']
    },
    {
      icon: <Workflow size={48} />,
      title: 'System Integration',
      description: 'Seamless integration of third-party services, APIs, and enterprise systems for unified operations.',
      features: ['API Development', 'Legacy Integration', 'Data Synchronization', 'Middleware Solutions']
    },
    {
      icon: <Database size={48} />,
      title: 'Database Management',
      description: 'Design, optimization, and management of databases. SQL, NoSQL, and cloud-native database solutions.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery']
    },
    {
      icon: <Shield size={48} />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions. Audits, monitoring, and threat prevention.',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Penetration Testing']
    },
    {
      icon: <Settings size={48} />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to align IT with business goals. Digital transformation and technology roadmaps.',
      features: ['Technology Strategy', 'Digital Transformation', 'Architecture Design', 'Tech Stack Selection']
    },
    {
      icon: <Globe size={48} />,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment with DevOps practices. Continuous integration and delivery pipelines.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging']
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero" data-testid="services-hero">
        <div className="container">
          <h1 className="fade-in-up" data-testid="services-title">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="services-lead fade-in-up" data-testid="services-lead">
            Comprehensive technology solutions tailored to your business needs. 
            From concept to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main section" data-testid="services-main-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card glass-card" data-testid={`service-detail-card-${index}`}>
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section" data-testid="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>How we deliver exceptional results</p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Discovery & Planning</h3>
              <p>We understand your business, goals, and technical requirements to create a tailored strategy.</p>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Design & Architecture</h3>
              <p>Detailed system design and architecture planning ensuring scalability and performance.</p>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Development & Testing</h3>
              <p>Agile development with continuous testing to ensure quality and reliability at every stage.</p>
            </div>
            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Deployment & Support</h3>
              <p>Seamless deployment and ongoing support to ensure your systems run smoothly 24/7.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;