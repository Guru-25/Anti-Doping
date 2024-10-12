import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Trainers() {
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
              <a href="trainers" className="active">
                Trainers
              </a>
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
                <h1>Trainers</h1>
                <p className="mb-0">
                  Meet our dedicated trainers who are experts in anti-doping
                  education. They are committed to promoting clean sport and
                  educating athletes, coaches, and stakeholders about the
                  importance of adhering to anti-doping regulations.
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
              <li className="current">Trainers</li>
            </ol>
          </div>
        </nav>
      </div>
      {/* End Page Title */}
      {/* Trainers Section */}
      <section id="trainers" className="section trainers">
        <div className="container">
          <div className="row gy-5">
            <div
              className="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="member-img">
                <img
                  src="assets/img/trainers/trainer-1.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Dr. Tamil Selvi</h4>
                <span>Anti-Doping Specialist</span>
                <p>
                  Expert in anti-doping regulations and practices, dedicated to
                  promoting clean sport and educating athletes.
                </p>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="member-img">
                <img
                  src="assets/img/trainers/trainer-2.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Coach Prabhakaran JP</h4>
                <span>Nutrition Expert</span>
                <p>
                  Specializes in sports nutrition and supplements, ensuring
                  athletes maintain a healthy and clean diet.
                </p>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="member-img">
                <img
                  src="assets/img/trainers/trainer-3.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info text-center">
                <h4>Prof. Nancy</h4>
                <span>Ethics in Sports</span>
                <p>
                  Focuses on the ethical aspects of sports, promoting integrity
                  and fair play among athletes.
                </p>
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
      {/* /Trainers Section */}
    </main>
    </div>
  );
}

export default Trainers;