import React from 'react';

const Footer = () => {
  return (
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
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/about">About</a>
                </li>
                <li>
                <a href="/courses">Courses</a>
                </li>
                <li>
                <a href="/trainers">Trainers</a>
                </li>
                <li>
                <a href="/events">Events</a>
                </li>
                <li>
                <a href="/contact">Contact</a>
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
  );
};

export default Footer;
