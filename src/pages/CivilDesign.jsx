import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../assets/img/services/civil2.jpeg';
import { 
  LuBuilding,
  LuLayers,
  LuMessageSquare,
  LuSettings,
  LuUsers,
  LuCalendar
} from 'react-icons/lu';
import './PEBDesign.css';

export default function CivilDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { name: "RCC Design", icon: LuBuilding },
    { name: "Foundation Design", icon: LuLayers },
    { name: "Structural Consultancy", icon: LuMessageSquare },
    { name: "Construction Management", icon: LuSettings },
    { name: "Site Coordination", icon: LuUsers },
    { name: "Project Planning", icon: LuCalendar }
  ];

  return (
    <div className="peb-exact-page">
      <Navbar />

      <main className="peb-exact-main">
        {/* Background Grid Pattern */}
        <div className="peb-bg-grid"></div>

        <div className="container">
          {/* HERO SECTION */}
          <section className="peb-hero-section row align-items-center">
            <div className="col-lg-7 peb-hero-left">
              <h1 className="peb-hero-title" style={{ lineHeight: '1.4' }}>
                CIVIL DESIGN & CONSTRUCTION<br></br> <span className="heading-tag">CONSULTING</span>
              </h1>
              
              <div className="peb-hero-tagline-wrapper" style={{ borderLeftColor: 'transparent', paddingLeft: 0, marginTop: '30px' }}>
                <p className="peb-hero-text" style={{ marginTop: 0 }}>
                  Beyond structural steel, we provide civil engineering support that integrates seamlessly with your building design.
                </p>
              </div>

            </div>

            <div className="col-lg-5 peb-hero-right">
              <div className="peb-hero-image-wrapper">
                <img src={img} alt="Civil Design & Construction Consulting" className="peb-hero-image" />
              </div>
            </div>
          </section>

          {/* BOTTOM SECTION */}
          <section className="peb-bottom-section row">
            
            {/* CAPABILITIES (Full Width) */}
            <div className="col-lg-12 peb-capabilities-section">
              <h3 className="peb-section-heading">
                Services
                <span className="peb-heading-line"></span>
              </h3>

              <div className="row g-4">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="peb-capability-card">
                      <cap.icon className="peb-cap-icon" />
                      <h6 className="peb-cap-title">{cap.name}</h6>
                      <div className="peb-cap-line"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
