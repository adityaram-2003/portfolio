import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const ballRef = useRef(null);
  const posRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouseRef = useRef({ x: posRef.current.x, y: posRef.current.y });
  const rafRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    const onMove = e => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onEnterLink = () => ball.classList.add('cursor-grow');
    const onLeaveLink = () => ball.classList.remove('cursor-grow');

    const speed = 0.12;

    const tick = () => {
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * speed;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * speed;
      ball.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(tick);

    const addListeners = () => {
      document.querySelectorAll('a, button, .project-link').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };

    // slight delay to let DOM settle
    const timer = setTimeout(addListeners, 500);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
    };
  }, []);

  return <div className="cursor-ball" ref={ballRef} />;
};

export default CustomCursor;
