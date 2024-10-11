import React, { useState, useEffect } from 'react';
import { Tab, Nav, Row, Col, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tabData = [
  {
    id: 'tab-1',
    title: 'Introduction',
    heading: 'Introduction to Anti-Doping',
    italic: 'Learn the basics of anti-doping, including rules, regulations, and the importance of clean sport.',
    content: 'Anti-doping education is essential for athletes, coaches, and stakeholders to understand the importance of maintaining integrity in sports. This section provides an overview of anti-doping principles and practices.',
    image: 'assets/img/tabs/intro.png'
  },
  {
    id: 'tab-2',
    title: 'Prohibited Substances',
    heading: 'Prohibited Substances',
    italic: 'Understand which substances are prohibited and why they are banned in sports.',
    content: 'This section covers the list of prohibited substances, their effects, and the reasons for their ban. It is crucial for athletes to be aware of these substances to avoid unintentional violations.',
    image: 'assets/img/tabs/substances.png'
  },
  {
    id: 'tab-3',
    title: 'Testing Procedures',
    heading: 'Testing Procedures',
    italic: 'Learn about the procedures and protocols for anti-doping testing.',
    content: 'Testing is a critical component of anti-doping efforts. This section explains the testing procedures, including sample collection, analysis, and the rights and responsibilities of athletes during the testing process.',
    image: 'assets/img/tabs/testing.png'
  },
  {
    id: 'tab-4',
    title: 'Therapeutic Use Exemptions',
    heading: 'Therapeutic Use Exemptions (TUEs)',
    italic: 'Understand the process for obtaining exemptions for necessary medications.',
    content: 'Athletes with medical conditions may need to use prohibited substances. This section explains the Therapeutic Use Exemption (TUE) process, including how to apply and the criteria for approval.',
    image: 'assets/img/tabs/tue.png'
  },
  {
    id: 'tab-5',
    title: 'Consequences',
    heading: 'Consequences of Doping',
    italic: 'Learn about the consequences of doping violations.',
    content: 'Doping violations can have severe consequences for athletes, including suspensions, fines, and damage to reputation. This section outlines the potential penalties and the importance of adhering to anti-doping regulations.',
    image: 'assets/img/tabs/consequences.png'
  }
];

function CourseDetails() {
  const [key, setKey] = useState('tab-1');
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
          {/* <i className="mobile-nav-toggle d-xl-none bi bi-list" /> */}
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
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
            <Row>
              <Col lg={3}>
                <Nav variant="tabs" className="flex-column">
                  {tabData.map((tab) => (
                    <Nav.Item key={tab.id}>
                      <Nav.Link eventKey={tab.id}>{tab.title}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col lg={9} className="mt-4 mt-lg-0">
                <Tab.Content>
                  {tabData.map((tab) => (
                    <Tab.Pane key={tab.id} eventKey={tab.id}>
                      <Row>
                        <Col lg={8} className="details order-2 order-lg-1">
                          <h3>{tab.heading}</h3>
                          <p className="fst-italic">{tab.italic}</p>
                          <p>{tab.content}</p>
                        </Col>
                        <Col lg={4} className="text-center order-1 order-lg-2">
                          <Image src={tab.image} alt="" fluid />
                        </Col>
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
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