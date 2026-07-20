import React, { useState, useEffect, useRef } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CountUp from '../components/CountUp';
import EngineeringProcess from '../components/EngineeringProcess';
import DigitalEngineeringUSP from '../components/DigitalEngineeringUSP';
import OurProjects from '../components/OurProjects';
import OurClients from '../components/OurClients';
import heroVideo from '../assets/img/herovedio.mp4';
import buildingImage from '../assets/img/about/building_image.png';
import aboutImage from '../assets/img/about/about.png';
import PEBImage from '../assets/img/what_we_do/PEB_design.png';
import PEBDetail from '../assets/img/what_we_do/peb_detailing.png';
import steelImage from '../assets/img/what_we_do/steel.png';
import structuralImage from '../assets/img/what_we_do/counsultancy.png';
import valueImage from '../assets/img/what_we_do/value.png';
import constructionImage from '../assets/img/what_we_do/construction.png';
import blog1 from '../assets/img/blog/blog1.png';
import blog2 from '../assets/img/blog/blog2.png';
import blog3 from '../assets/img/blog/blog3.png';
import '../hero.css';
import '../about.css';

export default function Home() {
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const counterRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCounterVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    const node = aboutRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <>

      <Navbar />

      {/* Hero Section */}
      <div className="th-hero-wrapper hero-1" id="hero">
        <video
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          src={heroVideo}
        ></video>
        <div className="hero-video-overlay"></div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-10 col-xl-9 col-md-11">
              <div className="hero-style1">
                <h1 className="hero-title text-white">
                  ENGINEERING SMARTER STEEL STRUCTURES FOR TOMORROW'S INDUSTRIES
                </h1>
                <p className="hero-text text-white">
                  Structural Consulting | PEB Design | Tekla Detailing | Value Engineering | Turnkey Engineering
                </p>
                <div className="btn-group">
                  <a href="service.html" className="th-btn style3"
                  >VIEW OUR PROJECTS<i className="fa-regular fa-arrow-right ms-2"></i
                  ></a>
                  <a href="contact.html" className="th-btn style2"
                  >TALK TO A CONSULTANT<i className="fa-regular fa-arrow-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Counter Bar - Image 2 Styled Design with Image 1 Content */}
      <div className="hero-counter-wrap">
        <div className="hero-counter-container">
          <div ref={counterRef} className={`hero-counter-grid ${isCounterVisible ? 'is-visible' : ''}`}>

            {/* Item 1 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-city"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val">
                    <span className="num-highlight"><CountUp end={15} /></span>
                    <span className="plus-sign">+</span>
                  </div>
                  <p className="counter-label-text">Years of Experience</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

            {/* Item 2 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-user-gear"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val">
                    <span className="num-highlight"><CountUp end={500} /></span>
                    <span className="plus-sign">+</span>
                  </div>
                  <p className="counter-label-text">Projects Delivered</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

            {/* Item 3 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-thumbs-up"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val">
                    <span className="num-highlight"><CountUp end={5} />Million</span>
                    <span className="plus-sign">+</span>
                  </div>
                  <p className="counter-label-text">Sq.ft Designed</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

            {/* Item 4 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-drafting-compass"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val">
                    <span className="num-highlight"><CountUp end={100} /></span>
                    <span className="plus-sign">+</span>
                  </div>
                  <p className="counter-label-text">Industrial Clients</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

            {/* Item 5 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-shield-check"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val text-nowrap">
                    <span className="num-highlight">Zero Error</span>
                  </div>
                  <p className="counter-label-text">Engineering Philosophy</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

          </div>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className={`space-top space-bottom overflow-hidden ${isAboutVisible ? 'is-visible' : ''}`} id="about-sec">
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Left Column: Grid layout with tall image on left and 3 stacked cards on right */}
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="row g-3">
                {/* Left Sub-column: Tall Image */}
                <div className="col-6 about-tall-col about-zoom-img">
                  <img
                    className="tilt-active about-tall-img"
                    src={aboutImage}
                    alt="Engineers on Site"
                  />
                </div>

                {/* Right Sub-column: 3 Stacked Cards */}
                <div className="col-6 about-cards-col d-flex flex-column justify-content-between gap-3">
                  {/* Top Card: Orange 10+ Years Box */}
                  <div className="about-exp-card about-card-hover">
                    <h3 className="about-exp-number">
                      <span className="counter-number">10</span>+
                    </h3>
                    <p className="about-exp-title">
                      Years of Experience
                    </p>
                    <div className="about-exp-divider" />

                    <div className="d-flex justify-content-between text-center gap-1">
                      <div>
                        <img src="/assets/img/icon/service-icon-1-1.svg" alt="PEB Expertise" className="about-exp-icon" />
                        <p className="about-exp-icon-label">PEB<br />Expertise</p>
                      </div>
                      <div>
                        <img src="/assets/img/icon/service-icon-1-2.svg" alt="Structural Design" className="about-exp-icon" />
                        <p className="about-exp-icon-label">Structural<br />Design</p>
                      </div>
                      <div>
                        <img src="/assets/img/icon/service-icon-1-3.svg" alt="Turnkey Solutions" className="about-exp-icon" />
                        <p className="about-exp-icon-label">Turnkey<br />Solutions</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle Card: Building Image */}
                  <div className="about-zoom-img">
                    <img
                      className="tilt-active about-building-img"
                      src={buildingImage}
                      alt="PEB Structure"
                    />
                  </div>

                  {/* Bottom Card: Dark Stats Box */}
                  <div className="about-stats-card about-card-hover">
                    {/* Stat 1 */}
                    <div className="d-flex align-items-center gap-3">
                      <div className="about-stat-icon">
                        <i className="fa-solid fa-users-gear"></i>
                      </div>
                      <div>
                        <h4 className="about-stat-number">
                          <span className="counter-number">100</span>+
                        </h4>
                        <span className="about-stat-label">
                          Projects Completed
                        </span>
                      </div>
                    </div>

                    <div className="about-stat-divider" />

                    {/* Stat 2 */}
                    <div className="d-flex align-items-center gap-3">
                      <div className="about-stat-icon">
                        <i className="fa-solid fa-handshake"></i>
                      </div>
                      <div>
                        <h4 className="about-stat-number">
                          <span className="counter-number">50</span>+
                        </h4>
                        <span className="about-stat-label">
                          Satisfied Clients
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Text Content */}
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.3s">
              <div className="ps-xxl-3">
                <div className="title-area mb-25">
                  <span className="sub-title about-subtitle">
                    ABOUT US
                  </span>
                  <h2 className="sec-title about-heading">
                    Building Stronger Tomorrows with Precision & Engineering Excellence
                  </h2>
                </div>

                <p className="about-text-p">
                  Gargi Engineering Services is a Structural Consultancy and PEB (Pre-Engineered Building) Turnkey Construction Project firm that specializes in engineering of PEB, Conventional Steel Structures and Light Gauge Structures in the area of Design, Detailing and Estimation and Construction.
                </p>



                <p className="about-text-p-last">
                  We believe that our value engineering services will certainly help our customers to have optimized designed structure. The detailing of structure is with the aim of ZERO error and done in way to reduce complexity and time during fabrication and construction.
                </p>

                {/* Features List with lines between them */}
                <div className="d-flex flex-column gap-2 mb-35">
                  {/* Feature 1 */}
                  <div className="about-feature-item d-flex align-items-center gap-3">
                    <div className="feature-icon-box">
                      <i className="fa-solid fa-city"></i>
                    </div>
                    <div>
                      <h4 className="about-feature-title">
                        Design Excellence
                      </h4>
                      <p className="about-feature-desc">
                        Innovative & optimized structural designs tailored to your project needs.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="about-feature-item d-flex align-items-center gap-3">
                    <div className="feature-icon-box">
                      <i className="fa-solid fa-drafting-compass"></i>
                    </div>
                    <div>
                      <h4 className="about-feature-title">
                        Accurate Detailing
                      </h4>
                      <p className="about-feature-desc">
                        Precise 3D modeling & detailing for seamless fabrication and erection.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="about-feature-item about-feature-item-last d-flex align-items-center gap-3">
                    <div className="feature-icon-box">
                      <i className="fa-solid fa-shield-check"></i>
                    </div>
                    <div>
                      <h4 className="about-feature-title">
                        Quality & Reliability
                      </h4>
                      <p className="about-feature-desc">
                        Committed to quality, safety, and on-time project delivery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="about-cta-row d-flex align-items-center gap-4">
                  <a href="about.html" className="th-btn about-learn-btn">
                    LEARN MORE <i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>

                  <div className="d-flex align-items-center gap-3">
                    <div className="about-profile-logo">
                      G
                    </div>
                    <div>
                      <h4 className="about-profile-title">
                        Gargi Engineering Services
                      </h4>
                      <span className="about-profile-sub">
                        Structural Excellence. Delivered.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="space" id="service-sec">
        <div className="container z-index-common">
          <div className="title-area text-center">
            <span className="sub-title">WHAT WE DO</span>
            <h2 className="sec-title">High-quality Roofing Services</h2>
          </div>
          <div
            className="row slider-shadow th-carousel"
            data-slide-show="3"
            data-lg-slide-show="3"
            data-md-slide-show="2"
            data-sm-slide-show="1"
          >
            <div className="col-md-6 col-lg-4">
              <div className="service-featured">
                <div className="service-featured_img">
                  <img
                    src={PEBImage}
                    alt="service"
                  />
                </div>

                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>
                 
                  <h3 className="box-title">
                    <a href="service-details.html">PEB Design</a>
                  </h3>
                  <p className="service-featured_text">
                    Comprehensive pre-engineered steel structure design & load optimization.
                  </p>
                  <a href="service-details.html" className="link-btn"
                  >Read More<i className="fa-solid fa-arrow-up-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-featured">
                <div className="service-featured_img">
                  <img
                    src={PEBDetail}
                    alt="service"
                  />
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>
                 
                  <h3 className="box-title">
                    <a href="service-details.html">PEB Detailing</a>
                  </h3>
                  <p className="service-featured_text">
                    High-precision Tekla 3D modeling and structural component shop drawings.
                  </p>
                  <a href="service-details.html" className="link-btn"
                  >Read More<i className="fa-solid fa-arrow-up-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-featured steel-card">
                <div className="service-featured_img">
                  <img
                    src={steelImage}
                    alt="service"
                  />
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>
                 
                  <h3 className="box-title">
                    <a href="service-details.html">Steel Structuring</a>
                  </h3>
                  <p className="service-featured_text">
                    Custom heavy industrial steel framework engineering & assembly plans.
                  </p>
                  <a href="service-details.html" className="link-btn"
                  >Read More<i className="fa-solid fa-arrow-up-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-featured">
                <div className="service-featured_img">
                  <img
                    src={structuralImage}
                    alt="service"
                  />
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>
                 
                  <h3 className="box-title">
                    <a href="service-details.html">Structural Consultancy</a>
                  </h3>
                  <p className="service-featured_text">
                    Expert engineering guidance, stress load analysis, and structural audits.
                  </p>
                  <a href="service-details.html" className="link-btn"
                  >Read More<i className="fa-solid fa-arrow-up-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-featured">
                <div className="service-featured_img">
                  <img
                    src={valueImage}
                    alt="service"
                  />
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>
                  
                  <h3 className="box-title">
                    <a href="service-details.html">Value Engineering</a>
                  </h3>
                  <p className="service-featured_text">
                    Optimized structural designs reducing steel tonnage & construction cost.
                  </p>
                  <a href="service-details.html" className="link-btn"
                  >Read More<i className="fa-solid fa-arrow-up-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-featured">
                <div className="service-featured_img">
                  <img
                    src={constructionImage}
                    alt="service"
                  />
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>
                 
                  <h3 className="box-title">
                    <a href="service-details.html">Construction Support</a>
                  </h3>
                  <p className="service-featured_text">
                    On-site erection assistance, discrepancy resolution & quality assembly.
                  </p>
                  <a href="service-details.html" className="link-btn"
                  >Read More<i className="fa-solid fa-arrow-up-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Engineering Process Section */}
      <EngineeringProcess />

      <DigitalEngineeringUSP />

      <OurProjects />

      <div className="bg-white overflow-hidden">
        <OurClients />
      </div>
      

      <section
        className="testi-area-1 overflow-hidden space-bottom"
        data-bg-src="/assets/img/bg/testi_bg_1.png"
      >
        <div className="container z-index-common">
          <div className="row">
            <div className="col-xl-4">
              <div className="text-xl-start text-center">
                <div className="title-area mb-35">
                  <span className="sub-title">TESTIMONIALS</span>
                  <h2 className="sec-title text-white">What Clients Say About Us</h2>
                </div>
                <div className="testimonial-slider-arrow1">
                  <button
                    data-slick-prev="#testimonial-slider1"
                    className="slick-arrow slick-prev"
                  >
                    <i className="fa-regular fa-arrow-left-long"></i>
                  </button>
                  <button
                    data-slick-next="#testimonial-slider1"
                    className="slick-arrow slick-next"
                  >
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 mt-40 mt-xl-0">
              <div
                className="th-carousel testi-slider1 row"
                id="testimonial-slider1"
                data-slide-show="2"
                data-ml-slide-show="1"
                data-lg-slide-show="2"
                data-md-slide-show="1"
                data-dots="false"
                data-arrows="false"
              >
                <div className="col-lg-6">
                  <div className="testi-card">
                    <div
                      className="testi-card_bg-shape shape-mockup spin d-xl-block d-none"
                      data-right="-35%"
                      data-top="-35%"
                    >
                      <img src="/assets/img/normal/about_1_2shape.png" alt="img" />
                    </div>
                    <div className="testi-card_profile">
                      <div className="media-left">
                        <div className="testi-card_avater">
                          <img
                            src="/assets/img/testimonial/testi_1_1.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="testi-card_quote">
                          <img
                            src="/assets/img/icon/blog-quote1.svg"
                            alt="quote"
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <h3 className="testi-card_name">Ronald Richards</h3>
                        <span className="testi-card_desig">Founder CEO</span>
                        <p className="testi-card_text">
                          The team was professional and efficient. Highly
                          recommend this company for any roofing needs. The
                          quality of work was outstanding,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testi-card">
                    <div
                      className="testi-card_bg-shape shape-mockup spin d-xl-block d-none"
                      data-right="-35%"
                      data-top="-35%"
                    >
                      <img src="/assets/img/normal/about_1_2shape.png" alt="img" />
                    </div>
                    <div className="testi-card_profile">
                      <div className="media-left">
                        <div className="testi-card_avater">
                          <img
                            src="/assets/img/testimonial/testi_1_2.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="testi-card_quote">
                          <img
                            src="/assets/img/icon/blog-quote1.svg"
                            alt="quote"
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <h3 className="testi-card_name">Ralph Edwards</h3>
                        <span className="testi-card_desig">Regular Customer</span>
                        <p className="testi-card_text">
                          They were able to provide me with a range of options for
                          my roof replacement, and helped us choose the best one
                          for needs and budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testi-card">
                    <div
                      className="testi-card_bg-shape shape-mockup spin d-xl-block d-none"
                      data-right="-35%"
                      data-top="-35%"
                    >
                      <img src="/assets/img/normal/about_1_2shape.png" alt="img" />
                    </div>
                    <div className="testi-card_profile">
                      <div className="media-left">
                        <div className="testi-card_avater">
                          <img
                            src="/assets/img/testimonial/testi_1_3.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="testi-card_quote">
                          <img
                            src="/assets/img/icon/blog-quote1.svg"
                            alt="quote"
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <h3 className="testi-card_name">Abraham Khalil</h3>
                        <span className="testi-card_desig">UI/UX Designer</span>
                        <p className="testi-card_text">
                          They worked tirelessly to complete the job on time and
                          the final result exceeded expectations. Recommend this
                          for roofing services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testi-card">
                    <div
                      className="testi-card_bg-shape shape-mockup spin d-xl-block d-none"
                      data-right="-35%"
                      data-top="-35%"
                    >
                      <img src="/assets/img/normal/about_1_2shape.png" alt="img" />
                    </div>
                    <div className="testi-card_profile">
                      <div className="media-left">
                        <div className="testi-card_avater">
                          <img
                            src="/assets/img/testimonial/testi_1_4.jpg"
                            alt="testimonial"
                          />
                        </div>
                        <div className="testi-card_quote">
                          <img
                            src="/assets/img/icon/blog-quote1.svg"
                            alt="quote"
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <h3 className="testi-card_name">Alexa Jenifer</h3>
                        <span className="testi-card_desig">CEO at Morosto</span>
                        <p className="testi-card_text">
                          I was very impressed with the level of expertise
                          demonstrated by the team who worked on my roof. They
                          were able to diagnose the issue quickly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden space" id="blog-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Blog & News</span>
            <h2 className="sec-title">Latest Blog & News</h2>
          </div>
          <div
            className="row slider-shadow th-carousel arrow-style2"
            data-slide-show="3"
            data-lg-slide-show="2"
            data-md-slide-show="2"
            data-sm-slide-show="1"
            data-arrows="true"
          >
            <div className="col-md-6 col-xl-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img src={blog1} alt="PEB Design" />
                </div>
                <div className="blog-content">
                  <div className="blog-bg-shape">
                    <img src="/assets/img/bg/blog1-bg-shape.png" alt="img" />
                  </div>
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="fa-solid fa-layer-group"></i>PEB Design • Value Engineering</a
                    >
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >Why Engineering Design Matters More Than Steel Price in PEB Projects</a
                    >
                  </h3>
                  <p className="blog-text">
                    A smart PEB design goes beyond steel cost. Discover how optimized engineering improves safety, reduces construction costs, speeds up execution, and delivers long-term value.
                  </p>
                  <div className="blog-bottom">
                    <a href="blog-details.html" className="link-btn"
                    >Read More <i className="fa-solid fa-arrow-right ms-1"></i></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img src={blog2} alt="Digital Engineering" />
                </div>
                <div className="blog-content">
                  <div className="blog-bg-shape">
                    <img src="/assets/img/bg/blog1-bg-shape.png" alt="img" />
                  </div>
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="fa-solid fa-layer-group"></i>Technology • Digital Engineering</a
                    >
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >The Future of Industrial Buildings: Why Digital Engineering is Transforming PEB Design</a
                    >
                  </h3>
                  <p className="blog-text">
                    Discover how digital engineering improves accuracy, speeds up project delivery, enhances collaboration, and reduces construction risks in modern PEB projects.
                  </p>
                  <div className="blog-bottom">
                    <a href="blog-details.html" className="link-btn"
                    >Read More <i className="fa-solid fa-arrow-right ms-1"></i></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img src={blog3} alt="Project Planning" />
                </div>
                <div className="blog-content">
                  <div className="blog-bg-shape">
                    <img src="/assets/img/bg/blog1-bg-shape.png" alt="img" />
                  </div>
                  <div className="blog-meta">
                    <a href="blog.html"
                    ><i className="fa-solid fa-layer-group"></i>Industrial Construction • Project Planning</a
                    >
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html"
                    >Five Mistakes Companies Make When Planning a New Industrial Building</a
                    >
                  </h3>
                  <p className="blog-text">
                    Avoid costly project delays and budget overruns by understanding the five most common mistakes in industrial building planning and how smart engineering prevents them.
                  </p>
                  <div className="blog-bottom">
                    <a href="blog-details.html" className="link-btn"
                    >Read More <i className="fa-solid fa-arrow-right ms-1"></i></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <Footer />





    </>
  );
}
