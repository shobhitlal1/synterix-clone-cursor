import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const ball = document.createElement('div');
    ball.className = 'cursor-ball';
    document.body.appendChild(ball);

    const moveBall = (e) => {
      ball.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener('mousemove', moveBall);
    return () => {
      window.removeEventListener('mousemove', moveBall);
      ball.remove();
    };
  }, []);

  return null;
}
