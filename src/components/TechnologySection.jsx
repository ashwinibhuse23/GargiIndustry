import React from "react";
import "./TechnologySection.css";
import techThumb from "../assets/img/normal/experience2-thumb.png"; // Tech dashboard preview

const capabilities = [
  {
    title: "3D Structural Modelling",
    desc: "Intelligent virtual design and detailing solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  },
  {
    title: "Connection Design",
    desc: "Rigorous analytical testing for joints and nodes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    )
  },
  {
    title: "Material Take-Off",
    desc: "Precise computations to determine necessary building materials.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    )
  },
  {
    title: "Bill of Quantities",
    desc: "Thorough pricing breakdowns to optimize client budgets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    )
  },
  {
    title: "Structural Analysis",
    desc: "Robust stress calculations for optimal safety standards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    )
  },
  {
    title: "Clash Detection",
    desc: "Interference checks to solve errors before fabrication.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="22" y1="12" x2="18" y2="12"/>
        <line x1="6" y1="12" x2="2" y2="12"/>
        <line x1="12" y1="6" x2="12" y2="2"/>
        <line x1="12" y1="22" x2="12" y2="18"/>
      </svg>
    )
  },
  {
    title: "Fabrication Drawings",
    desc: "Detail-oriented plans for streamlined structural fabrication.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    )
  },
  {
    title: "Erection Drawings",
    desc: "Clear visual guidelines for safe field installations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    )
  },
  {
    title: "Quantity Optimization",
    desc: "Value engineering to reduce steel consumption cost.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    )
  },
  {
    title: "Design Coordination",
    desc: "Unified design platforms to align all stakeholders.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  }
];

export default function TechnologySection() {
  return (
    <section className="tech-section">
      <div className="tech-container">
        
        {/* Modern Aesthetic Layout Header */}
        <div className="tech-modern-header">
          <div className="tech-tag-row">
            <span className="tech-tag-line"></span>
            <span className="eng-tag">TECHNOLOGY driven workflows</span>
            <span className="tech-tag-line"></span>
          </div>
          
          <h2 className="tech-modern-title">
            Engineering Powered by <span className="highlight-text">Digital Innovation</span>
          </h2>
          
          <p className="tech-modern-subtitle">
            Modern engineering demands precision, coordination, and speed. Our technology-driven workflows enable us to deliver highly accurate, fabrication-ready engineering solutions while reducing rework and improving project efficiency.
          </p>
        </div>

        {/* Dynamic Split Row: Left side capability listing cards, Right side model card */}
        <div className="tech-interactive-grid">
          
          {/* Left Cards Block */}
          <div className="tech-cards-column">
            {capabilities.slice(0, 5).map((cap, idx) => (
              <div className="tech-row-card" key={idx}>
                <div className="tech-card-icon-wrap">
                  {cap.icon}
                </div>
                <div className="tech-card-text">
                  <h3 className="tech-card-title">{cap.title}</h3>
                  <p className="tech-card-desc">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Graphic Frame with Overlay Info Tags */}
          <div className="tech-center-interactive-col">
            <div className="tech-model-showcase">
              <img src={techThumb} alt="Model Platform Showcase" className="tech-showcase-image" />
              <div className="tech-overlay-blur-panel">
                <span className="tech-stat-label">PLATFORM MODELING</span>
                <h4 className="tech-stat-value">Real-Time Sync</h4>
              </div>
            </div>
          </div>

          {/* Right Cards Block */}
          <div className="tech-cards-column">
            {capabilities.slice(5, 10).map((cap, idx) => (
              <div className="tech-row-card" key={idx}>
                <div className="tech-card-icon-wrap">
                  {cap.icon}
                </div>
                <div className="tech-card-text">
                  <h3 className="tech-card-title">{cap.title}</h3>
                  <p className="tech-card-desc">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
