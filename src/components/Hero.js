import React from 'react';
import Typewriter from 'components/Typewriter';

const Hero = () => {
  const handleScroll = e => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Adityaram Komaraneni" />
      <div className="hero-description">
        I am a Data Science Research Scholar at Columbia University.<br />My
        passion is building intelligent systems that solve real-world problems.<br />Check out my{' '}
        <a href="#projects" onClick={handleScroll}>
          projects
        </a>{' '}
        below.
      </div>
    </div>
  );
};

export default Hero;
