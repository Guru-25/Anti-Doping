import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Courses() {
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
                <h1>Courses</h1>
                <p className="mb-0">
                  Explore our comprehensive courses on anti-doping education.
                  Learn about the importance of clean sport, anti-doping
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
              <li className="current">Courses</li>
            </ol>
          </div>
        </nav>
      </div>
      {/* End Page Title */}
      {/* Courses Section */}
      <section id="courses" className="courses section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Courses</h2>
          <p>Popular Courses</p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="course-item">
                <img
                  src="assets/img/courses/ITA-Intro-1.webp"
                  className="img-fluid course-img"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="category">Anti-Doping</p>
                    <p className="price">Free</p>
                  </div>
                  <h3>
                    <a href="course-details">Introduction to Anti-Doping</a>
                  </h3>
                  <p className="description">
                    Learn the basics of anti-doping, including rules, regulations,
                    and the importance of clean sport.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="./assets/img/trainers/trainer-1.png"
                        className="img-fluid"
                        alt=""
                      />
                      <a href="" className="trainer-link">
                        Dr. Tamil Selvi
                      </a>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bi bi-person user-icon" />
                      &nbsp;150 &nbsp;&nbsp;
                      <i className="bi bi-heart heart-icon" />
                      &nbsp;200
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End Course Item*/}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="course-item">
                <img
                  src="https://drbest.in/wp-content/uploads/2019/07/001.jpg"
                  className="img-fluid course-img"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="category">Health &amp; Safety</p>
                    <p className="price">Free</p>
                  </div>
                  <h3>
                    <a href="course-details">Nutrition and Supplements</a>
                  </h3>
                  <p className="description">
                    Understand the role of nutrition and supplements in sports.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="./assets/img/trainers/trainer-2.png"
                        className="img-fluid"
                        alt=""
                      />
                      <a href="" className="trainer-link">
                        Prabhakaran JP
                      </a>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bi bi-person user-icon" />
                      &nbsp;120 &nbsp;&nbsp;
                      <i className="bi bi-heart heart-icon" />
                      &nbsp;180
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End Course Item*/}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="course-item">
                <img
                  src="https://cdn.thewire.in/wp-content/uploads/2022/01/31133448/722946-dutee-chand-second-pti.jpg"
                  className="img-fluid course-img"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="category">Ethics</p>
                    <p className="price">Free</p>
                  </div>
                  <h3>
                    <a href="course-details">Ethics in Sports</a>
                  </h3>
                  <p className="description">
                    Explore the ethical considerations in sports and the
                    importance of maintaining integrity.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="./assets/img/trainers/trainer-3.png"
                        className="img-fluid"
                        alt=""
                      />
                      <a href="" className="trainer-link">
                        Prof. Nancy
                      </a>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bi bi-person user-icon" />
                      &nbsp;100 &nbsp;&nbsp;
                      <i className="bi bi-heart heart-icon" />
                      &nbsp;150
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End Course Item*/}
          </div>
        </div>
      </section>
      {/* /Courses Section */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .course-img {\n    width: 100%;\n    height: 250px;\n    object-fit: cover;\n  }\n"
        }}
      />
    </main>
    </div>
  );
}

export default Courses;