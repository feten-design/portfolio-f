import React, { useEffect } from 'react';

import Typed from 'typed.js';
function HeroSection() {
  
  useEffect(() => {
    const options = {
      strings: ["MEAN Developer", "Freelancer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    const typed = new Typed('.typed', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Selmi Feten</h1>
        <p>I'm <span className="typed"></span></p>
        <div className="social-links">
          <a href="" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/feten.selmi.7792?mibextid=rS40aB7S9Ucbxw6v" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/feten_selmi/" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://github.com/feten-design" className="google-plus"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/feten-selmi-431b7717a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
