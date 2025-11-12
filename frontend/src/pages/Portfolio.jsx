import React, { useState } from 'react';
import { ExternalLink, Github, Award, TrendingUp, Users, Zap } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Platform',
      category: 'ai',
      image: 'healthcare',
      description: 'Intelligent patient management system with predictive analytics and automated scheduling.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      stats: { users: '50K+', uptime: '99.9%', processing: '2M+' }
    },
    {
      id: 2,
      title: 'Smart IoT Energy Management',
      category: 'iot',
      image: 'energy',
      description: 'Real-time energy monitoring and optimization system for commercial buildings.',
      technologies: ['IoT', 'Node.js', 'MongoDB', 'Azure'],
      stats: { devices: '10K+', savings: '35%', response: '<100ms' }
    },
    {
      id: 3,
      title: 'E-Commerce Automation Suite',
      category: 'automation',
      image: 'ecommerce',
      description: 'Complete automation solution for inventory, orders, and customer support.',
      technologies: ['React', 'FastAPI', 'Redis', 'Docker'],
      stats: { orders: '100K+', automation: '85%', satisfaction: '4.8/5' }
    },
    {
      id: 4,
      title: 'Financial Analytics Dashboard',
      category: 'web',
      image: 'finance',
      description: 'Real-time financial data visualization and predictive analytics platform.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      stats: { transactions: '5M+', accuracy: '98%', latency: '<50ms' }
    },
    {
      id: 5,
      title: 'AI Chatbot for Customer Service',
      category: 'ai',
      image: 'chatbot',
      description: 'Multi-lingual intelligent chatbot with natural language understanding.',
      technologies: ['NLP', 'GPT-4', 'React', 'WebSocket'],
      stats: { conversations: '1M+', languages: '25', resolution: '78%' }
    },
    {
      id: 6,
      title: 'Cloud Migration & Optimization',
      category: 'cloud',
      image: 'cloud',
      description: 'Complete cloud migration with 40% cost reduction and improved performance.',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      stats: { savings: '40%', uptime: '99.99%', deployments: '500+' }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'iot', label: 'IoT' },
    { id: 'automation', label: 'Automation' },
    { id: 'web', label: 'Web Apps' },
    { id: 'cloud', label: 'Cloud' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getGradient = (index) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero" data-testid="portfolio-hero">
        <div className="container">
          <h1 className="fade-in-up" data-testid="portfolio-title">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="portfolio-lead fade-in-up" data-testid="portfolio-lead">
            Explore our successful projects and innovations that have transformed businesses worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-stats section" data-testid="portfolio-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Award size={36} />
              <h3>150+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <Users size={36} />
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <TrendingUp size={36} />
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat-item">
              <Zap size={36} />
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-main section" data-testid="portfolio-main-section">
        <div className="container">
          <div className="filter-buttons" data-testid="portfolio-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                data-testid={`filter-${filter.id}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card glass-card" data-testid={`project-card-${project.id}`}>
                <div 
                  className="project-image" 
                  style={{ background: getGradient(index) }}
                >
                  <div className="project-overlay">
                    <button className="project-icon-btn" data-testid={`project-view-${project.id}`}>
                      <ExternalLink size={24} />
                    </button>
                    <button className="project-icon-btn" data-testid={`project-github-${project.id}`}>
                      <Github size={24} />
                    </button>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-stats">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="project-stat">
                        <span className="stat-label">{key}:</span>
                        <span className="stat-value">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;