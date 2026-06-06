import React, { useEffect } from 'react';
import Typed from 'typed.js';
import profilePic from '../assets/profilePic.jpg'

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ['Web Designer', 'Web Developer', 'Problem Solver', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="home active section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Pratibha Maurya</span>
            </h3>
            <h3 className="my-profession">
              I am a <span className="typing"></span>
            </h3>
            <p>
              A web developer passionate about creating responsive, user-friendly
              websites and platforms. Skilled in HTML, CSS, JavaScript, and backend
              integration, with interest in blockchain and more...
            </p>
            <a href="#" className="btn">Download Resume</a>
          </div>
          <div className="home-img padd-15">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
