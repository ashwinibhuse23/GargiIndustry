import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutBg from '../assets/img/about/about_bg.png';
import EngineeringSection from '../components/EngineeringSection/EngineeringSection';
import PurposeSection from '../components/PurposeSection';
import PhilosophySection from '../components/PhilosophySection';
import LeadershipSection from '../components/LeadershipSection';
import TechnologySection from '../components/TechnologySection';


export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero / Breadcrumb Section */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '240px 0'
        }}
        data-overlay="black"
        data-opacity="7"
      >
        <div className="container">
          <div className="breadcumb-content text-start">
            <h1 className="breadcumb-title">
              ENGINEERING EXCELLENCE.<br />BUILT ON PRECISION.
            </h1>
          </div>
        </div>
      </div>

      {/* Engineering Section */}
      <EngineeringSection />

      {/* Vision, Mission, and Values Section */}
      <PurposeSection />

      {/* Engineering Philosophy Section */}
      <PhilosophySection />

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Technology Driven Workflows Section */}
      <TechnologySection />

    

     
     
      <Footer />
    </>
  );
}
