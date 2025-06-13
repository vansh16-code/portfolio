import { useState, useEffect } from 'react';

const typingTexts = [
  'a builder of creative, real-world tech experiences.',
  'passionate about full-stack development and AI.',
  'turning ideas into products.'
];

function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < typingTexts[index].length) {
        timeout = setTimeout(() => {
          setDisplayed(typingTexts[index].slice(0, displayed.length + 1));
        }, 40);
      } else {
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed('');
        setIndex((prev) => (prev + 1) % typingTexts.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return <span style={{ color: 'var(--gold)', fontWeight: 700 }}>{displayed}|</span>;
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>
        Hi, I'm Vansh Mahajan — <TypingEffect />
      </h1>
      <p>
        From <span style={{ color: '#fff', fontWeight: 700 }}>AI-powered storytelling</span> to <span style={{ color: '#fff', fontWeight: 700 }}>ride-sharing apps</span> — I turn ideas into products.
      </p>
      <div className="hero-btns">
        <a href="#projects" style={{ background: 'var(--primary)', color: '#fff' }}>View Projects</a>
        <a href="#contact" className="secondary" style={{ background: 'var(--accent)', color: '#fff', border: 'none' }}>Contact Me</a>
      </div>
    </section>
  );
} 