import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PureCounter from '@srexi/purecounterjs'; // Import PureCounter
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialItem = ({ image, name, role, quote }) => (
  <div className="testimonial-wrap">
    <div className="testimonial-item">
    <img src={image} className="testimonial-img" alt="" />
    <h3>{name}</h3>
    <h4>{role}</h4>
    <div className="stars">
        {[...Array(5)].map((_, i) => (
        <i key={i} className="bi bi-star-fill"></i>
        ))}
    </div>
    <p>
        <i className="bi bi-quote quote-icon-left"></i>
        <span>{quote}</span>
        <i className="bi bi-quote quote-icon-right"></i>
    </p>
    </div>
</div>
);
  
const testimonials = [
{
    image: "./assets/img/trainers/trainer-2.png",
    name: "Sundaramoorthy",
    role: "Professional Athlete",
    quote: "The anti-doping education program has been a game-changer for me. It has provided me with the knowledge and tools to ensure I stay clean and compete fairly. I highly recommend it to all athletes."
},
{
    image: "./assets/img/trainers/trainer-1.png",
    name: "Maheswari",
    role: "Coach",
    quote: "As a coach, it's crucial to educate my athletes about the importance of clean sport. The anti-doping education platform has been an invaluable resource, offering comprehensive and engaging content that my team can easily understand."
},
{
    image: "./assets/img/trainers/trainer-3.png",
    name: "Pandimadevi",
    role: "Sports Nutritionist",
    quote: "The anti-doping education courses have been incredibly informative. They cover everything from prohibited substances to the importance of nutrition in maintaining a clean sport. It's a must for anyone involved in athletics."
}
];

function About() {
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
                <a href="/">
                Home
                <br />
                </a>
            </li>
            <li>
                <a href="about" className="active">
                About
                </a>
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
        {/* Page Title */}
        <div className="page-title" data-aos="fade">
        <div className="heading">
            <div className="container">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                <h1>
                    About Us
                    <br />
                </h1>
                <p className="mb-0">
                    We are dedicated to promoting clean sport through comprehensive
                    anti-doping education and awareness. Our mission is to ensure
                    that athletes, coaches, and stakeholders are well-informed about
                    anti-doping regulations and best practices.
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
                <li className="current">
                About Us
                <br />
                </li>
            </ol>
            </div>
        </nav>
        </div>
        {/* End Page Title */}
        {/* About Us Section */}
        <section id="about-us" className="section about-us">
        <div className="container">
            <div className="row gy-4">
            <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <img
                src="https://images.forbesindia.com/media/images/2013/Mar/topimg_21335_sports.jpg?impolicy=website&width=900&height=600"
                className="img-fluid"
                alt=""
                />
            </div>
            <div
                className="col-lg-6 order-2 order-lg-1 content"
                data-aos="fade-up"
                data-aos-delay={200}
            >
                <h3>Our Commitment to Clean Sport</h3>
                <p className="fst-italic">
                We are dedicated to promoting clean sport through comprehensive
                anti-doping education and awareness. Our mission is to ensure that
                athletes, coaches, and stakeholders are well-informed about
                anti-doping regulations and best practices.
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
            </div>
            </div>
        </div>
        </section>
        {/* /About Us Section */}
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
        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials">
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>What are they saying</p>
          </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
            <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={600}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            slidesPerView="auto"
            pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            }}
            breakpoints={{
                320: {
                slidesPerView: 1,
                spaceBetween: 40,
                },
                1200: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
            }}
            className="init-swiper"
            >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                <TestimonialItem {...testimonial} />
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
            </Swiper>
        </div>
        </section>
        {/* /Testimonials Section */}
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

export default About;
