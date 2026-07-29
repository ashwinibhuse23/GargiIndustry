import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LuMapPin, LuPhoneCall, LuMail, LuGlobe, LuArrowRight, LuCheck } from 'react-icons/lu';
import '../about.css';
import './Contact.css';
import heroBg from '../assets/img/contacthero.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'PEB Structural Design & Analysis',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'PEB Structural Design & Analysis',
          message: ''
        });
      }, 6000);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <Navbar />

      {/* ══════════════════ HERO SECTION ══════════════════ */}
      <div
        className="about-page-hero contact-page-hero"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      >
        <div className="about-page-hero-overlay"></div>
        <div className="container">
          <div className="about-page-hero-content text-start">
            <h1 className="about-hero-title mb-0">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* ══════════════════ MAIN COMBINED CARD SECTION ══════════════════ */}
      <section className="contact-main-card-sec">
        <div className="container">
          <div className="contact-unified-card">
            <div className="row g-0">
              
              {/* ══ LEFT SIDE: BRAND / INFO PANEL WITH COMPACT MAP (5 COLS) ══ */}
              <div className="col-lg-5 col-md-12">
                <div className="contact-info-side">
                  <div className="contact-tag-badge">
                    <span className="badge-dash"></span>
                    PRE-ENGINEERED BUILDING SERVICES
                  </div>

                  <div className="contact-details-list">
                    {/* Item 1: Location */}
                    <div className="contact-info-item">
                      <div className="contact-circle-icon">
                        <LuMapPin />
                      </div>
                      <div className="contact-info-content">
                        <h4 className="contact-info-label">Office Location</h4>
                        <p className="contact-info-val">
                          PCMC, Chinchwad<br />
                          Pune and Nagpur
                        </p>
                      </div>
                    </div>

                    {/* Item 2: Phone */}
                    <div className="contact-info-item">
                      <div className="contact-circle-icon">
                        <LuPhoneCall />
                      </div>
                      <div className="contact-info-content">
                        <h4 className="contact-info-label">Phone</h4>
                        <p className="contact-info-val">
                          <a href="tel:+917875800441">+91 78758 00441</a>
                        </p>
                      </div>
                    </div>

                    {/* Item 3: Email */}
                    <div className="contact-info-item">
                      <div className="contact-circle-icon">
                        <LuMail />
                      </div>
                      <div className="contact-info-content">
                        <h4 className="contact-info-label">Email</h4>
                        <p className="contact-info-val">
                          <a href="mailto:pebgargiengineering@gmail.com">pebgargiengineering@gmail.com</a>
                        </p>
                      </div>
                    </div>

                    {/* Item 4: Website */}
                    <div className="contact-info-item">
                      <div className="contact-circle-icon">
                        <LuGlobe />
                      </div>
                      <div className="contact-info-content">
                        <h4 className="contact-info-label">Website</h4>
                        <p className="contact-info-val">
                          <a href="https://www.gargipeb.com" target="_blank" rel="noreferrer">
                            www.gargipeb.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ══ COMPACT EMBEDDED MAP IN LEFT COLUMN ══ */}
                  <div className="contact-col-mini-map-wrap">
                    <iframe
                      title="Gargi Engineering Office Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.825828456123!2d73.7844004!3d18.6297926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e763b65a5f%3A0x6b63d6b0df48e89f!2sChinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="contact-col-mini-map"
                    ></iframe>
                  </div>

                </div>
              </div>

              {/* ══ RIGHT SIDE: INQUIRY FORM PANEL (7 COLS) ══ */}
              <div className="col-lg-7 col-md-12">
                <div className="contact-form-side">
                  <h3 className="form-main-title">Send Us a Message</h3>

                  {isSubmitted && (
                    <div className="contact-success-alert">
                      <LuCheck className="fs-5 flex-shrink-0" />
                      <span>
                        Thank you! Your inquiry has been sent successfully. Our engineering team will get back to you shortly.
                      </span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      
                      {/* Name */}
                      <div className="col-12">
                        <div className="form-group-field">
                          <label className="form-field-label">Your Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            className="form-field-input"
                            placeholder="e.g. Rajesh Sharma"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-12">
                        <div className="form-group-field">
                          <label className="form-field-label">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            className="form-field-input"
                            placeholder="e.g. rajesh@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <div className="form-group-field">
                          <label className="form-field-label">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            className="form-field-input"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="col-md-6">
                        <div className="form-group-field">
                          <label className="form-field-label">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            className="form-field-input"
                            placeholder="e.g. Industrial Infra Ltd"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Service Dropdown */}
                      <div className="col-12">
                        <div className="form-group-field">
                          <label className="form-field-label">Select Engineering Service *</label>
                          <div className="select-wrapper">
                            <select
                              name="service"
                              className="form-field-select"
                              value={formData.service}
                              onChange={handleChange}
                            >
                              <option value="PEB Structural Design & Analysis">PEB Structural Design & Analysis</option>
                              <option value="PEB Detailing & Tekla 3D Modeling">PEB Detailing & Tekla 3D Modeling</option>
                              <option value="Structural Connection Design">Structural Connection Design</option>
                              <option value="Value Engineering & Tonnage Optimization">Value Engineering & Tonnage Optimization</option>
                              <option value="Material Take-Off (MTO)">Material Take-Off (MTO)</option>
                              <option value="Industrial Civil & Foundation Design">Industrial Civil & Foundation Design</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <div className="form-group-field">
                          <label className="form-field-label">Project Details / Message *</label>
                          <textarea
                            name="message"
                            rows="4"
                            className="form-field-textarea"
                            placeholder="Tell us about your project dimensions, location, crane capacity, or specific engineering requirements..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 text-start pt-2">
                        <button type="submit" className="contact-theme-submit-btn">
                          Send Message <LuArrowRight className="btn-arrow-icon" />
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
