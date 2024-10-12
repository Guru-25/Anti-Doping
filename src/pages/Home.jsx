import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PureCounter from '@srexi/purecounterjs'; // Import PureCounter

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Initialize PureCounter
    new PureCounter(); // Initialize PureCounter here

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
              <a href="/" className="active">
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
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img
          src="https://cdn.pixabay.com/photo/2023/12/19/22/46/man-8458549_1280.jpg"
          alt=""
          data-aos="fade-in"
        />
        <div className="container">
          <h2 data-aos="fade-up" data-aos-delay={100}>
            Promoting Clean Sport,
            <br />
            Empowering Athletes
          </h2>
          <p data-aos="fade-up" data-aos-delay={200}>
            Join us in our mission to educate and raise awareness about
            anti-doping practices.
          </p>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay={300}>
            <a href="courses" className="btn-get-started">
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <img
                src="https://www.mykhel.com/img/1200x60x675/2022/06/neeraj-chopra-javelin-1655878245.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 order-2 order-lg-1 content"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h3>About Our Mission</h3>
              <p className="fst-italic">
                Our mission is to promote clean sport through comprehensive
                anti-doping education and awareness.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Providing accessible anti-doping information to all athletes
                    and stakeholders.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Creating engaging and interactive educational content.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Ensuring the retention and application of anti-doping
                    knowledge through periodic assessments and interactive
                    elements.
                  </span>
                </li>
              </ul>
              <a href="about" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
      {/* Counts Section */}
      <section id="counts" className="section counts light-background">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1232}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Athletes Educated</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={64}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Educational Modules</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={42}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Workshops Conducted</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={24}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Certified Trainers</p>
              </div>
            </div>
            {/* End Stats Item */}
          </div>
        </div>
      </section>
      {/* /Counts Section */}
      {/* Why Us Section */}
      <section id="why-us" className="section why-us">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="why-box">
                <h3>Why Choose Our Platform?</h3>
                <p>
                  Our platform is dedicated to promoting clean sport through
                  comprehensive and engaging anti-doping education. We provide
                  accessible Courses and interactive content to ensure athletes
                  and stakeholders are well-informed.
                </p>
                <div className="text-center">
                  <a href="about" className="more-btn">
                    <span>Learn More</span> <i className="bi bi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Why Box */}
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="row gy-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-xl-4">
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-clipboard-data" />
                    <h4>Comprehensive Courses</h4>
                    <p>
                      Access a wide range of educational materials, including
                      videos, infographics, and interactive modules.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-gem" />
                    <h4>Engaging Content</h4>
                    <p>
                      Our content is designed to be engaging and interactive,
                      ensuring better retention and understanding.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-inboxes" />
                    <h4>Expert Guidance</h4>
                    <p>
                      Learn from certified trainers and experts in the field of
                      anti-doping education.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Why Us Section */}
      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="features-item">
                <i className="bi bi-book" style={{ color: "#ffbb2c" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Educational Modules
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="features-item">
                <i className="bi bi-play-circle" style={{ color: "#5578ff" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Interactive Videos
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="features-item">
                <i className="bi bi-graph-up" style={{ color: "#e80368" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Progress Tracking
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="features-item">
                <i className="bi bi-chat-dots" style={{ color: "#e361ff" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Discussion Forums
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="features-item">
                <i className="bi bi-bell" style={{ color: "#47aeff" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Real-Time Updates
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="features-item">
                <i className="bi bi-award" style={{ color: "#ffa76e" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Certifications
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={700}
            >
              <div className="features-item">
                <i className="bi bi-person-check" style={{ color: "#11dbcf" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Expert Guidance
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <div className="features-item">
                <i
                  className="bi bi-calendar-event"
                  style={{ color: "#4233ff" }}
                />
                <h3>
                  <a href="" className="stretched-link">
                    Workshops &amp; Events
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={900}
            >
              <div className="features-item">
                <i className="bi bi-bar-chart" style={{ color: "#b2904f" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Analytics
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={1000}
            >
              <div className="features-item">
                <i className="bi bi-newspaper" style={{ color: "#b20969" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Latest News
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={1100}
            >
              <div className="features-item">
                <i
                  className="bi bi-question-circle"
                  style={{ color: "#ff5828" }}
                />
                <h3>
                  <a href="" className="stretched-link">
                    FAQs
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={1200}
            >
              <div className="features-item">
                <i className="bi bi-envelope" style={{ color: "#29cc61" }} />
                <h3>
                  <a href="" className="stretched-link">
                    Contact Support
                  </a>
                </h3>
              </div>
            </div>
            {/* End Feature Item */}
          </div>
        </div>
      </section>
      {/* /Features Section */}
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
      {/* /Courses Section */}
      {/* Trainers Index Section */}
      <section id="trainers-index" className="section trainers-index">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="member">
                <img
                  src="https://c.ndtvimg.com/2024-06/b028fft_gautam-gambhir_640x480_03_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
                  className="img-fluid trainer-img"
                  alt=""
                />
                <div className="member-content">
                  <h4>Dr. Gutam Gambhir</h4>
                  <span>Anti-Doping Specialist</span>
                  <p>
                    Expert in anti-doping regulations and practices, dedicated to
                    promoting clean sport and educating athletes.
                  </p>
                  <div className="social">
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
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-lg-4 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="member">
                <img
                  src="https://pragativadi.com/core/uploads/2021/08/ravi-shastri.jpg"
                  className="img-fluid trainer-img"
                  alt=""
                />
                <div className="member-content">
                  <h4>Coach Ravi Shastri</h4>
                  <span>Nutrition Expert</span>
                  <p>
                    Specializes in sports nutrition and supplements, ensuring
                    athletes maintain a healthy and clean diet.
                  </p>
                  <div className="social">
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
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-lg-4 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="member">
                <img
                  src="https://www.aljazeera.com/wp-content/uploads/2023/11/2023-11-19T163119Z_954882799_UP1EJBJ19W4UF_RTRMADP_3_CRICKET-WORLDCUP-IND-AUS-1-1701250140.jpg?resize=1800%2C1800"
                  className="img-fluid trainer-img"
                  alt=""
                />
                <div className="member-content">
                  <h4>Prof. Rahul Dravid</h4>
                  <span>Ethics in Sports</span>
                  <p>
                    Focuses on the ethical aspects of sports, promoting integrity
                    and fair play among athletes.
                  </p>
                  <div className="social">
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
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
      {/* /Trainers Index Section */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .trainer-img {\n    width: 100%;\n    height: 300px;\n    object-fit: cover;\n  }\n"
        }}
      />
    </main>
    </div>
  );
}

export default Home;