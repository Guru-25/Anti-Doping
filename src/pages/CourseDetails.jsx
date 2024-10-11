import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CourseDetails() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    return () => {
      // Clean up (if needed)
    };
  }, []);
  return (
    <div>
      <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1 className="sitename">Anti-Doping Education</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/">
                Home
                <br />
              </a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="courses" className="active">
                Courses
              </a>
            </li>
            <li>
              <a href="trainers">Trainers</a>
            </li>
            <li>
              <a href="events">Events</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <a className="btn-getstarted" href="courses">
          Get Started
        </a>
      </div>
    </header>
    <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Course Details</h1>
                <p className="mb-0">
                  Explore the details of our comprehensive anti-doping education
                  courses. Learn about the importance of clean sport, anti-doping
                  regulations, and best practices to ensure fair play.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">Course Details</li>
            </ol>
          </div>
        </nav>
      </div>
      {/* End Page Title */}
      {/* Courses Course Details Section */}
      <section
        id="courses-course-details"
        className="courses-course-details section"
      >
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8">
              <div className="video-container">
                <iframe
                  className="video-iframe"
                  src="https://www.youtube.com/embed/IDMQUJzG0lg"
                  allowFullScreen=""
                />
              </div>
              <h3>Introduction to Anti-Doping</h3>
              <p>
                Learn the basics of anti-doping, including rules, regulations, and
                the importance of clean sport. This video covers Anti-Doping Rule
                Violations, providing essential information for athletes, coaches,
                and stakeholders to understand and comply with anti-doping
                regulations.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Trainer</h5>
                <p>
                  <a href="#">Dr. Tamil Selvi</a>
                </p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Course Fee</h5>
                <p>Free</p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Available Seats</h5>
                <p>Unlimited</p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Schedule</h5>
                <p>On-Demand</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Courses Course Details Section */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .video-container {\n    position: relative;\n    width: 100%;\n    height: 400px; /* Set the height to match the original image size */\n    overflow: hidden;\n  }\n\n  .video-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n  }\n"
        }}
      />
      {/* Tabs Section */}
      <section id="tabs" className="tabs section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    Introduction
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    Prohibited Substances
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Testing Procedures
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                    Therapeutic Use Exemptions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                    Consequences
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Introduction to Anti-Doping</h3>
                      <p className="fst-italic">
                        Learn the basics of anti-doping, including rules,
                        regulations, and the importance of clean sport.
                      </p>
                      <p>
                        Anti-doping education is essential for athletes, coaches,
                        and stakeholders to understand the importance of
                        maintaining integrity in sports. This section provides an
                        overview of anti-doping principles and practices.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/tabs/intro.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Prohibited Substances</h3>
                      <p className="fst-italic">
                        Understand which substances are prohibited and why they
                        are banned in sports.
                      </p>
                      <p>
                        This section covers the list of prohibited substances,
                        their effects, and the reasons for their ban. It is
                        crucial for athletes to be aware of these substances to
                        avoid unintentional violations.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/tabs/substances.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Testing Procedures</h3>
                      <p className="fst-italic">
                        Learn about the procedures and protocols for anti-doping
                        testing.
                      </p>
                      <p>
                        Testing is a critical component of anti-doping efforts.
                        This section explains the testing procedures, including
                        sample collection, analysis, and the rights and
                        responsibilities of athletes during the testing process.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/tabs/testing.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Therapeutic Use Exemptions (TUEs)</h3>
                      <p className="fst-italic">
                        Understand the process for obtaining exemptions for
                        necessary medications.
                      </p>
                      <p>
                        Athletes with medical conditions may need to use
                        prohibited substances. This section explains the
                        Therapeutic Use Exemption (TUE) process, including how to
                        apply and the criteria for approval.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/tabs/tue.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Consequences of Doping</h3>
                      <p className="fst-italic">
                        Learn about the consequences of doping violations.
                      </p>
                      <p>
                        Doping violations can have severe consequences for
                        athletes, including suspensions, fines, and damage to
                        reputation. This section outlines the potential penalties
                        and the importance of adhering to anti-doping regulations.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/tabs/consequences.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Tabs Section */}
    </main>
    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">Anti-Doping Education</span>
            </a>
            <div className="footer-contact pt-3">
              <p>123 Thiruparankundram</p>
              <p>Madurai, India 625010</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+91 12345 67890</span>
              </p>
              <p>
                <strong>Email:</strong> <span>anti-doping@gururaja.in</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="">
                <i className="bi bi-twitter" />
              </a>
              <a href="">
                <i className="bi bi-facebook" />
              </a>
              <a href="">
                <i className="bi bi-instagram" />
              </a>
              <a href="">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Anti-Doping Education</a>
              </li>
              <li>
                <a href="#">Workshops</a>
              </li>
              <li>
                <a href="#">Consultations</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Certifications</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Subscribe to our newsletter and receive the latest updates on
              anti-doping education and clean sport initiatives!
            </p>
            <form
              action="forms/newsletter.php"
              method="post"
              className="php-email-form"
            >
              <div className="newsletter-form">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </div>
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your subscription request has been sent. Thank you!
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Anti-Doping Education</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
    </div>
  );
}

export default CourseDetails;