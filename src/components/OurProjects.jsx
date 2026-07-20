import React, { useEffect, useRef, useState } from 'react';
import { LuMapPin, LuArrowRight } from 'react-icons/lu';
import './OurProjects.css';

import aerialImg from '../assets/img/hero/hero_bg_1_1.jpeg';
import steelInteriorImg from '../assets/img/hero/project2.jpeg';

const projectsData = [
  {
    id: '01',
    badgeColor: 'black',
    title: 'Motherson Automotive Technologies Engineering (MATE)',
    location: 'Pune',
    category: 'Industrial Manufacturing',
    description:
      'Designed a high-capacity industrial facility to support heavy manufacturing with 50 MT crane system.',
    image: aerialImg,
    imagePosition: 'left',
  },
  {
    id: '02',
    badgeColor: 'theme',
    title: 'Marel Motherson Automotive Lighting',
    location: 'Chakan, Pune',
    category: 'Automotive',
    description:
      'Delivered a comprehensive structural engineering and detailing solution for large-scale manufacturing.',
    image: steelInteriorImg,
    imagePosition: 'right',
  },
];

const OurProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`our-projects-section overflow-hidden ${isVisible ? 'is-visible' : ''}`}
      id="projects-sec"
    >
      {/* Background Spinning Circle Shapes */}
      <div
        className="shape-mockup faq-spin spin d-xl-block d-none"
        style={{ bottom: '-15%', left: '-12%', position: 'absolute', zIndex: 0 }}
      >
        <img src="/assets/img/normal/about_1_2shape.png" alt="shape" />
      </div>
      <div
        className="shape-mockup faq-spin2 spin d-xl-block d-none z-index-n2"
        style={{ top: '0', right: '-12%', position: 'absolute', zIndex: 0 }}
      >
        <img src="/assets/img/normal/about_1_2shape.png" alt="shape" />
      </div>

      <div className="container z-index-common">
        {/* Header Area */}
        <div className="our-projects-header">
          <span className="sub-title">OUR PROJECTS</span>
          <h2 className="projects-sec-title">
            From Engineering to Execution, We Deliver
          </h2>
         
        </div>

          {/* Decorative Dot Matrix */}
          <div className="dot-matrix-decor" aria-hidden="true">
            {[...Array(25)].map((_, i) => (
              <span key={i} className="dot-matrix-item" />
            ))}
          </div>

        {/* Projects Cards Grid */}
        <div className="projects-cards-grid">
          {projectsData.map((project) => {
            const isImageLeft = project.imagePosition === 'left';
            return (
              <div
                className={`project-card ${isImageLeft ? 'img-left' : 'img-right'}`}
                key={project.id}
              >
                {/* Image side with image-anime animation class */}
                <div className="project-card-image-wrap image-anime">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-img"
                  />
                </div>

                {/* Content side */}
                <div className="project-card-content">
                  <div
                    className={`project-id-badge badge-${project.badgeColor}`}
                  >
                    {project.id}
                  </div>

                  <h3 className="project-card-title">{project.title}</h3>

                  <div className="project-card-meta">
                    <span className="meta-loc">
                      <LuMapPin className="pin-icon" /> {project.location}
                    </span>
                    <span className="meta-divider">|</span>
                    <span className="meta-cat">{project.category}</span>
                  </div>

                  <p className="project-card-desc">{project.description}</p>

                  <a href="#contact" className="project-view-details-btn">
                    VIEW DETAILS <LuArrowRight className="arrow-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
