import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
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
              <a href="events">Events</a>
            </li>
            <li>
              <a href="contact" className="active">
                Contact
              </a>
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
                <h1>Contact</h1>
                <p className="mb-0">
                  Get in touch with us for any inquiries related to anti-doping
                  education. Whether you're an athlete, coach, or stakeholder,
                  we're here to provide you with the information and support you
                  need to promote clean sport.
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
              <li className="current">Contact</li>
            </ol>
          </div>
        </nav>
      </div>
      {/* End Page Title */}
      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="mb-5" data-aos="fade-up" data-aos-delay={200}>
          <iframe
            style={{ border: 0, width: "100%", height: 300 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2338683076014!2d78.09591507422874!3d9.914470274502234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf779bade657%3A0xc96731ce97005f2c!2sT169%2C%20Ellis%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625016!5e0!3m2!1sen!2sin!4v1727020277728!5m2!1sen!2sin"
          />
        </div>
        {/* End Google Maps */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-4">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>Address</h3>
                  <p>123 Thiruparankundram</p>
                </div>
              </div>
              {/* End Info Item */}
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>+91 12345 67890</p>
                </div>
              </div>
              {/* End Info Item */}
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email Us</h3>
                  <p>anti-doping@gururaja.in</p>
                </div>
              </div>
              {/* End Info Item */}
            </div>
            <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </main>
    </div>
  );
}

export default Contact;