import React, { useRef } from 'react';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const useScramble = () => {
  const intervalRef = useRef(null);

  const scramble = (element, originalText) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let iteration = 0;
    intervalRef.current = setInterval(() => {
      element.innerText = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) return originalText[index];
          return LETTERS[Math.floor(Math.random() * 26)];
        })
        .join('');
      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
        element.innerText = originalText;
      }
      iteration += 1 / 2;
    }, 25);
  };

  return scramble;
};

const ScrambleLink = ({ href, onClick, children }) => {
  const ref = useRef(null);
  const scramble = useScramble();
  const originalText = typeof children === 'string' ? children : '';

  const handleMouseEnter = () => {
    if (ref.current && originalText) scramble(ref.current, originalText);
  };

  return (
    <a href={href} onClick={onClick} onMouseEnter={handleMouseEnter}>
      <span ref={ref}>{children}</span>
    </a>
  );
};

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ScrambleLink href="#projects" onClick={e => handleScroll(e, 'projects')}>
          Projects
        </ScrambleLink>
        <ScrambleLink href="#research" onClick={e => handleScroll(e, 'research')}>
          Research
        </ScrambleLink>
        <ScrambleLink href="#contact" onClick={e => handleScroll(e, 'contact')}>
          Contact
        </ScrambleLink>
      </nav>
    </div>
  );
};

export default Navbar;
