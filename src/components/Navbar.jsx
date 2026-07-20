import React from 'react';
import logoImg from '../assets/img/gargilogo.png';

export default function Navbar() {
  return (
    <>
      <div className="preloader">
        <button className="th-btn style2 preloaderCls">Cancel Preloader</button>
        <div className="preloader-inner"><span className="loader"></span></div>
      </div>

      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose"><i className="fal fa-times"></i></button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit"><i className="fal fa-search"></i></button>
        </form>
      </div>
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle"><i className="fal fa-times"></i></button>
          <div className="mobile-logo">
            <a href="index.html"
            ><img src={logoImg} className="custom-logo" alt="Ruffer"
              /></a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li className="menu-item-has-children">
                <a href="/about">About Us</a>
                <ul className="sub-menu">
                  <li><a href="/about#company">Company</a></li>
                  <li><a href="/about#leadership">Leadership</a></li>
                  <li><a href="/about#philosophy">Engineering Philosophy</a></li>
                  <li><a href="/about#technology">Technology</a></li>
                  <li><a href="/about#careers">Careers</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/service">Services</a>
                <ul className="sub-menu">
                  <li><a href="/service#peb-design">PEB Design</a></li>
                  <li><a href="/service#peb-detailing">PEB Detailing</a></li>
                  <li><a href="/service#structural-engineering">Structural Engineering</a></li>
                  <li><a href="/service#value-engineering">Value Engineering</a></li>
                  <li><a href="/service#tekla-modeling">Tekla Modeling</a></li>
                  <li><a href="/service#connection-design">Connection Design</a></li>
                  <li><a href="/service#material-takeoff">Material Take-off</a></li>
                  <li><a href="/service#turnkey-engineering">Turnkey Engineering</a></li>
                  <li><a href="/service#civil-design">Civil Design</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/project">Industries</a>
                <ul className="sub-menu">
                  <li><a href="/project#automotive">Automotive</a></li>
                  <li><a href="/project#infrastructure">Infrastructure</a></li>
                  <li><a href="/project#logistics">Logistics</a></li>
                  <li><a href="/project#retail">Retail</a></li>
                  <li><a href="/project#renewable-energy">Renewable Energy</a></li>
                  <li><a href="/project#warehousing">Warehousing</a></li>
                  <li><a href="/project#manufacturing">Manufacturing</a></li>
                  <li><a href="/project#industrial">Industrial</a></li>
                  <li><a href="/project#food-processing">Food Processing</a></li>
                </ul>
              </li>
              <li><a href="/blog">Projects</a></li>
              <li><a href="/blog">Knowledge Center</a></li>
              <li><a href="/blog">Insights</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <header className="th-header header-layout1 onepage-nav">
        <div className="sticky-wrapper">
          <div className="header-top">
            <div className="container th-container">
              <div
                className="row justify-content-center justify-content-lg-between align-items-center gy-2"
              >
                <div className="col-auto d-none d-lg-block">
                  <div className="header-links">
                    <ul>
                      <li>
                        <i className="far fa-phone"></i
                        ><a href="tel:+91 78758 00441">+91 78758 00441</a>
                      </li>
                      <li>
                        <i className="far fa-envelope-open"></i
                        ><a href="mailto:info@Ruffer.com"
                        >pebgargiengineering@gmail.com</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="header-links">
                    <ul>

                      <li>
                        <div className="social-links">
                          <a href="https://www.facebook.com/"
                          ><i className="fab fa-facebook-f"></i
                          ></a>
                          <a href="https://www.twitter.com/"
                          ><i className="fab fa-twitter"></i
                          ></a>
                          <a href="https://www.linkedin.com/"
                          ><i className="fab fa-linkedin-in"></i
                          ></a>
                          <a href="https://www.instagram.com/"
                          ><i className="fab fa-instagram"></i
                          ></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="index.html"
                    ><img src={logoImg} className="custom-logo" alt="Ruffer"
                      /></a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li className="menu-item-has-children">
                        <a href="/about">About Us</a>
                        <ul className="sub-menu">
                          <li><a href="/about#company">Company</a></li>
                          <li><a href="/about#leadership">Leadership</a></li>
                          <li><a href="/about#philosophy">Engineering Philosophy</a></li>
                          <li><a href="/about#technology">Technology</a></li>
                          <li><a href="/about#careers">Careers</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/service">Services</a>
                        <ul className="sub-menu">
                          <li><a href="/service#peb-design">PEB Design</a></li>
                          <li><a href="/service#peb-detailing">PEB Detailing</a></li>
                          <li><a href="/service#structural-engineering">Structural Engineering</a></li>
                          <li><a href="/service#value-engineering">Value Engineering</a></li>
                          <li><a href="/service#tekla-modeling">Tekla Modeling</a></li>
                          <li><a href="/service#connection-design">Connection Design</a></li>
                          <li><a href="/service#material-takeoff">Material Take-off</a></li>
                          <li><a href="/service#turnkey-engineering">Turnkey Engineering</a></li>
                          <li><a href="/service#civil-design">Civil Design</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/project">Industries</a>
                        <ul className="sub-menu">
                          <li><a href="/project#automotive">Automotive</a></li>
                          <li><a href="/project#infrastructure">Infrastructure</a></li>
                          <li><a href="/project#logistics">Logistics</a></li>
                          <li><a href="/project#retail">Retail</a></li>
                          <li><a href="/project#renewable-energy">Renewable Energy</a></li>
                          <li><a href="/project#warehousing">Warehousing</a></li>
                          <li><a href="/project#manufacturing">Manufacturing</a></li>
                          <li><a href="/project#industrial">Industrial</a></li>
                          <li><a href="/project#food-processing">Food Processing</a></li>
                        </ul>
                      </li>
                      <li><a href="/blog">Projects</a></li>
                      <li><a href="/blog">Knowledge Center</a></li>
                      <li><a href="/blog">Insights</a></li>

                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </nav>
                  <button type="button" className="th-menu-toggle d-block d-lg-none">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <button type="button" className="simple-icon searchBoxToggler">
                      <i className="far fa-search"></i>
                    </button>

                    <a href="/contact" className="th-btn"
                    >Get a Quote<i className="fas fa-arrow-right ms-2"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-bg"></div>
        </div>
      </header>
    </>
  );
}
