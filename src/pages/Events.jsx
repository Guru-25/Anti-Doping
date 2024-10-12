import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Events() {
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
              <a href="courses">Courses</a>
            </li>
            <li>
              <a href="trainers">Trainers</a>
            </li>
            <li>
              <a href="events" className="active">
                Events
              </a>
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
                <h1>Events</h1>
                <p className="mb-0">
                  Join our upcoming events focused on anti-doping education and
                  clean sport. Participate in workshops, webinars, and seminars
                  led by experts to stay informed about the latest in anti-doping
                  regulations and best practices.
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
              <li className="current">Events</li>
            </ol>
          </div>
        </nav>
      </div>
      {/* End Page Title */}
      {/* Events Section */}
      <section id="events" className="events section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/courses/event.webp"
                    alt="..."
                    className="img-fluid event-img"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Anti-Doping Workshop</a>
                  </h5>
                  <p className="fst-italic text-center">
                    Sunday, September 26th at 7:00 pm
                  </p>
                  <p className="card-text">
                    Join us for an in-depth workshop on anti-doping regulations
                    and best practices. Learn from experts about the importance of
                    clean sport and how to stay compliant with anti-doping rules.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://i.ytimg.com/vi/FCWMx9uJWPM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDos6HrxTmbOlwTIkjhRagUdoXMBA"
                    alt="..."
                    className="img-fluid event-img"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">Nutrition and Clean Sport Seminar</a>
                  </h5>
                  <p className="fst-italic text-center">
                    Sunday, November 15th at 7:00 pm
                  </p>
                  <p className="card-text">
                    Discover the role of nutrition in maintaining a clean sport.
                    This seminar will cover safe supplement practices and dietary
                    guidelines to help athletes avoid prohibited substances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Events Section */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .event-img {\n    width: 100%;\n    height: 300px; /* Set a fixed height */\n    object-fit: cover; /* Ensure the image covers the entire area */\n  }\n"
        }}
      />
    </main>
    </div>
  );
}

export default Events;