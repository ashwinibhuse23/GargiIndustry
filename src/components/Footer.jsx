import React from 'react';

export default function Footer() {
  return (
    <>
      <footer
      className="footer-wrapper footer-layout1"
      data-bg-src="/assets/img/bg/footer-bg.png"
    >
     
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="index.html"
                      ><img src="/assets/img/gargilogo.png" alt="Gargi"
                    /></a>
                  </div>
                  <p className="about-text">
                    Mauris blandit aliquet elit, eget tincidunt Nibh pulvinar a.
                    Donec rutrum congue leo Eget malesuada. Cras ultricies
                    ligula
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/"
                      ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a href="https://www.twitter.com/"
                      ><i className="fab fa-twitter"></i
                    ></a>
                    <a href="https://www.linkedin.com/"
                      ><i className="fab fa-linkedin-in"></i
                    ></a>
                    <a href="https://www.whatsapp.com/"
                      ><i className="fab fa-whatsapp"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="service.html">Residential roofing</a></li>
                    <li><a href="service.html">Commercial Roofing</a></li>
                    <li><a href="service.html">Commercial Roofing</a></li>
                    <li><a href="service.html">Vegetative Roofing</a></li>
                    <li><a href="service.html">Built-Up Roofing</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html"
                        ><img
                          src="/assets/img/widget/footer-widget_1_1.jpg"
                          alt="Blog Image"
                      /></a>
                    </div>
                    <div className="media-body">
                      <div className="recent-post-meta">
                        <a href="blog.html"
                          ><i className="fal fa-calendar-days"></i>21 June, 2023</a
                        >
                      </div>
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html"
                          >The solution to your Roof problems</a
                        >
                      </h4>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html"
                        ><img
                          src="/assets/img/widget/footer-widget_1_2.jpg"
                          alt="Blog Image"
                      /></a>
                    </div>
                    <div className="media-body">
                      <div className="recent-post-meta">
                        <a href="blog.html"
                          ><i className="fal fa-calendar-days"></i>22 June, 2023</a
                        >
                      </div>
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html"
                          >Quick and efficient Roof repairs.</a
                        >
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget newsletter-widget footer-widget">
                <h3 className="widget_title">Subscribe Now</h3>
                <p className="footer-text">
                  Subscribe our newsletter to get our latest Update & news
                </p>
                <form className="newsletter-form">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button type="submit" className="th-btn">
                    <i className="far fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap bg-title">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                © 2023 All Rights Reserved
                <a href="https://themeforest.net/user/th">Ruffer</a>
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <div className="footer-links">
                <ul>
                  <li><a href="about.html">Privacy Policy</a></li>
                  <li><a href="about.html">Terms & Condition</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
