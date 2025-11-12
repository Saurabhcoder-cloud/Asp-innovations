import React from 'react';
import { Target, Eye, Lightbulb, Users, Trophy, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Lightbulb size={36} />,
      title: 'Innovation First',
      description: 'We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Users size={36} />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service.'
    },
    {
      icon: <Trophy size={36} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer support.'
    },
    {
      icon: <Rocket size={36} />,
      title: 'Agility',
      description: 'We adapt quickly to changing needs and deliver solutions with speed and precision.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" data-testid="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="fade-in-up" data-testid="about-title">About <span className="text-gradient">Asp Global Solutions</span></h1>
            <p className="about-lead fade-in-up" data-testid="about-lead">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative AI, automation, and cloud solutions. Since our inception, we've 
              been at the forefront of digital transformation, helping organizations worldwide 
              unlock their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section" data-testid="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card glass-card" data-testid="mission-card">
              <div className="mv-icon">
                <Target size={48} />
              </div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses with transformative technology solutions that drive growth, 
                efficiency, and innovation. We strive to make advanced technology accessible and 
                practical for organizations of all sizes.
              </p>
            </div>

            <div className="mv-card glass-card" data-testid="vision-card">
              <div className="mv-icon">
                <Eye size={48} />
              </div>
              <h2>Our Vision</h2>
              <p>
                To be the global leader in next-generation technology solutions, recognized for 
                our innovation, reliability, and unwavering commitment to client success. We 
                envision a future where technology seamlessly integrates with business strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story section" data-testid="company-story-section">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <div className="story-text">
              <p>
                Founded by a team of passionate technologists and innovators, Asp Global Solutions 
                was born from a simple yet powerful idea: technology should be an enabler, not a 
                barrier. We recognized that many businesses struggled to leverage emerging 
                technologies like AI, cloud computing, and automation effectively.
              </p>
              <p>
                What started as a small consultancy has grown into a full-service technology 
                partner, serving clients across industries from startups to Fortune 500 companies. 
                Our journey has been marked by continuous learning, adaptation, and an unwavering 
                commitment to excellence.
              </p>
              <p>
                Today, we're proud to be trusted advisors and solution providers to hundreds of 
                organizations worldwide. Our team combines deep technical expertise with business 
                acumen, ensuring that every solution we deliver creates tangible value and drives 
                measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section" data-testid="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card glass-card" data-testid={`value-card-${index}`}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section" data-testid="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Asp Global Solutions?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-number">01</div>
              <h3>Proven Expertise</h3>
              <p>Years of experience delivering complex technology solutions across diverse industries.</p>
            </div>
            <div className="why-item">
              <div className="why-number">02</div>
              <h3>Cutting-Edge Technology</h3>
              <p>We stay ahead of the curve, leveraging the latest innovations in AI, cloud, and automation.</p>
            </div>
            <div className="why-item">
              <div className="why-number">03</div>
              <h3>End-to-End Solutions</h3>
              <p>From strategy to implementation and support, we're with you every step of the way.</p>
            </div>
            <div className="why-item">
              <div className="why-number">04</div>
              <h3>Dedicated Support</h3>
              <p>24/7 support ensures your systems are always running at peak performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;