import  { useEffect } from 'react';
import Mobile from "../assets/image/app.jfif"
import Web from "../assets/image/web.jpg"
import Grphic from "../assets/image/graphic.png"
import Ui from "../assets/image/uiux.png"
import System from "../assets/image/computerrr.jfif"
import "../assets/services.css"

function Services() {

    useEffect(() => {
        // Intersection Observer API for triggering animation on scroll
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn'); // Add class to trigger animation
              }
            });
          },
          {
            threshold: 0.5, // Trigger animation when 50% of element is visible
          }
        );
    
        // Target all elements we want to animate
        const targets = document.querySelectorAll('.fade-in');
        targets.forEach((target) => observer.observe(target));
    
        // Cleanup observer on unmount
        return () => observer.disconnect();
      }, []);

  return (
    <div className="container my-5">
    <h1 className="text-center mb-5 mt-5">Our Services</h1>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {/* UI/UX Design Card */}
      <div className="col">
        <div className="card h-100 shadow-lg animate__animated animate__fadeIn hover-card">
          <img
            src={Ui}
            className="card-img-top"
            alt="UI/UX Design"
          />
          <div className="card-body">
            <h5 className="card-title">UI/UX Design</h5>
            <p className="card-text">
              We create user-friendly and visually appealing designs to ensure the best experience for your users.
            </p>
            <a href="/services/ui-ux-design" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      {/* Website Development Card */}
      <div className="col">
        <div className="card h-100 shadow-lg animate__animated animate__fadeIn hover-card">
          <img
            src={Web}
            className="card-img-top"
            alt="Website Development"
          />
          <div className="card-body">
            <h5 className="card-title">Website Development</h5>
            <p className="card-text">
              We build responsive, modern, and high-performance websites tailored to your needs.
            </p>
            <a href="/services/website-development" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      {/* App Development Card */}
      <div className="col">
        <div className="card h-100 shadow-lg animate__animated animate__fadeIn hover-card">
          <img
            src={Mobile}
            className="card-img-top"
            alt="App Development"
          />
          <div className="card-body">
            <h5 className="card-title">App Development</h5>
            <p className="card-text">
              We develop mobile applications for both Android and iOS to enhance user interaction.
            </p>
            <a href="/services/app-development" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      {/* Graphics Design Card */}
      <div className="col">
        <div className="card h-100 shadow-lg animate__animated animate__fadeIn hover-card">
          <img
            src={Grphic}
            className="card-img-top"
            alt="Graphics Design"
          />
          <div className="card-body">
            <h5 className="card-title">Graphics Design</h5>
            <p className="card-text">
              We offer creative designs for logos, branding, marketing materials, and more.
            </p>
            <a href="/services/graphics-design" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>

      {/* System Dealer and Repairs Card */}
      <div className="col">
        <div className="card h-100 shadow-lg animate__animated animate__fadeIn hover-card">
          <img
            src={System}
            className="card-img-top"
            alt="System Dealer and Repairs"
          />
          <div className="card-body">
            <h5 className="card-title">System Dealer & Repairs</h5>
            <p className="card-text">
              We provide reliable systems and offer repairs to ensure your equipment runs smoothly.
            </p>
            <a href="/services/system-dealer-repairs" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services