import { useState } from 'react';

const projects = [
  {
    title: 'InkPersona',
    desc: 'AI-powered storytelling tool for writers. Simulate interviews with fictional characters based on custom traits.',
    stack: ['Django', 'Bootstrap', 'SQLite', 'OpenAI GPT'],
    features: 'Smart prompt generation, user character profiles, interactive dialogue',
    highlight: 'Signature AI project, well-received by writers and demoed in ideathon',
    type: 'AI',
  },
  {
    title: 'UniPool',
    desc: 'University ride-sharing platform for GNDU students to share rides and reduce travel costs.',
    stack: ['Django', 'PostgreSQL', 'Bootstrap'],
    features: 'Trip creation, user auth, match system, real-time updates',
    highlight: 'Deployed & used in student community',
    type: 'Django',
  },
  {
    title: 'TimeCapsule',
    desc: 'Send messages to the future. Write notes/messages that unlock on a future date.',
    stack: ['React.js', 'Vite', 'Tailwind CSS'],
    features: 'Countdown logic, localStorage, responsive UI',
    highlight: 'Minimal UI, strong time logic; exploring DB sync with Firebase',
    type: 'React',
  },
];

const stacks = ['All', 'React', 'Django', 'AI'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <section id="projects">
      <h2>Notable Projects</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
        {stacks.map(s => (
          <button key={s} onClick={() => setFilter(s)} style={{
            padding: '0.5rem 1.2rem',
            borderRadius: '1.2rem',
            border: '2px solid var(--primary)',
            background: filter === s ? 'var(--primary)' : 'var(--card-bg)',
            color: filter === s ? '#fff' : 'var(--primary)',
            fontWeight: 600,
            fontFamily: 'inherit',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: filter === s ? 'var(--shadow)' : 'none',
            transition: 'all 0.2s',
          }}>{s}</button>
        ))}
      </div>
      <div className="card-list">
        {filtered.map((p) => (
          <div key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="badges">
              {p.stack.map(s => <span key={s} className="badge">{s}</span>)}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{p.features}</p>
            <p style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '0.95rem' }}>{p.highlight}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 